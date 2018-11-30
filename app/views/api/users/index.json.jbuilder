@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :firstname, :lastname, :email, :zipcode, :img_url, :uploads, :reviews
  end
end
