import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import bottomGridReducer from "./Slices/BottomGridSlice";
import restaurantDataReducer from "./Slices/restaurantDataSlice";
import TopGridReducer from "./Slices/TopGridSlice";
import MiddleGridReducer from "../store/Slices/MiddleGridSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurantData: restaurantDataReducer,
    bottomGrid: bottomGridReducer,
    topGrid: TopGridReducer,
    middleGrid: MiddleGridReducer,
  },
});

export default appStore;
