import * as ItemApi from '../util/item_util_api';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
});

// THUNKERS

export const getUserItems = (userId, params) => dispatch => (
  ItemApi.getUserItems(userId, params)
    .done(items => dispatch(receiveItems(items)))
);

export const searchItems = searchParams => dispatch => (
  ItemApi.searchItems(searchParams)
    .done(items => dispatch(receiveItems(items)))
);

export const getItem = itemId => dispatch => (
  ItemApi.getItem(itemId)
    .done(item => dispatch(receiveItem(item)))
);

export const createItem = itemIn => dispatch => (
  ItemApi.createItem(itemIn)
    .done(item => dispatch(receiveItem(item)))
);

export const updateItem = itemIn => dispatch => (
  ItemApi.updateItem(itemIn)
    .done(item => dispatch(receiveItem(item)))
);

export const destroyItem = itemId => dispatch => (
  ItemApi.destroyItem(itemId)
    .done(item => dispatch(removeItem(item)))
);

// For testing only
window.getUserItems = getUserItems;
window.searchItems = searchItems;
window.getItem = getItem;
window.createItem = createItem;
window.updateItem = updateItem;
window.destroyItem = destroyItem;