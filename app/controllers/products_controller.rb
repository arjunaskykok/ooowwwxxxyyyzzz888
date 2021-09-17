class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def reviews
    @product = Product.find(params[:id])
    @ratings_average = Review.where(product_id: @product.id).average(:stars)
    @reviews = @product.reviews.order(created_at: :desc)
  end
end
