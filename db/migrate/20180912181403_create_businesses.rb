class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.float :lat
      t.float :lng
      t.text :body

      t.timestamps
    end
  end
end
