import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  const { logedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  return (
    <header className=" bg-amber-500/70 flex justify-between items-center">
      <img data-testid="logo" className="w-30" src={LOGO_URL} />

      <ul className="flex items-center justify-center">
        <li className=" font-bold p-2.5 hover:bg-amber-500/95 rounded-lg "><Link to="/">Home</Link></li>
        <li className="font-bold p-2.5 hover:bg-amber-500/95 rounded-lg"><Link to="/about">About</Link></li>
        <li className="font-bold p-2.5 hover:bg-amber-500/95 rounded-lg"><Link to="/contact">Contact</Link></li>
        <li className="font-bold p-2.5 hover:bg-amber-500/95 rounded-lg"><Link to="/cart">🛒 - {cartItems.length}</Link></li>

        <li><Link to="/login" className="font-bold p-2.5 hover:bg-amber-500/95 rounded-lg">
          <button
            onClick={() => {
              btnName === "Login" ? setBtName("Logout") : setBtName("Login");
            }}
          >
            {btnName}
          </button>
          </Link>
        </li>
        <li className="font-bold p-2.5 hover:bg-amber-500/95 rounded-lg"><span>{onlineStatus ? "🟢" : "🔴"}</span> {logedInUser}</li>
      </ul>
    </header>
  );
};

export default Header;
