import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {catReducer} from '../slices/cats';

export const rootReducer = combineReducers({cats: catReducer});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
