class Brewery < ActiveRecord::Base
  has_many :beers
  has_many :tours
  validate :is_unique

  def is_unique
    if Brewery.find_by(brewery_name: brewery_name) && Brewery.find_by(streetAddress: streetAddress)
      errors.add(:base, "Exists");
    end
  end
end
