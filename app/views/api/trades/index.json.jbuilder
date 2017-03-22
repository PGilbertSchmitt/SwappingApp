json.incoming_trades do
  json.array! @incoming_trades do |trade|
    json.partial! 'api/trades/trade', trade: trade
  end
end

json.outgoing_trades do
  json.array! @outgoing_trades do |trade|
    json.partial! 'api/trades/trade', trade: trade
  end
end