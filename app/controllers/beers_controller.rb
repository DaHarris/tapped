class BeersController < ApplicationController
  def create
    @beer = Beer.new(beer_params)
    @brewery = Brewery.find_by_brewery_name(params[:brewery_name])
    @beer.brewery_id = @brewery.id
    @beer.user_id = current_user.id
    if @beer.save
      redirect_to root_path
    else
      respond_with json: {:errors => @beer.errors.full_messages}
    end
  end

  def update
  end

  def destroy
  end

  private
  def beer_params
    params.require(:beer).permit(:beer_name, :type_of, :description, :rating, :abv, :ibu, :beer_pic, :brewery_id, :user_id, :brewery_name)
  end
end
