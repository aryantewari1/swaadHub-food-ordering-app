import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import countReducer from "./Slices/countSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    count: countReducer,
  },
});

export default appStore;
