import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/Slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function clearCartItems() {
    dispatch(clearCart());
  }
  return (
    <div className="flex">
      <div className="flex-[2]">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold font-[Montserrat] text-center">
            {" "}
            Excited to proceed to payment already?{" "}
          </h1>
          {cartItems.map((item) => {
            return (
              <div className="w-10/12 mx-auto px-10 my-3 border-[1px] border-slate-200 border-solid rounded-2xl">
                <MenuItem key={item?.card?.info?.id} data={item} />
              </div>
            );
          })}
          {cartItems.length != 0 && (
            <button
              onClick={clearCartItems}
              className=" w- p-3 px-5 rounded-md bg-slate-200 text-black font-[Montserrat] text-lg font-semibold"
            >
              {" "}
              Clear cart{" "}
            </button>
          )}
        </div>
      </div>
      <div className=" flex-[1] "></div>
    </div>
  );
};

export default Cart;
