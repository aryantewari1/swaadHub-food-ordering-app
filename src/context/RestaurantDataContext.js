import { createContext, useContext } from "react";
import { useState } from "react";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantDataContext = createContext({
  listOfRestaurants: [],
  filteredList: [],
  inputValue: "",
  setInputValue: () => {},
  setListOfRestaurants: () => {},
  setFilteredList: () => {},
});

export const useRestaurantDataContext = () => useContext(RestaurantDataContext);

export const RestaurantDataProvider = ({ children }) => {
  const { listOfRestaurants, filteredList, setFilteredList } =
    useRestaurantData();
  const [inputValue, setInputValue] = useState("");

  return (
    <RestaurantDataContext.Provider
      value={{
        listOfRestaurants,
        filteredList,
        inputValue,
        setFilteredList,
        setInputValue,
      }}
    >
      {children}{" "}
    </RestaurantDataContext.Provider>
  );
};
export default RestaurantDataContext;
