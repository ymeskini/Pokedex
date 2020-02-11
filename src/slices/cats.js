import {createSlice} from '@reduxjs/toolkit';

const cats = createSlice({
  name: 'cats',
  initialState: {
    list: [],
  },
  reducers: {
    addCat: (state, action) => state.list.push(action.payload),
  },
});

const {reducer} = cats;

export default reducer;
