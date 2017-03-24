module Api::TradesHelper
  def swap_owners(trade)
    requester_id = trade.requester.id
    receiver_id = trade.receiver.id

    return false unless trade.request_item
        .update_attributes(owner_id: requester_id)
    return false unless trade.offer_item
        .update_attributes(owner_id: receiver_id)
    
    true
  end
end
