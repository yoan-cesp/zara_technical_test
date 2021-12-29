import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './state/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import appTheme from './theme/theme';
import './styles.css';
import AppRoutes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={ appTheme }>
        <Provider store={ configureStore() }>
          <Router>
            <AppRoutes />
          </Router>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
