import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

import notification from "../assets/icons/bell.svg";
import profile from "../assets/profile-pic.svg";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const orderID = pathname.split("/").pop(); // Extract orderID from pathname
  return (
    <div className="header-cont">
      <div className="header">
        <div className="header-left">
          <h2>{orderID ? `OD${orderID}` : "All Orders"}</h2>
          <h5>{orderID ? `All Orders / OD${orderID}` : "All Orders"}</h5>
        </div>
        <div className="header-right">
          <ul className="nav-cont">
            <li>
              <SearchBar />
            </li>
            <li>
              <img src={notification} alt="bell-icon" className="notify" />
            </li>
            <li>
              <img src={profile} alt="profile-pic" className="profile-img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
