export const fetchTrades = () => (
  $.ajax({
    method: "GET",
    url: "/api/trades"
  })
);