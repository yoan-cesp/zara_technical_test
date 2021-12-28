import React from 'react';
import { connect } from 'react-redux';
import { AppBar, CircularProgress, Container, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import { appStyles } from '../common/styles';

const AppHeader = (props) => {
  const classes = appStyles();
  const { loading } = props;

  return (
    <AppBar position='relative'>
      <Toolbar className={ classes.toolbar }>
        <Typography variant='h6' color='primary' noWrap>
          <Link href='/'>
            Podcaster
          </Link>
        </Typography>
        { loading && (<CircularProgress variant={ 'indeterminate' } />) }
      </Toolbar>
    </AppBar>
  );

};

function mapStateToProps(state) {
  return {
    loading: state.pageInfo.loading,
  };
}

export default connect(mapStateToProps)(AppHeader);
