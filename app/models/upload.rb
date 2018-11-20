class Upload < ApplicationRecord
  validates :user_id, :business_id, presence: true

  belongs_to :user
  belongs_to :business

  has_one_attached :photo
end
