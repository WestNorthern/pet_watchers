Rails.application.routes.draw do
  get 'components/index'
  root 'components#index'
  get "up" => "rails/health#show", as: :rails_health_check
end
