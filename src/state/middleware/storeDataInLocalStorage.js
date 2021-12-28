import { STORE_KEY } from '../../constants/constants';

const storeDataInLocalStorage = store => next => action => {
  next(action);
  let appState = store.getState();
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error(e);
    localStorage.removeItem(STORE_KEY);
    localStorage.setItem(STORE_KEY, JSON.stringify(appState));
  }
};

export default storeDataInLocalStorage;
