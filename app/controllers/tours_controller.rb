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
    if current_user.nil?
      @tours = Tour.none
    else
      @tours = current_user.tours
    end
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

  def drank_here_button
    # Permission.find_by(user_id: params[:user_id], project_id: params[:project_id])

    @tour = Tour.find_by(user_id: params[:user_id], brewery_id: params[:brewery_id])
    render :json => @tour
  end


  private
  def tour_params
    params.require(:tour).permit(:brewery_id, :user_id, :been_here)
  end
end
