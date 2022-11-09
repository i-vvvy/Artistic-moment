import { combineReducers } from 'redux';

import concertReducer from './concertReducer';
import recordListReducer from './recordListReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['recordList'],
};

const rootReducer = combineReducers({
  concert: concertReducer,
  recordList: recordListReducer,
});

export default persistReducer(persistConfig, rootReducer);
