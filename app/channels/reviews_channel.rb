class ReviewsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "reviews_info"
  end
end
