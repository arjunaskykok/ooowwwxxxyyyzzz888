require "test_helper"

class ReviewTest < ActiveSupport::TestCase
  test "should not save review with negative stars" do
    product = Product.first()
    review = Review.new(stars: -1, body: "bad", product_id: product.id)
    assert_not review.save, "Saved the review with negative stars"
  end

  test "should not save review with more than 5 stars" do
    product = Product.first()
    review = Review.new(stars: 7, body: "good", product_id: product.id)
    assert_not review.save, "Saved the review with more than 5 stars"
  end

  test "should save review with 3 stars" do
    product = Product.first()
    review = Review.new(stars: 3, body: "good", product_id: product.id)
    assert review.save, "Couldn't save the review with 3 stars"
  end

  test "should save review with a number and half stars" do
    product = Product.first()
    review = Review.new(stars: 3.5, body: "good", product_id: product.id)
    assert review.save, "Couldn't save the review with a number and half stars"
  end

  test "shouldn't save review with a number and decimal other than half stars" do
    product = Product.first()
    review = Review.new(stars: 3.8, body: "good", product_id: product.id)
    assert_not review.save, "Couldn't save the review with a number and half stars"
  end
end
