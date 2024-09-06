import { CDN_URL } from "../utils/constant";

const TopGridElement = ({ data }) => {
  const { description, imageId } = data;
  return (
    <div className="mr-[21px]">
      <div className="w-36">
        <img src={CDN_URL + imageId} alt={description + "image"} className="" />
      </div>
    </div>
  );
};

export default TopGridElement;
