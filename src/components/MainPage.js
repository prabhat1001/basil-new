import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Body from "./Body";

const MainPage = () => {
  return (
    <div className="app-cont">
      <SideBar />
      <div className="main-sec">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default MainPage;
