class PagesController < ApplicationController
  def home
      @markers =
      {
        lat: -31.9872804,
        lng: 115.9024542,
      }
  end
end
