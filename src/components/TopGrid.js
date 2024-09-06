import useTopGridData from "../utils/useTopGridData";
import TopGridElement from "./TopGridElement";

const TopGrid = () => {
  const topGridData = useTopGridData();
  if (topGridData.length == 0) return;
  const { title } = topGridData?.header;
  const gridElements = topGridData?.gridElements?.infoWithStyle?.info;
  return (
    <div className="w-full mb-12 overflow-hidden">
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
      <div className="w-full flex mb-10">
        {gridElements.map((item) => {
          return <TopGridElement data={item} key={item?.id} />;
        })}
      </div>
      <div className="w-[98%] border-solid border-slate-200 border-t"></div>
    </div>
  );
};

export default TopGrid;
