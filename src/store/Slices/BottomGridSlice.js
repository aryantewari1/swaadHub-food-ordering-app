import { createSlice } from "@reduxjs/toolkit";

const BottomGrid = createSlice({
  name: "bottomGrid",
  initialState: {
    listOfRestaurants: [],
    filteredList: [],
    inputValue: "",
  },
  reducers: {
    setListOfRestaurants: (state, action) => {
      state.listOfRestaurants = [...state.listOfRestaurants, ...action.payload];
    },
    setFilteredList: (state, action) => {
      state.filteredList = [...state.filteredList, ...action.payload];
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});
export const { setFilteredList, setListOfRestaurants, setInputValue } =
  BottomGrid.actions;
export default BottomGrid.reducer;
