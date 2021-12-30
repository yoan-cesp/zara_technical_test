import axios from 'axios';
import { ITUNES_URL } from '../../../constants/constants';
import * as ACTION_TYPES from '../../../constants/actionTypes';
import { formatPodcastInfo } from '../../../components/common/utils';
import { processPageError, processPageLoading } from '../page/pageAction';

const getAllPodcastsAction = (payload) => {
  return {
    type: ACTION_TYPES.GET_ALL_PODCASTS,
    payload,
  };
};

const filterPodcastsAction = (payload) => {
  return {
    type: ACTION_TYPES.ON_FILTER_PODCASTS,
    payload,
  };
};

/*
 * Get all podcasts
 */
export const getAllPodcasts = () => {
  return (dispatch) => {
    // loading page
    dispatch(processPageLoading(true));

    axios.get(`${ ITUNES_URL }us/rss/toppodcasts/limit=100/genre=1310/json`)
    .then(({ data }) => {
      // transforming results
      let podcastsList = [];
      data.feed.entry.forEach((podcastElement) => {
        podcastsList.push(formatPodcastInfo.transformPodcastData(podcastElement));
      });

      dispatch(getAllPodcastsAction(podcastsList));

    })
    .catch((error) => {
      // printing error in the console
      console.error(error);
      dispatch(processPageError(
        {
          error: true,
          errorMsg: error,
        },
      ));
    }).finally(() => {
      dispatch(processPageLoading(false));
    });
  };
};

/*
 * Filter podcast list
 */
export const filterPodcasts = (criteria) => {
  return (dispatch, getState) => {
    const criteriaLowerCase = criteria.toLowerCase();
    const data = [...getState().podcastsInfo.podcastsList];

    const results = data.filter((item) => {
      return criteriaLowerCase === '' || item.name.toLowerCase().indexOf(criteriaLowerCase) >= 0 || item.author.toLowerCase()
      .indexOf(criteriaLowerCase) >= 0;
    });

    dispatch(filterPodcastsAction(results));
  };
};
