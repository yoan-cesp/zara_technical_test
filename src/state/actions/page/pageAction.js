import * as ACTION_TYPES from '../../../constants/actionTypes';

export const processPageLoading = (payload) => {
  return {
    type: ACTION_TYPES.ON_PROCESS_PAGE_LOADING,
    payload,
  };
};

export const processPageError = (payload) => {
  return {
    type: ACTION_TYPES.ON_PROCESS_PAGE_ERROR,
    payload,
  };
};
