import * as ACTION_TYPES from '../../../constants/actionTypes';
import PageInitialState from '../../helpers/page/PageInitialState';

const pageInfo = (state = PageInitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ON_PROCESS_PAGE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTION_TYPES.ON_PROCESS_PAGE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};

export default pageInfo;
