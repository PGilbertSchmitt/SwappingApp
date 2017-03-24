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

  def remove_conflicts(trade)
    Trade.where(
      "id <> ? AND (request_item_id = ? OR offer_item_id = ? OR request_item_id = ? OR offer_item_id = ?)", 
      trade.id, 
      trade.request_item_id,
      trade.request_item_id,
      trade.offer_item_id,
      trade.offer_item_id
    ).destroy_all
  end

  def organize_trades
    [
      current_user
        .outgoing_trades
        .where(status: "PENDING")
        .order("created_at DESC"),
      current_user
        .incoming_trades
        .where(status: "PENDING")
        .order("created_at DESC")
      ]
  end
end
