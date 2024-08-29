import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla, areaName } =
    resData;
  return (
    <div className="w-[257px] font-['montserrat']">
      <div className="w-full mb-3 ">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="w-full h-[169px] object-cover rounded-[16px] shadow-inner "
        />
      </div>
      <div className="ml-3">
        <p className="m-0 text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis leading-tight">
          {name}
        </p>
        <span className="text-[18px] leading-tight"> &#9733; </span>
        <p className="m-0 text-[15px] inline-block font-medium">
          {" "}
          {avgRating} &#8226;{" "}
        </p>
        <p className="m-0 text-[15px] inline-block leading-tight font-medium">
          {" "}
          &nbsp; {sla.deliveryTime + " mins"}
        </p>
        <p className="m-0 overflow-hidden whitespace-nowrap text-ellipsis leading-tight text-[15px] text-[rgb(96,96,96)">
          {cuisines.join(", ")}
        </p>
        <p className="m-0 text-[15px] text-[rgb(96,96,96)">{areaName}</p>
      </div>
    </div>
  );
};

//a function that accepts component and returns a component

export function withVegLabel(RestaurantCard) {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-400 text-white p-1 z-10 font-[Montserrat] font-semibold rounded-tl-[16px] rounded-br-[16px]">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
}

export default RestaurantCard;
