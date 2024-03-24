import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Body from "./components/Body";
import OrderDetails from "./components/OrderDetails";

const App = () => {
  return (
    <Router>
      <div className="app-cont">
        <SideBar />
        <div className="main-sec">
          <Header />
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/status/:orderID" element={<OrderDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
