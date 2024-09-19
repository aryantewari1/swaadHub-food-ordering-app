import { useRef } from "react";
import useMiddleGridData from "../utils/useMiddleGridData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const MiddleGrid = () => {
  const middleGridData = useMiddleGridData();
  const middleGrid = useRef();
  const shiftLeft = () => {
    if (middleGrid.current) {
      console.log("Shifting Left");
      middleGrid.current.scrollBy({
        left: -middleGrid.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const shiftRight = () => {
    if (middleGrid.current) {
      console.log("Shifting Right");
      middleGrid.current.scrollBy({
        left: middleGrid.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-3 items-center">
        <div>
          <p className="font-[poppins] text-[1.35rem] font-extrabold">
            {middleGridData?.header?.title}
          </p>
        </div>
        <div className="flex justify-between w-16 mr-2">
          <button
            className="p-2 px-3 rounded-[100%] bg-slate-200 mr-2"
            onClick={() => {
              shiftLeft();
            }}
          >
            {" "}
            <p>&lt;</p>
          </button>
          <button
            className="p-2 px-3 rounded-[100%] bg-slate-200 "
            onClick={() => {
              shiftRight();
            }}
          >
            {" "}
            <p> &gt;</p>
          </button>
        </div>
      </div>
      <div
        className="w-full flex mb-20 overflow-x-auto scrollbar-none"
        ref={middleGrid}
      >
        {middleGridData?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => {
            return (
              <div className="mr-8" key={item?.info?.id}>
                <Link to={"/restaurants/" + item?.info?.id}>
                  <RestaurantCard resData={item?.info} />
                </Link>
              </div>
            );
          }
        )}
      </div>
      <div className="w-[98%] border-solid border-slate-200 border-t mb-1"></div>
    </div>
  );
};

export default MiddleGrid;
