import * as ACTION_TYPES from '../../../constants/actionTypes';
import { EXPIRATION_DATE } from '../../../constants/constants';

const podcastDetailInfo = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_SINGLE_PODCAST:
      if (!state[action.id]) {
        return {
          ...state,
          [action.id]: {
            ...action.payload,
            expirationDate: EXPIRATION_DATE,
          },
        };
      }
      return state;
    default:
      return state;
  }
};


export default podcastDetailInfo;
