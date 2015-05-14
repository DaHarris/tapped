class Beer < ActiveRecord::Base
  belongs_to :brewery
  belongs_to :user

  mount_uploader :beer_pic, BeerPicUploader
  validates_presence_of :beer_name, :rating, :type_of
  validates :beer_name, uniqueness: true
  validates :abv, :numericality => { :less_than_or_equal_to => 100 }
  validates :ibu, :numericality => true
end
