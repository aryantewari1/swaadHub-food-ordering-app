import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMiddleGridData } from "../store/Slices/MiddleGridSlice";
const useMiddleGridData = () => {
  const dispatch = useDispatch();
  const restaurantData = useSelector(
    (store) => store.restaurantData.restaurantData
  );
  const middleGridData = useSelector(
    (store) => store?.middleGrid?.middleGridData
  );

  useEffect(() => {
    dispatch(setMiddleGridData(restaurantData?.data?.cards[1]?.card?.card));
  }, []);

  return middleGridData;
};
export default useMiddleGridData;
