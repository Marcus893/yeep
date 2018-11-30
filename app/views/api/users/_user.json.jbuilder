json.extract! user, :id, :firstname, :lastname, :email, :zipcode, :img_url, :uploads

json.review_count user.reviews.length
json.photo_count user.uploads.length
