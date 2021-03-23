
import contactReducer from './contact/contact-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import storage from 'redux-persist/lib/storage';

const middleware = [...getDefaultMiddleware()];

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// }

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const pers = { store, persistor };

export default store;