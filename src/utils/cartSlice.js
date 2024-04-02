import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    deleteItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, deleteItems } = cartSlice.actions;

export default cartSlice.reducer;
