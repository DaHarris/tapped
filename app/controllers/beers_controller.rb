class BeersController < ApplicationController
  def create
    @brewery = Brewery.find_by_name(:name)
  end

  def update
  end

  def destroy
  end
end
