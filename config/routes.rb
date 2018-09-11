Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :businesses, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end
