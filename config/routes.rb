Rails.application.routes.draw do
  root "products#index"

  get "/products", to: "products#index"

  get "/products/:id", to: "products#reviews", as: 'reviews'

  post "/products/submit-review", to: "products#submit_review", as: 'submit_review'

  get "/products/info/:id", to: "products#product_info", as: 'product_reviews'

end
