import * as React from 'react';
import { useEffect } from 'react';
import ACTIONS from '../../state/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PodcastContent from '../../components/PodcastContent/PodcastContent';
import { appStyles } from '../../components/common/styles';
import { Container, Grid } from '@material-ui/core';

const PodcastItemDetail = (props) => {
  const classes = appStyles();
  const { podcastsDetail, getPodcast, match: { params } } = props;
  const { id } = params;
  const podcastItem = podcastsDetail[id];
  const expirationDate = podcastsDetail[id] ? podcastsDetail[id].expirationDate : null;
  const episodes = podcastItem ? podcastItem.episodes : null;

  useEffect(() => {
    // checking if we need to get or re-get all the selected podcast item content
    if (!podcastsDetail || !podcastItem || new Date(expirationDate) < new Date()) {
      getPodcast(id);
    }
  }, []);

  return podcastItem ? (
    <Container className={ classes.cardGrid } maxWidth='md'>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 } className={ classes.podcastItemDetailCardGridItemContainer }>
          <PodcastContent key={ '1' } podcastItem={ podcastItem } />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <div style={ { backgroundColor: '#ff0000', height: '100%', width: '100%', display: 'flex'} } />
        </Grid>
      </Grid>
    </Container>
  ) : <></>;
};

const mapStateToProps = (state) => {
  return {
    podcastsDetail: state.podcastDetailInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ACTIONS, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PodcastItemDetail);
