import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { appStyles } from '../../components/common/styles';
import PodcastItemList from '../../components/PodcastItemList/PodcastItemList';

const PodcastList = (props) => {
  const classes = appStyles();
  const { podcastsFilteredList } = props;

  return (
    <main>
      <Container className={ classes.cardGrid } maxWidth='md'>
        <Grid container spacing={ 4 }>
          { podcastsFilteredList.map(item => (
            <Grid item key={ `gridContainer-${item.id}`} xs={ 12 } sm={ 6 } md={ 3 }>
              <PodcastItemList key={ item.id } item={ item } />
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </main>
);
};

function mapStateToProps(state) {
    return {
      podcastsFilteredList: state.podcastsInfo.podcastsFilteredList,
    };
  }

export default connect(mapStateToProps)(PodcastList);
