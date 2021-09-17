class SupportHalfStar < ActiveRecord::Migration[6.1]
  def change
    change_table :reviews do |t|
      t.change :stars, :float
    end
  end
end
