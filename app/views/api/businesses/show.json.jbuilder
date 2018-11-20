json.business do
  json.partial! '/api/businesses/business', business: @business
  json.reviewIds @business.reviews.pluck(:id)
end

@business.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.partial! 'api/users/user', user: review.author
    end
  end
end

json.photos do
  @business.uploads.each do |up|
    json.set! up.id do
      json.url url_for(up.photo)
      json.user_id up.user_id
      json.business_id up.business_id
    end
  end
end 
