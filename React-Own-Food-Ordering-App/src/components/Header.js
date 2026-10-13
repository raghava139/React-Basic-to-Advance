import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router'

export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  // useEffect
  // if no dependency array 
  useEffect(()=>{
    // console.log('useEffect called')

    // return()=>{
    //   console.log('return called')
    // }
  },[btnName])
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" 
              ? setbtnName("Logout") : setbtnName("Login");
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
