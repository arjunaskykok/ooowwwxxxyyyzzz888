class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.string :body
      t.integer :product_id

      t.timestamps
    end
  end
end
