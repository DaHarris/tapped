class Beer < ActiveRecord::Base
  belongs_to :brewery
  belongs_to :user

  mount_uploader :beer_pic, BeerPicUploader

end
