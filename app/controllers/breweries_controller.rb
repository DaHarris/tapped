class BreweriesController <  ApplicationController

  def create
    @breweries = params["brewery"]["breweries"]
    @breweries.each do |brew|
      if brew[1]["isClosed"] == "Y"
        next;
      end

      brewery = Brewery.new
      brewery.brewery_name = brew[1]["brewery"]["name"]
      brewery.logo = brew[1]["brewery"]["images"]["medium"] if brew[1]["brewery"]["images"]
      brewery.description = brew[1]["brewery"]["description"] if brew[1]["brewery"]["description"]
      brewery.latitude = brew[1]["latitude"]
      brewery.longitude = brew[1]["longitude"]
      brewery.streetAddress = brew[1]["streetAddress"] if brew[1]["streetAddress"]
      brewery.zipcode = brew[1]["postCode"] if brew[1]["postCode"]
      brewery.website = brew[1]["brewery"]["website"] if brew[1]["brewery"]["website"]
      brewery.phone = brew[1]["phone"] if brew[1]["phone"]
      brewery.established = brew[1]["brewery"]["established"] if brew[1]["brewery"]["established"]
      brewery.save
    end
  end

  def brewery
    @brewery = Brewery.find_by_brewery_name(params[:brewery_name])
    @beers = @brewery.beers
    render :json => {brewery: @brewery, beers: @beers}
  end

  def find_brewery
    @brewery = Brewery.find_by_brewery_name(params[:brewery_name])
    render json: @brewery
  end
end
