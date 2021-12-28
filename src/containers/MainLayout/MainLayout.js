import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import ACTIONS from '../../state/actions';
import AppHeader from '../../components/AppHeader/AppHeader';
import PodcastList from '../PodcastList/PodcastList';


const MainLayout = (props) => {

  const { loading } = props;

  useEffect(() => {
    props;
    debugger

  }, [props.podcasts]);


  return (
    <>
      <CssBaseline />
      <AppHeader />
      <PodcastList />
    </>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.pageInfo.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ACTIONS, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
