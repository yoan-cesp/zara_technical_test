import axios from 'axios';
import * as ACTION_TYPES from '../../../constants/actionTypes';
import xml2js from 'xml2js';
import { processPageError, processPageLoading } from '../page/pageAction';
import { CORS_PROXY_URL, ITUNES_URL } from '../../../constants/constants';
import { formatPodcastInfo } from '../../../components/common/utils';

const processSinglePodcastAction = (payload, podcastId) => {
  return {
    type: ACTION_TYPES.GET_SINGLE_PODCAST,
    payload,
    id: podcastId,
  };
};

/*
 * Get podcast Episodes from feed url info
 */
export const getFeedData = (feedUrl) => {
  return axios.get(`${ CORS_PROXY_URL }${ feedUrl }`).then(({ data }) => {
    const parserInstance = new xml2js.Parser();

    return new Promise((resolved) => {
      parserInstance.parseString(data, (err, jsonData) => {
        resolved(jsonData.rss.channel[0]);
      });
    });
  });
};

/*
 * Get a single podcast info
 */
export const getPodcast = (podcastId) => {
  return (dispatch) => {
    dispatch(processPageLoading(true));

    axios.get(`${ CORS_PROXY_URL }${ ITUNES_URL }lookup?id=${ podcastId }`)
    .then(({ data }) => {
      const result = data.results[0];
      const podcastFeedUrl = result.feedUrl;

      return getFeedData(podcastFeedUrl).then((podcastFeedData) => {
        const parsedResultData = formatPodcastInfo.transformDetailsData(
          { ...result, ...podcastFeedData },
        );

        dispatch(processSinglePodcastAction(parsedResultData, podcastId));

      });
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
    })
    .finally(() => {
      dispatch(processPageLoading(false));
    });
  };
};
