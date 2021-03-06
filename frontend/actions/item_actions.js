import * as ItemApi from '../util/item_util_api';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_CURRENT_ITEM = "RECEIVE_CURRENT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const RECEIVE_ITEM_ERROR = "RECEIVE_ITEM_ERROR";
export const CLEAN_ITEM_ERRORS = "CLEAN_ITEM_ERRORS";

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveListings = items => ({
  type: RECEIVE_LISTINGS,
  items
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveCurrentItem = item => ({
  type: RECEIVE_CURRENT_ITEM,
  item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId
});

export const receiveItemErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS,
  errors
});

export const receiveItemError = error => ({
  type: RECEIVE_ITEM_ERROR,
  error
});

export const cleanItemErrors = () => ({
  type: CLEAN_ITEM_ERRORS
});

// THUNKERS

export const searchItems = searchParams => dispatch => (
  ItemApi.searchItems(searchParams)
    .done(items => dispatch(receiveItems(items)))
);

export const getItemListings = id => dispatch => (
  ItemApi.searchItems({ user_id: id, category: "all" })
    .done(items => dispatch(receiveListings(items)))
);

export const getItem = itemId => dispatch => (
  ItemApi.getItem(itemId)
    .done(item => dispatch(receiveCurrentItem(item)))
);

export const createItem = itemIn => dispatch => (
  ItemApi.createItem(itemIn)
    .done(item => dispatch(receiveItem(item)))
    .fail(errors => dispatch(receiveItemErrors(errors)))
);

export const updateItem = itemIn => dispatch => (
  ItemApi.updateItem(itemIn)
    .done(item => dispatch(receiveItem(item)))
    .fail(errors => dispatch(receiveItemErrors(errors)))
);

export const destroyItem = itemId => dispatch => (
  ItemApi.destroyItem(itemId)
    .done(item => dispatch(removeItem(item)))
);

// For testing only
window.searchItems = searchItems;
window.getItem = getItem;
window.createItem = createItem;
window.updateItem = updateItem;
window.destroyItem = destroyItem;