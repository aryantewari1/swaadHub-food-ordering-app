import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTopGridData } from "../store/Slices/TopGridSlice";
const useTopGridData = () => {
  const dispatch = useDispatch();
  const restaurantData = useSelector(
    (store) => store?.restaurantData?.restaurantData
  );
  const topGridData = useSelector((store) => store?.topGrid?.topGridData);

  useEffect(() => {
    dispatch(setTopGridData(restaurantData?.data?.cards[0]?.card?.card));
  }, []);
  return topGridData;
};

export default useTopGridData;
