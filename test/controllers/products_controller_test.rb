require "test_helper"
require "json"

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

  test "should get product and its review" do
    product = products(:one)
    get product_reviews_url(product)
    assert_response :success
    json_result = JSON.parse(@response.body)
    assert_equal "Product1", json_result["title"]
    assert_equal 3.0, json_result["rating_average"].to_f
    review1 = {"stars" => 2, "body" => "bad"}
    review2 = {"stars" => 4, "body" => "good"}
    assert_equal review1, json_result["reviews"][0]
    assert_equal review2, json_result["reviews"][1]
  end
end
