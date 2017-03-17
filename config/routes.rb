Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create do
      resources :items, only: :index
    end
    resource :session, only: [:create, :destroy]
    resources :items, except: [:index, :new, :edit]
  end
end
