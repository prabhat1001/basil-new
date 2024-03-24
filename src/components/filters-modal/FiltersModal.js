import React, { useState } from "react";
import "./FiltersModal.css";

import crossIcon from "../../assets/icons/cross-icon.svg";
import success from "../../assets/status-icons/success.svg";
import pending from "../../assets/status-icons/pending.svg";
import failure from "../../assets/status-icons/failure.svg";
import sent from "../../assets/status-icons/sent.svg";
import refInitiated from "../../assets/status-icons/ref-initiated.svg";
import refComplete from "../../assets/status-icons/ref-complete.svg";

const FiltersModal = ({ isOpen, onClose, onApply }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Function to toggle selection of a filter
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Function to apply selected filters and close the modal
  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="mdl-fil-heading">
          <h2>Filter</h2>
        </div>
        <button className="cancel-btn" onClick={onClose}>
          <img src={crossIcon} alt="close" />
        </button>
        <div className="fil-container">
          <div className="status-filter">
            <h4>Status</h4>
            <div className="status-cont">
              <button
                className={`stat-btn ${
                  selectedFilters.includes("success") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("success")}
              >
                <img src={success} alt="" />
                <p>Successful</p>
              </button>

              <button
                className={`stat-btn ${
                  selectedFilters.includes("pending") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("pending")}
              >
                <img src={pending} alt="" />
                <p>Pending</p>
              </button>

              <button
                className={`stat-btn ${
                  selectedFilters.includes("failure") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("failure")}
              >
                <img src={failure} alt="" />
                <p>Failure</p>
              </button>

              <button
                className={`stat-btn ${
                  selectedFilters.includes("sent") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("sent")}
              >
                <img src={sent} alt="" />
                <p>Sent</p>
              </button>

              <button
                className={`stat-btn ${
                  selectedFilters.includes("refund initiated") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("refund initiated")}
              >
                <img src={refInitiated} alt="" />
                <p>
                  Refund <br />
                  Initiated
                </p>
              </button>

              <button
                className={`stat-btn ${
                  selectedFilters.includes("refund completed") ? "selected" : ""
                }`}
                onClick={() => toggleFilter("refund completed")}
              >
                <img src={refComplete} alt="" />
                <p>
                  Refund <br /> Completed
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="Apply-btn" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersModal;
