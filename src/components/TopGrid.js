import useTopGridData from "../utils/useTopGridData";
import TopGridElement from "./TopGridElement";
import { useRef } from "react";
const TopGrid = () => {
  const topGridData = useTopGridData();
  const topGrid = useRef();
  if (topGridData.length == 0) return;
  const { title } = topGridData?.header;
  const gridElements = topGridData?.gridElements?.infoWithStyle?.info;

  const shiftLeft = () => {
    if (topGrid.current) {
      console.log("Shifting Left");
      topGrid.current.scrollBy({
        left: -topGrid.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const shiftRight = () => {
    if (topGrid.current) {
      console.log("Shifting Right");
      topGrid.current.scrollBy({
        left: topGrid.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between mb-3 items-center">
        <div>
          <p className="font-[poppins] text-[1.35rem] font-extrabold">
            {title}
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
      <div
        className="w-full flex mb-10 overflow-x-auto scrollbar-none"
        ref={topGrid}
      >
        {gridElements.map((item) => {
          return <TopGridElement data={item} key={item?.id} />;
        })}
      </div>
      <div className="w-[98%] border-solid border-slate-200 border-t"></div>
    </div>
  );
};

export default TopGrid;
