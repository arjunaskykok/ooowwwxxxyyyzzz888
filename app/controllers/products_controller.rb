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
      render json: rating, status: :created
    else
      render json: rating.errors, status: :unprocessable_entity
    end
  end
end
