import { createSlice } from "@reduxjs/toolkit";

const MiddleGrid = createSlice({
  name: "middleGrid",
  initialState: {
    middleGridData: [],
  },
  reducers: {
    setMiddleGridData: (state, action) => {
      state.middleGridData = action.payload;
    },
  },
});
export const { setMiddleGridData } = MiddleGrid.actions;
export default MiddleGrid.reducer;
