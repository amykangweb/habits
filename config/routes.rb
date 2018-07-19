Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :habits
      resources :goals
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :habits
  resources :goals

  root 'homepage#show'
end
