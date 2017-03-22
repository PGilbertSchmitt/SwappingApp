export const fetchTrades = (tradeParams) => (
  $.ajax({
    method: "GET",
    url: "/api/trades"
  })
);