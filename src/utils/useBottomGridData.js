import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredList,
  setListOfRestaurants,
} from "../store/Slices/BottomGridSlice";
import { useEffect } from "react";

const useBottomGridData = () => {
  const dispatch = useDispatch();
  const restaurantData = useSelector(
    (store) => store?.restaurantData?.restaurantData
  );
  const listOfRestaurants = useSelector(
    (store) => store?.bottomGrid?.listOfRestaurants
  );
  const filteredList = useSelector((store) => store?.bottomGrid?.filteredList);
  useEffect(() => {
    dispatch(
      setListOfRestaurants(
        restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
    dispatch(
      setFilteredList(
        restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
  }, []);

  return { listOfRestaurants, filteredList };
};

export default useBottomGridData;
