import { Link } from "react-router-dom";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import useBottomGridData from "../utils/useBottomGridData";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredList,
  setInputValue,
} from "../store/Slices/BottomGridSlice";
import { useSelector } from "react-redux";

const BottomGrid = ({ footer }) => {
  const heading = useSelector(
    (store) =>
      store?.restaurantData?.restaurantData?.data?.cards[2]?.card?.card?.title
  );
  console.log(heading);
  const dispatch = useDispatch();

  const { listOfRestaurants, filteredList, inputValue } =
    useBottomGridData(footer);

  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);

  return (
    <>
      <h2 className="font-['poppins'] text-[1.35rem] font-extrabold">
        {heading}
      </h2>
      <div className="filters-container mt-4">
        <div className="search-bar-container">
          <input
            type="text"
            className="rounded-[4px] text-[15px]  text-[rgb(42,42,42)] shadow-sm border border-[rgba(96,96,96,0.16)] pl-4 pr-4 py-2"
            placeholder="Search for Restaurant"
            value={inputValue}
            onChange={(e) => {
              dispatch(setInputValue(e.target.value));
            }}
          />
          <button
            className="search-btn text-[15px] text-[rgb(42,42,42)] shadow-sm border border-[rgba(96,96,96,0.16)] pl-4 pr-4 py-2 ml-[-1px]"
            onClick={() => {
              const filter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              dispatch(setFilteredList(filter));
            }}
          >
            Search
          </button>
          <button
            className="rounded-[4px] ml-3 text-[14px] font-semibold text-[rgb(42,42,42)] shadow-sm border border-[rgba(96,96,96,0.16)] px-3 py-2"
            onClick={() => {
              const topRatedButton = document.querySelector(".filter-btn");
              setHeading('Here are the results for "Ratings 4.0+"');
              const filter = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.0
              );
              dispatch(setFilteredList(filter));
            }}
          >
            {" "}
            Ratings 4.0+{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-y-[30px] gap-x-6 mt-6 ">
        {filteredList.map((restaurant) => (
          <Link
            className=""
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardWithVegLabel resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
export default BottomGrid;
