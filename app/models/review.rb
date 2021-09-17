class Review < ApplicationRecord
  belongs_to :product
  validates :stars, :inclusion => 1..5
end
