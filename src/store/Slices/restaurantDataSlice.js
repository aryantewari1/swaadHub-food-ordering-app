import { createSlice } from "@reduxjs/toolkit";

const restaurantData = createSlice({
  name: "restaurantData",
  initialState: {
    restaurantData: null,
  },
  reducers: {
    setRestaurantData: (state, action) => {
      state.restaurantData = action.payload;
    },
  },
});

export const { setRestaurantData } = restaurantData.actions;
export default restaurantData.reducer;
