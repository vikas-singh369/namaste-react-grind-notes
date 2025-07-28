import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = () => {
  console.log("heder render");

  const [btnName, setBtName] = useState("login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btnName"
            onClick={() => {
              btnName === "login" ? setBtName("logout") : setBtName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
