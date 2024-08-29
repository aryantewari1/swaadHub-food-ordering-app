import MenuItem from "./MenuItem";
import { withButtonMenuItem } from "./MenuItem";

const NestedListItem = ({ data, show, showTheItem }) => {
  const title = data?.title;
  const { itemCards } = data;

  const MenuItemButton = withButtonMenuItem(MenuItem);

  return (
    <div className="">
      <div
        className="flex justify-between w-full  py-3 font-[Montserrat] font-semibold cursor-pointer"
        onClick={() => showTheItem()}
      >
        <div className="ml-2 p-2 pl-1 text-[16px] ">
          {title} ({itemCards.length})
        </div>
        <div className="text-lg pr-2">+</div>
      </div>
      <div className="ml-2 pl-1 border-b-[1px] border-b-slate-200">
        {show &&
          itemCards.map((item) => {
            return <MenuItemButton key={item?.card?.info?.id} data={item} />;
          })}
      </div>
    </div>
  );
};

export default NestedListItem;
