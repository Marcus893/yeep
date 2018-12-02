class Upload < ApplicationRecord


  belongs_to :user
  belongs_to :business

  has_one_attached :photo
end
