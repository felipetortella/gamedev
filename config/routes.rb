Rails.application.routes.draw do
  resources :customers
  scope "(:locale)", locale: /en|br/ do
    resources :landings
    get '/:locale' => 'landings#index'
    root 'landings#index'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
