Rails.application.routes.draw do
  resources :posts, except: :index
  devise_for :users
  
  root :to => "home#index"
end
