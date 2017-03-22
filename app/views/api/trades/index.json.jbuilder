json.array! @trades do |trade|
  json.partial! 'api/trades/trade', trade: trade
end