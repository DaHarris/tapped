class AddBreweryNameToTours < ActiveRecord::Migration
  def change
    add_column :tours, :brewery_name, :string
  end
end
