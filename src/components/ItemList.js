import MenuItem from "./MenuItem";
import { withButtonMenuItem } from "./MenuItem";

const ItemList = ({ data, show, showTheItem }) => {
  const title = data?.card?.card?.title;
  const { itemCards } = data?.card?.card;

  const MenuItemButton = withButtonMenuItem(MenuItem);
  return (
    <div>
      <div
        className="flex justify-between w-full my-1 font-[Montserrat] text-lg p-2 pl-1 font-bold mb-2 cursor-pointer"
        onClick={() => showTheItem()}
      >
        <div className="ml-2">
          {title} ({itemCards.length})
        </div>
        <div>+</div>
      </div>
      <div className="ml-2 pl-1 ">
        {show &&
          itemCards.map((item) => {
            return <MenuItemButton key={item?.card?.info?.id} data={item} />;
          })}
      </div>
      <div className="w-full h-4 bg-slate-200 my-2"></div>
    </div>
  );
};

export default ItemList;
