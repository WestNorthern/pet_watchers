Rails.application.routes.draw do
  resources :bookings
  root 'bookings#new'
  get "up" => "rails/health#show", as: :rails_health_check
end
