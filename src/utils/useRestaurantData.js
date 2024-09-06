import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RES_API } from "./constant";
import { setRestaurantData } from "../store/Slices/restaurantDataSlice";

const useRestaurantData = () => {
  const dispatch = useDispatch();
  const restaurantData = useSelector(
    (store) => store?.restaurantData?.restaurantData
  );
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(RES_API);
    const jsonData = await data.json();
    dispatch(setRestaurantData(jsonData));
  }

  return restaurantData;
};

export default useRestaurantData;
