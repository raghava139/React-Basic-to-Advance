import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";

export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  //Online Status Hook;
  const CheckOnlineOrOffline = useOnlineStatus();

  //useContext
  const { curr_name } = useContext(UserContext);

  // useEffect
  // if no dependency array
  useEffect(() => {
    // console.log('useEffect called')
    // return()=>{
    //   console.log('return called')
    // }
  }, [btnName]);
  return (
    <div className="flex justify-between bg-gray-600">
      <div className="image-container">
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="flex items-center text-white">
        <ul className="flex p-4">
          <li className="px-4">
            Online Status : {CheckOnlineOrOffline ? "Online" : "Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery Items</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4 font-bold text-2xl">{curr_name}</li>
          <button
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
            className="login-btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
