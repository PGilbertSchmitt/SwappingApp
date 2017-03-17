class Item < ApplicationRecord
  CATEGORIES = %w(
    clothing
    jewelry
    entertainment
    home_and_living
    kids
  ).freeze
  
  validates(
    :owner,
    :name,
    :description,
    :photo_url,
    presence: true
  )

  validates :category, presence: true, inclusion: CATEGORIES

  belongs_to(
    :owner,
    foreign_key: :owner_id,
    class_name: :User
  )

end
