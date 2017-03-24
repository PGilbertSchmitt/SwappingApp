# == Schema Information
#
# Table name: trades
#
#  id              :integer          not null, primary key
#  requester_id    :integer          not null
#  receiver_id     :integer          not null
#  request_item_id :integer          not null
#  offer_item_id   :integer          not null
#  status          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Trade < ApplicationRecord
  after_initialize :initiate_pending
  validates :requester_id,
            :receiver_id,
            :request_item_id,
            :offer_item_id,
            presence: true
  validates_uniqueness_of :request_item_id, scope: [:offer_item_id]
  validates :status, presence: true, inclusion: %w(PENDING COMPLETE)

  belongs_to(
    :requester,
    class_name: :User
  )

  belongs_to(
    :receiver,
    class_name: :User
  )

  belongs_to(
    :request_item,
    class_name: :Item
  )
  
  belongs_to(
    :offer_item,
    class_name: :Item
  )

  def initiate_pending
    self.status ||= "PENDING"
  end
end
