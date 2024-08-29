import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRestaurantDataContext } from "../context/RestaurantDataContext";
import { useSelector } from "react-redux";

const Header = function () {
  const [loginBtnContent, setLoginBtnContent] = useState("Login");
  const online = useOnlineStatus();
  const { setFilteredList, listOfRestaurants } = useRestaurantDataContext();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <nav className="flex justify-around items-center shadow-[0_2px_25px_2px_rgb(0,0,0,0.0.07)] font-['montserrat'] font-medium">
      <div className="flex items-center flex-[1] h-full ml-28">
        <img
          className="w-28 h-full object-cover overflow-hidden"
          src={LOGO_URL}
          alt="website-logo"
        />
        <Link to="/">
          <p className="font-['poppins'] text-[20px] font-semibold">Foodech</p>
        </Link>
      </div>

      <div className="flex-[2] max-w-[900px]">
        <ul className="flex justify-evenly">
          <li>Online status: {online ? "yes" : "no"}</li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setFilteredList(listOfRestaurants);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart-({cartItems.length + " items"})</Link>
          </li>
        </ul>
      </div>
      <div className="flex-[1] max-w-[100px]">
        <button
          className="login-btn"
          onClick={() => {
            let filteredData = loginBtnContent == "Login" ? "Logout" : "Login";
            setLoginBtnContent(filteredData);
          }}
        >
          {loginBtnContent}
        </button>
      </div>
    </nav>
  );
};

export default Header;
