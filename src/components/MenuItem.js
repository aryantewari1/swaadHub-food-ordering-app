import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/Slices/cartSlice";

const MenuItem = ({ data }) => {
  const { name, price, defaultPrice, imageId, description } = data?.card?.info;
  const { rating, ratingCountV2 } = data?.card?.info?.ratings?.aggregatedRating;

  return (
    <div className="border-b-[1px] border-b-slate pb-10">
      <div className="flex -200 w-full mt-8 h-44">
        <div className="w-8/12 pt-2 align-middle h-full">
          <p className="text-lg font-[Montserrat] font-semibold text-slate-900">
            {name}
          </p>
          <p className="font-semibold font-[Montserrat] mb-1">
            ₹ {defaultPrice ? defaultPrice / 100 : price / 100}
          </p>
          <p className="mb-2 ">
            {" "}
            {rating ? rating + " (" + ratingCountV2 + ")" : ""}
          </p>
          <p className="font-[Poppins] text-sm leading-tight text-slate-400">
            {description}
          </p>
        </div>
        <div className="w-4/12 text-end pb-10 h-full relative">
          <img
            className="inline-block w-[62%] object-cover rounded-xl h-full"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
              imageId
            }
          />
        </div>
      </div>
    </div>
  );
};

export function withButtonMenuItem(MenuItem) {
  return (props) => {
    const dispatch = useDispatch();
    function addMenuItem() {
      dispatch(addItem(props.data));
    }
    return (
      <div className="relative">
        <MenuItem {...props} />
        <button
          className="absolute left-[82%]  top-28 bg-white border-[1px] border-solid border-slate-300 rounded-md py-2 px-11 font-[Montserrat] font-bold text-green-600 shadow-md z-10"
          onClick={addMenuItem}
        >
          Add
        </button>
      </div>
    );
  };
}
export default MenuItem;
