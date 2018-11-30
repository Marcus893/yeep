@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :author_id, :business_id, :rating, :body, :author, :business
  end
end 
