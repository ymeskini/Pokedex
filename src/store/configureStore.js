import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cats from '../slices/cats';

export const rootReducer = combineReducers({cats});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
