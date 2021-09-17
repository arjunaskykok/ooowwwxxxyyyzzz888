require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get products_url
    assert_response :success
    assert_equal "index", @controller.action_name
    assert_match "Product1", @response.body
    assert_match "Product2", @response.body
  end

  test "should get review" do
    product = products(:one)
    get reviews_url(product)
    assert_response :success
    assert_match "Product1", @response.body
    assert_match "good", @response.body
    assert_match "3", @response.body
  end

  test "should post review" do
    product = products(:one)
    post submit_review_url(product), params: { stars: 3, body: 'hmmmm', product_id: product.id }, xhr: true
    assert_response :created
    assert_match "hmmm", @response.body
    assert_equal Review.where(body: 'hmmmm').size(), 1
  end
end
