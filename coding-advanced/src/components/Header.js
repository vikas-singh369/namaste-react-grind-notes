import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = () => {

  const [btnName, setBtName] = useState("login");

  // useEffect(()=>{
  //   console.log("useEffect called")
  // },[])

  return (
    <div className=" bg-amber-200/70 flex justify-between items-center">
      <img className="w-30" src={LOGO_URL} />

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
          <li className="m-4 p-4 font-bold">Cart</li>
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
        </ul>
      </div>
  );
};

export default Header;
