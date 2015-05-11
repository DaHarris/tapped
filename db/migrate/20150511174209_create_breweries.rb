class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|
      t.string :brewery_name
      t.string :logo
      t.string :description
      t.string :location
      t.string :menu
    end
  end
end
