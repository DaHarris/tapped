class RemoveBNameFromTours < ActiveRecord::Migration
  def change
    remove_column :tours, :brewery_name
  end
end
