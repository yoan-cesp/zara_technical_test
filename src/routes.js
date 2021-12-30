import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';
import Home from './components/Home/Home';
import PodcastItemDetail from './containers/PodcastItemDetail/PodcastItemDetail';

const AppRoutes = () => {
  return (
    <App>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/podcast/:id' component={ PodcastItemDetail } />
        <Route exact path='/podcast/:idPodcast/episode/:idEpisode' component={ Home } />
      </Switch>
    </App>
  );
};

export default AppRoutes;
