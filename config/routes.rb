Rails.application.routes.draw do
  root to: 'pages#home'
  get '/menu', to: 'pages#menu'
  get '/ta_menu', to: 'pages#ta_menu'
  get '/our_story', to: 'pages#our_story'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
