import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import BottomGrid from "./BottomGrid";
import { useContext } from "react";
import RestaurantDataContext from "../context/RestaurantDataContext";
const Body = () => {
  const online = useOnlineStatus();
  const { listOfRestaurants } = useContext(RestaurantDataContext);
  if (!online) return <h1>Not online</h1>;
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <main className="flex-1">
      <div className="mx-auto my-0  w-[73%]">
        <BottomGrid />
      </div>
    </main>
  );
};
export default Body;
