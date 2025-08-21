import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtName] = useState("login");

  const cartItems = useSelector((store) => store.cart.items);

  const { logedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className=" bg-amber-200/70 flex justify-between items-center">
      <img data-testid="logo" className="w-30" src={LOGO_URL} />

      <ul className="flex items-center justify-center">
        <li className="m-4 p-4 font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="m-4 p-4 font-bold">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-4 p-4 font-bold">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="m-4 p-4 font-bold">
          <Link to="/cart">Cart - {cartItems.length}</Link>
        </li>

        <Link to="/login">
          <button
            className="m-4 p-4 font-bold"
            onClick={() => {
              btnName === "login" ? setBtName("logout") : setBtName("login");
            }}
          >
            {btnName}
          </button>
        </Link>

        <li className="m-4 p-4 font-bold">
          {" "}
          <span>{onlineStatus ? "🟢" : "🔴"}</span> {logedInUser}
        </li>
      </ul>
    </div>
  );
};

export default Header;
