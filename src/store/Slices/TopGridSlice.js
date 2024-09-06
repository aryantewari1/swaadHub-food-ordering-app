import { createSlice } from "@reduxjs/toolkit";

const TopGrid = createSlice({
  name: "topGrid",
  initialState: {
    topGridData: [],
  },
  reducers: {
    setTopGridData: (state, action) => {
      state.topGridData = action.payload;
    },
  },
});
export const { setTopGridData } = TopGrid.actions;
export default TopGrid.reducer;
