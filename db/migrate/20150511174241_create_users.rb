class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :oath_user_id
      t.string :token
      t.string :secret
    end
  end
end
