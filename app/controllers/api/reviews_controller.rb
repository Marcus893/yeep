class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Review.includes(:author).includes(:business).all[0..8]

  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :business_id, :author_id)
  end
end
