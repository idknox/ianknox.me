Rails.application.routes.draw do
  root 'homepage#show'

  get '/chart' => 'homepage#github_chart', as: :github_chart
  get '/.well-known/acme-challenge/:id' => 'certs#letsencrypt'
end
