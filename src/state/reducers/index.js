import { combineReducers } from 'redux';
import pageInfo from './page/pageReducer';
import podcastsInfo from './podcasts/podcastsListReducer';
import podcastDetailInfo from './podcasts/podcastDetailReducer';

const rootReducer = combineReducers({
  pageInfo,
  podcastDetailInfo,
  podcastsInfo,
});

export default rootReducer;
