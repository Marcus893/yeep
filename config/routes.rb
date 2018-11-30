Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :businesses, only: [:index, :show, :create]
    resources :reviews, only: [:create, :index, :show]
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :uploads, only: [:create]
  end

  root "static_pages#root"
end
