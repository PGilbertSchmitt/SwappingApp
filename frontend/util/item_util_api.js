export const getUserItems = userId => (
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/items`
  })
);

export const getItem = itemId => (
  $.ajax({
    method: "GET",
    url: `/api/items/${itemId}`
  })
);

export const createItem = item => (
  $.ajax({
    method: "POST",
    url: "/api/items",
    data: { item }
  })
);

export const updateItem = item => (
  $.ajax({
    method: "PATCH",
    url: `/api/items/${item.id}`,
    data: { item }
  })
);

export const destroyItem = itemId => (
  $.ajax({
    method: "DESTROY",
    url: `/api/items/${itemId}`
  })
);