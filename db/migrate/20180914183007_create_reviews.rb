class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :business_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
