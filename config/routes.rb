Rails.application.routes.draw do
  root 'pages#index'
  get 'pages/index'
  resources :bookings
  get "up" => "rails/health#show", as: :rails_health_check
end
