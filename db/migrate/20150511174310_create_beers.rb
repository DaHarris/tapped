class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :beer_name
      t.string :type
      t.string :description
      t.integer :rating
      t.integer :abv
      t.integer :ibu
      t.string :beer_pic
      t.belongs_to :brewery, index: true, foreign_key: true
      t.belongs_to :user, index: true, foreign_key: true
    end
  end
end
