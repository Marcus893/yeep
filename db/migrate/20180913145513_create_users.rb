class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :email, null: false
      t.integer :zipcode, null: false
      t.string :img_url, default: "https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :firstname, unique: true
    add_index :users, :lastname, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
