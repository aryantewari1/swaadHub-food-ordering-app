import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredList,
  setListOfRestaurants,
} from "../store/Slices/BottomGridSlice";
import { useEffect } from "react";
import { RES_API } from "./constant";

const useBottomGridData = (footer) => {
  const dispatch = useDispatch();
  const listOfRestaurants = useSelector(
    (store) => store?.bottomGrid?.listOfRestaurants
  );
  const filteredList = useSelector((store) => store?.bottomGrid?.filteredList);
  const inputValue = useSelector((store) => store?.bottomGrid?.inputValue);

  function handleMoreData() {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.scrollHeight - footer.current.scrollHeight
    ) {
      fetchData();
    }
  }
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleMoreData);
    return () => window.removeEventListener("scroll", handleMoreData);
  }, []);

  async function fetchData() {
    const data = await fetch(RES_API);
    const jsonData = await data.json();
    dispatch(
      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
    dispatch(
      setFilteredList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
  }

  return { listOfRestaurants, filteredList, inputValue };
};

export default useBottomGridData;
