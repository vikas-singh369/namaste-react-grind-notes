import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = () => {
  console.log("heder render");

  console.log(useState());

  const [btnName, setBtName] = useState("login");


  // useEffect(()=>{
  //   console.log("useEffect called")
  // },[])

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
          <Link to= "/login">
          <button
            className="btnName"
            onClick={() => {
              btnName === "login" ? setBtName("logout") : setBtName("login");
            }}
          >
            {btnName}
          </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
