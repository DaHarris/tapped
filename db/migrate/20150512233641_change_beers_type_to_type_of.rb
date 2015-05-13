class ChangeBeersTypeToTypeOf < ActiveRecord::Migration
  def change
    remove_column :beers, :type
    add_column :beers, :type_of, :string
  end
end
