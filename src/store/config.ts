import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import repositoryContainer from '../app/index';
import axios from 'axios';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: repositoryContainer,
      },
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const serverAgent = axios.create();

export default store;
