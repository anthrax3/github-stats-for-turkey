import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import initial from './initial';
import location from './location/index';
import developer from './developer';
import language from './language';

export default combineReducers({
  router: routerReducer,
  initial,
  location,
  developer,
  language,
});
