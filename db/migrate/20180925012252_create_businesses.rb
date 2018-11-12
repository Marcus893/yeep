class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.float :lat
      t.float :lng
      t.string :body
      t.text :pic_url, array: true, default: []
      t.string :category
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
