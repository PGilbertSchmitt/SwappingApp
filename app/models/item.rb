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
