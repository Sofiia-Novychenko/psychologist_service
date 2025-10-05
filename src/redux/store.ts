// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import psychologistsReducer from './psychologists/slice';
// import authReducer from './auth/slice';

// const authPersistConfig = {
//   key: 'user-token',
//   storage,
//   whitelist: ['token'],
// };

// const AuthPersistedReducer = persistReducer(authPersistConfig, authReducer);

// export const store = configureStore({
//   reducer: { auth: AuthPersistedReducer, psychologists: psychologistsReducer },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
