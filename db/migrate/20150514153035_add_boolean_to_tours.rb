class AddBooleanToTours < ActiveRecord::Migration
  def change
    add_column :tours, :been_here, :boolean
  end
end
