Rails.application.routes.draw do
  root 'homepage#show'
  get '/homepage' => 'homepage#index'
end
