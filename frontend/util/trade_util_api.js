export const fetchTrades = () => (
  $.ajax({
    method: "GET",
    url: "/api/trades"
  })
);

export const createTrade = trade => (
  $.ajax({
    method: "POST",
    url: "/api/trades",
    data: { trade }
  })
);

export const updateTrade = trade => (
  $.ajax({
    method: "PATCH",
    url: `/api/trades/${trade.id}`,
    data: { trade }
  })
);

export const destroyTrade = tradeId => (
  $.ajax({
    method: "DELETE",
    url: `/api/trades/${tradeId}`
  })
);