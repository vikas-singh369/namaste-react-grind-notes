import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  console.log("heder render")

  const [btnName, setBtName] = useState("login"); 

  
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
          className="btnName"
          onClick={()=>{
            btnName === "login" ? setBtName("logout"): setBtName("login");
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
