class ToursController < ApplicationController
  def create
    @tour = Tour.new(tour_params)
    # @brewery = Brewery.find_by_brewery_name(params[:brewery_name])
    # @tour.brewery_id = @brewery.id
    @tour.user_id = current_user.id
    if @tour.save
      render :nothing => true
    end
  end

  def visited
    @tours = current_user.tours
    @breweries = Brewery.all
    @visited = []
    @not_visited = []
    @breweries.each do |brewery|
      if @tours.find_by(brewery_id: brewery.id)
        @visited << brewery
      else
        @not_visited << brewery
      end
    end
    render :json => {visited: @visited, not_visited: @not_visited}
  end


  private
  def tour_params
    params.require(:tour).permit(:brewery_id, :user_id, :been_here)
  end
end
