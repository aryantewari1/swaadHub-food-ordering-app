import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import BottomGrid from "./BottomGrid";
import TopGrid from "./TopGrid";
import useRestaurantData from "../utils/useRestaurantData";
import MiddleGrid from "./MiddleGrid";
import Footer from "./Footer";
import { useRef } from "react";

const Body = () => {
  const footer = useRef();
  const online = useOnlineStatus();

  const restaurantData = useRestaurantData();
  if (!online) return <h1>Not online</h1>;

  return restaurantData ? (
    <main className="flex-1">
      <div className="mx-auto my-0  w-[73%] mb-5">
        <TopGrid />
        <MiddleGrid />
        <BottomGrid footer={footer} />
      </div>
      <div ref={footer}>
        <Footer />
      </div>
    </main>
  ) : (
    <Shimmer />
  );
};
export default Body;
