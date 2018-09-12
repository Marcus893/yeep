Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :businesses, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
