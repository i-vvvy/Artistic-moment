import { combineReducers } from 'redux';
import concertReducer from './concertReducer';
import recordListReducer from './recordListReducer';

export default combineReducers({
  concert: concertReducer,
  recordList: recordListReducer,
});
