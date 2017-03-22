# == Schema Information
#
# Table name: items
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  name        :string           not null
#  description :text             not null
#  photo_url   :string           not null
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Item < ApplicationRecord
  validates(
    :owner,
    :name,
    :description,
    :photo_url,
    presence: true
  )

  def self.categories
    %w(
      clothing
      jewelry
      entertainment
      home_and_living
      kids
      electronics
    )
  end

  categories = Item.categories
  validates :category, presence: true, inclusion: categories

  belongs_to(
    :owner,
    foreign_key: :owner_id,
    class_name: :User
  )

  has_many(
    :trades_as_offer,
    class_name:  :Trade,
    foreign_key: :offer_item_id
  )

  has_many(
    :trades_as_request,
    class_name:  :Trade,
    foreign_key: :request_item_id
  )
end
