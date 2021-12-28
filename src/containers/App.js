import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import { CssBaseline } from '@material-ui/core';

const App = (props) => {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <AppHeader />
      <>
        { children }
      </>
    </>
  );
};


export default App;
