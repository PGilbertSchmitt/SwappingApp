import merge from 'lodash/merge';

export const searchItems = searchParams => {
  const searchQuery = $.param(searchParams);
  return $.ajax({
    method: "GET",
    url: `/api/items/?${searchQuery}`
  });
};

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