import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  //Online Status Hook;
  const CheckOnlineOrOffline = useOnlineStatus();

  // useEffect
  // if no dependency array
  useEffect(() => {
    // console.log('useEffect called')
    // return()=>{
    //   console.log('return called')
    // }
  }, [btnName]);
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {CheckOnlineOrOffline ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery Items</Link>
          </li>
          <li>Cart</li>
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
