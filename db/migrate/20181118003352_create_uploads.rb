class CreateUploads < ActiveRecord::Migration[5.2]
  def change
    create_table :uploads do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false

      t.timestamps
    end
    add_index :uploads, :user_id
    add_index :uploads, :business_id
  end
end
