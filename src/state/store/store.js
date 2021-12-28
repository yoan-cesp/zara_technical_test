import { applyMiddleware, compose, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import storeInitialState from '../helpers/storeInitialState';
import rootReducer from '../reducers';
import { STORE_KEY } from '../../constants/constants';
import storeDataInLocalStorage from '../middleware/storeDataInLocalStorage';

// recovering app old state
const appOldState = JSON.parse(localStorage.getItem(STORE_KEY));
// defining initial app state
const appInitialState = appOldState || storeInitialState;

const configureStoreProd = () => {
  const middlewares = [
    storeDataInLocalStorage,
    thunk,
  ];

  return createStore(
    rootReducer,
    appInitialState,
    compose(applyMiddleware(...middlewares)),
  );
};

const configureStoreDev = () => {
  const middlewares = [
    storeDataInLocalStorage,
    reduxImmutableStateInvariant(),
    thunk,
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    appInitialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
};

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
