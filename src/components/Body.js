import React, { useState, useEffect } from "react";
import Display from "./Display";
import Search from "./SearchBar";
import Excel from "../assets/icons/excel-export.svg";
import PrintPDF from "./PrintPDF";
import FiltersModal from "./filters-modal/FiltersModal";

import remFilter from "../assets/icons/grey-cross-icon.svg";
import orderObj from "../utils/mockData";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [processedData, setProcessedData] = useState({
    totalMachines: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalDrinks: 0,
    totalAmount: 0,
    totalRefundsInitiated: 0,
  });

  let filteredData =
    selectedFilters.length > 0
      ? orderObj.filter((order) => selectedFilters.includes(order.status))
      : orderObj;

  useEffect(() => {
    // Calculate processed data when selectedFilters or orderObj changes
    const calculateProcessedData = () => {
      try {
        const uniqueMachines = new Set();
        let totalOrders = 0;
        let totalCustomers = 0;
        let totalDrinks = 0;
        let totalAmount = 0;
        let totalRefundsInitiated = 0;

        filteredData.forEach((order) => {
          uniqueMachines.add(order.machineID); 
          totalOrders++;
          totalCustomers++;
          totalDrinks++;
          totalAmount += parseInt(order.totalAmt);
          if (order.status === "refund initiated") {
            totalRefundsInitiated++;
          }
        });

        setProcessedData({
          totalMachines: uniqueMachines.size,
          totalOrders,
          totalCustomers,
          totalDrinks,
          totalAmount,
          totalRefundsInitiated,
        });
      } catch (error) {
        console.error("Error calculating processed data:", error);
      }
    };

    calculateProcessedData();
  }, [selectedFilters, orderObj]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const applyFilters = (filters) => {
    setSelectedFilters(filters);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="body-main">
      <div className="feature-sec">
        <Search />
        <div className="f-right">
          <ul className="f-cont">
            <li>
              <img src={Excel} alt="export excel file" />
            </li>
            <li className="save-pdf">
              <PrintPDF />
            </li>
          </ul>
        </div>
      </div>
      <div className="main-cont">
        <div className="left-main">
          <div className="insights">
            <p>
              <span>Machines:</span> {processedData.totalMachines}
            </p>
            <p>
              <span>Orders:</span> {processedData.totalOrders}
            </p>
            <p>
              <span>Customers:</span> {processedData.totalCustomers}
            </p>
            <p>
              <span>Drinks:</span> {processedData.totalDrinks}
            </p>
            <p>
              <span>Total Amount:</span> ₹ {processedData.totalAmount}
            </p>
            <p>
              <span>Refunds Initiated:</span>{" "}
              {processedData.totalRefundsInitiated}
            </p>
          </div>
          <div className="tab-cont">
            <Display filteredData={filteredData} />
          </div>
        </div>
        <div className="right-main">
          <div className="fil-cont">
            <h3>filters</h3>
            <div className="fil-features">
              <button className="select-fil" onClick={toggleModal}>
                Select Filters
              </button>
              <button className="clr-all-fil" onClick={clearFilters}>
                Clear All
              </button>
            </div>
            <div className="fil-display">
              {selectedFilters.map((filter, index) => (
                <div key={index} className="filter-bubble">
                  {filter}
                  <button
                    className="remove-filter-btn"
                    onClick={() => removeFilter(filter)}
                  >
                    <img src={remFilter} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FiltersModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onApply={applyFilters}
      />
    </div>
  );
};

export default Body;
