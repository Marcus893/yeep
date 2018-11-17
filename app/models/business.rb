class Business < ApplicationRecord
  validates :name, :lat, :lng, presence: true

  has_many :reviews

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.search(businesses, search)
    if search
      arr = businesses.select {|biz| biz.category.downcase == search.downcase || biz.category.downcase.split(" ").include?(search.downcase)}
    end
    arr.uniq 
  end

  def average_rating
    reviews.average(:rating)
  end
end
