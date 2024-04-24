import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export default persistConfig;
