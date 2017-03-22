class Trade < ApplicationRecord
  after_initialize :initiate_pending
  validates :requester, :receiver, :request_item, :offer_item, presence: true
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
