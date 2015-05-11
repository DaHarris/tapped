class CreateTours < ActiveRecord::Migration
  def change
    create_table :tours do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :brewery, index: true, foreign_key: true
    end
  end
end
