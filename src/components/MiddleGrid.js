import useMiddleGridData from "../utils/useMiddleGridData";

const MiddleGrid = () => {
  const middleGridData = useMiddleGridData();
  console.log(middleGridData);
  return (
    <div className="mt-2 text-xl font-bold">
      <div className="font-[poppins] text-xl font-extrabold mb-2">
        {middleGridData?.header?.title}
      </div>
      <div className=""></div>
    </div>
  );
};

export default MiddleGrid;
