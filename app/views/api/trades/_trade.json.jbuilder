json.id trade.id

json.requester do
  json.id trade.requester_id
  json.name trade.requester.username
  json.item do
    json.id trade.offer_item_id
    json.name trade.offer_item.name
  end
end

json.receiver do
  json.id trade.receiver_id
  json.name trade.receiver.username
  json.item do
    json.id trade.request_item_id
    json.name trade.request_item.name
  end
end