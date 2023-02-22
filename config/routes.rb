Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      post "/users", to: "users#create"
      # get "/me", to: "users#me"
      # post "/auth/login", to: "auth#login"    
    end
  end
end
