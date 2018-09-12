class RemoveProfileUrlFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :profile_url, :string
  end
end
