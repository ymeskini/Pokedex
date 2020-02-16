import {createSlice} from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const cats = createSlice({
  name: 'cats',
  initialState: {
    list: [
      {
        id: uniqueId(),
        name: 'Billy',
        breed: 'Bengal',
        description: 'Amazing cat',
      },
      {
        id: uniqueId(),
        name: 'Caty',
        breed: 'Persan',
        description: 'Amazing persan cat',
      },
    ],
    viewCat: {},
  },
  reducers: {
    addCat: (state, action) => {
      state.list = [...state.list, {...action.payload, id: uniqueId()}];
    },
    setCatView: (state, action) => {
      state.viewCat = action.payload;
    },
    deleteCat: (state, action) => {
      state.list = state.list.filter(cat => cat.id !== action.payload);
    },
  },
});

export const {
  reducer: catReducer,
  actions: {setCatView, addCat, deleteCat},
} = cats;
