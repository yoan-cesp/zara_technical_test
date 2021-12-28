import * as ACTION_TYPES from '../../../constants/actionTypes';
import podcastsInitialState from '../../helpers/podcasts/podcastsInitialState';
import { EXPIRATION_DATE } from '../../../constants/constants';

const podcastsInfo = (state = podcastsInitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_PODCASTS:
      return {
        ...state,
        podcastsList: action.payload,
        podcastsFilteredList: action.payload,
        expirationDate: EXPIRATION_DATE,
      };
    case ACTION_TYPES.ON_FILTER_PODCASTS:
      return {
        ...state,
        podcastsFilteredList: action.payload,
      };
    default:
      return state;
  }
};

export default podcastsInfo;
