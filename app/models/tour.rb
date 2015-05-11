class Tour < ActiveRecord::Base
  belongs_to :user
  belongs_to :brewery
end
