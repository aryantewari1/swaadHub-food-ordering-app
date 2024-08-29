import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { addItem } = countSlice.actions;
export default countSlice.reducer;
