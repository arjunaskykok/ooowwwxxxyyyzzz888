class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def reviews
    @product = Product.find(params[:id])
    @ratings_average = Review.where(product_id: @product.id).average(:stars).round(2)
    @reviews = @product.reviews.order(created_at: :desc)
  end

  def submit_review
    stars = params[:stars]
    body = params[:body]
    product_id = params[:product_id]
    rating = Review.new(stars: stars, body: body, product_id: product_id)
    if rating.save
      ActionCable.server.broadcast("reviews_info", { body: "update" })
      render json: rating, status: :created
    else
      render json: rating.errors, status: :unprocessable_entity
    end
  end

  def product_info
    product = Product.find(params[:id])
    rating_average = Review.where(product_id: product.id).average(:stars).round(2)
    reviews = product.reviews.order(created_at: :desc)
    reviews_json = []
    reviews.each {|r|
      reviews_json.append({
        "stars": r.stars,
        "body": r.body
      })
    }
    result = {
      "title": product.title,
      "rating_average": rating_average,
      "reviews": reviews_json
    }
    render json: result, status: :ok
  end
end
