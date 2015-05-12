class AddToBreweries < ActiveRecord::Migration
  def change
    add_column :breweries, :latitude, :string, default: ""
    add_column :breweries, :longitude, :string, default: ""
    add_column :breweries, :streetAddress, :string, default: ""
    add_column :breweries, :zipcode, :integer
    add_column :breweries, :website, :string, default: ""
    add_column :breweries, :phone, :string, default: ""
    add_column :breweries, :established, :string, default: ""
    remove_column :breweries, :location, :string, default: ""
  end
end
