import React from "react";

import logo from "../assets/basil-logo.svg";

import Home from "../assets/icons/home-icon.svg";
import Map from "../assets/icons/map-icon.svg";
import Order from "../assets/icons/order-bg.svg";
import People from "../assets/icons/people-icon.svg";
import Food from "../assets/icons/dining-icon.svg";
import Recipt from "../assets/icons/recipt-icon.svg";
import Profit from "../assets/icons/profit-icon.svg";
import Settings from "../assets/icons/settings-icon.svg";
import Logout from "../assets/icons/log-out-icon.svg";

const SideBar = () => {
  return (
    <div className="side-bar-cont">
      <div className="side-bar-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="main-icons">
          <ul className="icons-cont">
            <li>
              <img src={Home} alt="home-icon" />
            </li>
            <li>
              <img src={Map} alt="Map-icon" />
            </li>
            <li>
              <img src={Order} alt="Order-icon" />
            </li>
            <li>
              <img src={People} alt="People-icon" />
            </li>
            <li>
              <img src={Food} alt="Food-icon" />
            </li>
            <li>
              <img src={Recipt} alt="Recipt-icon" />
            </li>
            <li>
              <img src={Profit} alt="Profit-icon" />
            </li>
          </ul>
        </div>
        <div className="additional-icons">
          <ul className="icons-cont">
            <li>
              <img src={Settings} alt="Recipt-icon" />
            </li>
            <li>
              <img src={Logout} alt="Profit-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
