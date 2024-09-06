import useMiddleGridData from "../utils/useMiddleGridData";
import RestaurantCard from "./RestaurantCard";

const MiddleGrid = () => {
  const middleGridData = useMiddleGridData();
  console.log(middleGridData);
  return (
    <div className="mb-5 overflow-hidden">
      <div className="font-[poppins] text-[1.35rem] font-extrabold mb-4">
        {middleGridData?.header?.title}
      </div>
      <div className="w-full flex mb-20">
        {middleGridData?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => {
            return (
              <div className="mr-8">
                <RestaurantCard resData={item?.info} key={item?.info?.id} />
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
