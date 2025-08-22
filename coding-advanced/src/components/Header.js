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
    <header className=" bg-amber-600/75 flex justify-between items-center">
      <img data-testid="logo" className="w-30" src={LOGO_URL} />

      <ul className="flex items-center justify-center">
        <li className="px-2.5 font-bold"><Link to="/">Home</Link></li>
        <li className="px-2.5 font-bold"><Link to="/about">About</Link></li>
        <li className="px-2.5 font-bold"><Link to="/contact">Contact</Link></li>
        <li className="px-2.5 font-bold"><Link to="/cart">Cart - {cartItems.length}</Link></li>

        <li><Link to="/login" className="px-2.5 font-bold">
          <button
            onClick={() => {
              btnName === "login" ? setBtName("logout") : setBtName("login");
            }}
          >
            {btnName}
          </button>
          </Link>
        </li>
        <li className="px-2.5 font-bold"><span>{onlineStatus ? "🟢" : "🔴"}</span> {logedInUser}</li>
      </ul>
    </header>
  );
};

export default Header;
