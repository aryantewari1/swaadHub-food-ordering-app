import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = function () {
  const [loginBtnContent, setLoginBtnContent] = useState("Login");
  const online = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="flex justify-around items-center shadow-[0_2px_25px_2px_rgb(0,0,0,0.0.07)] font-['montserrat'] font-medium h-20">
      <div className="flex items-center flex-[1] h-full ml-28">
        {/* <img
          className="w-28 h-full object-cover overflow-hidden"
          src={LOGO_URL}
          alt="website-logo"
        /> */}
        <Link to="/">
          <p className="font-['poppins'] text-[20px] font-semibold hover:text-lg">
            swaadHub
          </p>
        </Link>
      </div>

      <div className="flex-[2] max-w-[700px]">
        <ul className="flex justify-evenly">
          <li>Online status: {online ? "🟢" : "🔴"}</li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setFilteredList(listOfRestaurants);
              }}
              className="hover:font-bold hover:text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:font-bold hover:text-orange-500">
              About us
            </Link>
          </li>
          <li>
            <Link to="/order" className="hover:font-bold hover:text-orange-500">
              Order
            </Link>
          </li>
          <li className="font-bold">
            <Link to="/cart" className="hover:font-bold hover:text-orange-500">
              Cart-({cartItems.length + " items"})
            </Link>
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
