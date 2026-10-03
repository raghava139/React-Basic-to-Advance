import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="image-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
