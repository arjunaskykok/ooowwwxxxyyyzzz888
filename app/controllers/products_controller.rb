class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def reviews
    @product = Product.find(params[:id])
    @ratings_average = Review.where(product_id: @product.id).average(:stars).round(2)
    @reviews = @product.reviews.order(created_at: :desc)
  end
end
