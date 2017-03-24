export const RECEIVE_SEARCH_PARAMS = "RECEIVE_SEARCH_PARAMS";
export const RECEIVE_SEARCH_PARAM = "RECEIVE_SEARCH_PARAM";
export const CLEAN_SEARCH_PARAMS = "CLEAN_SEARCH_PARAMS";

export const receiveSearchParams = params => ({
  type: RECEIVE_SEARCH_PARAMS,
  params
});

export const receiveSearchParam = param => ({
  type: RECEIVE_SEARCH_PARAM,
  param
});

export const cleanSearchParams = () => ({
  type: CLEAN_SEARCH_PARAMS
});

window.receiveSearchParam = receiveSearchParam;