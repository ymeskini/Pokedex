import {createSlice} from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const cats = createSlice({
  name: 'cats',
  initialState: {
    list: [
      {
        id: uuid(),
        name: 'Billy',
        breed: 'Bengal',
        description: 'Amazing cat',
      },
      {
        id: uuid(),
        name: 'Caty',
        breed: 'Persan',
        description: 'Amazing persan cat',
      },
    ],
    viewCat: {},
  },
  reducers: {
    addCat: (state, action) => {
      state.list = [...state.list, {...action.payload, id: uuid()}];
    },
    setCatView: (state, action) => {
      state.viewCat = action.payload;
    },
    deleteCat: (state, action) => {
      state.list = state.list.filter(cat => cat.id !== action.payload);
    },
    editCat: (state, action) => {
      const catId = state.viewCat.id;
      const catToEdit = state.list.find(cat => cat.id === catId);
      catToEdit.name = action.payload.name;
      catToEdit.breed = action.payload.breed;
      catToEdit.description = action.payload.description;
    },
  },
});

export const {
  reducer: catReducer,
  actions: {setCatView, addCat, deleteCat, editCat},
} = cats;
