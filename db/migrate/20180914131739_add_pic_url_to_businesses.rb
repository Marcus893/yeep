class AddPicUrlToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :pic_url, :string
  end
end
