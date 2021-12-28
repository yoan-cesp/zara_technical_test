import * as React from 'react';
import PodcastList from '../../containers/PodcastList/PodcastList';
import { appStyles } from '../common/styles';
import Search from '../../containers/Search/Search';

const Home = (props) => {
  const classes = appStyles();

  /*useEffect(() => {
    if (loading && podcastsInfo.podcastsList.length === 0) {
      getAllPodcasts();
    }
  }, []);*/

  return (
    <div className={classes.body}>
      <Search />
      <PodcastList />
    </div>
  );
};

export default Home;
