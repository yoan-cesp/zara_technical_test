import * as React from 'react';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ACTIONS from '../../state/actions';
import { Container, Grid, TextField } from '@material-ui/core';
import { appStyles } from '../../components/common/styles';

const Search = (props) => {
  const classes = appStyles();
  const { getAllPodcasts, podcastsList, expirationDate, podcastsFilteredList, filterPodcasts } = props;

  const [criteria, setCriteria] = useState('');

  useEffect(() => {
    // checking if we need to get or re-get all podcasts
    if (!podcastsList || !podcastsList.length || new Date(expirationDate) < new Date()) {
      getAllPodcasts();
    }
  }, []);

  const onSearchInputChange = (event) => {
    setCriteria(event.target.value);
    filterPodcasts(event.target.value);
  };

  return (
    <Container className={ classes.searchContainer } maxWidth='md'>
      <Grid container spacing={ 6 }>
        <Grid item xs={ 12 }>
          <form className={ classes.searchInput } noValidate autoComplete='off'>
            <div className={ classes.podcastAmongText }>{ podcastsFilteredList.length }</div>
            <TextField
              className={ classes.searchTextField }
              value={ criteria }
              size={ 'small' }
              id='search-input'
              label='Filter podcasts...'
              onChange={ (e) => onSearchInputChange(e) }
              variant='outlined' />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    podcastsList: state.podcastsInfo.podcastsList,
    podcastsFilteredList: state.podcastsInfo.podcastsFilteredList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
