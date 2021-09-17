require "test_helper"

class ProductTest < ActiveSupport::TestCase
  test "should not save product without title" do
    product = Product.new
    assert_not product.save, "Saved the product without a title"
  end
end
