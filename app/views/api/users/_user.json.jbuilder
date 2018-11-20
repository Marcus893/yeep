json.extract! user, :id, :firstname, :lastname, :email, :zipcode, :img_url

json.review_count user.reviews.length
json.photo_count user.uploads.length 
