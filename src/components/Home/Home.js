import * as React from 'react';
import PodcastList from '../../containers/PodcastList/PodcastList';
import { appStyles } from '../common/styles';
import Search from '../../containers/Search/Search';

const Home = () => {
  const classes = appStyles();

  return (
    <div className={ classes.home }>
      <Search />
      <PodcastList />
    </div>
  );
};

export default Home;
