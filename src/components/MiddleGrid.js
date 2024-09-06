import useMiddleGridData from "../utils/useMiddleGridData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const MiddleGrid = () => {
  const middleGridData = useMiddleGridData();
  console.log(middleGridData);
  return (
    <div className="mb-5 overflow-hidden">
      <div className="flex justify-between mb-3 items-center">
        <div>
          <p className="font-[poppins] text-[1.35rem] font-extrabold">
            {middleGridData?.header?.title}
          </p>
        </div>
        <div className="flex justify-between w-16 mr-8">
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
      <div className="w-full flex mb-20">
        {middleGridData?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => {
            return (
              <div className="mr-8">
                <Link
                  to={"/restaurants/" + item?.info?.id}
                  key={item?.info?.id}
                >
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
