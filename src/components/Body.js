import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRestaurantDataContext } from "../context/RestaurantDataContext";

const Body = () => {
  const {
    listOfRestaurants,
    setFilteredList,
    filteredList,
    inputValue,
    setInputValue,
  } = useRestaurantDataContext();

  const [heading, setHeading] = useState(
    "Pick a restaurant of your choice in Kanpur"
  );
  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);
  const online = useOnlineStatus();
  if (!online) return <h1>Not online</h1>;

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <main className="flex-1">
      <div className="mx-auto my-0  w-[73%] mt-5">
        <h2 className="font-['montserrat'] text-[22px] font-extrabold">
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
                setInputValue(e.target.value);
              }}
            />
            <button
              className="search-btn text-[15px] text-[rgb(42,42,42)] shadow-sm border border-[rgba(96,96,96,0.16)] pl-4 pr-4 py-2 ml-[-1px]"
              onClick={() => {
                const filter = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(inputValue.toLowerCase())
                );
                setFilteredList(filter);
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
                setFilteredList(filter);
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
      </div>
    </main>
  );
};
export default Body;
