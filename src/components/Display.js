import React from "react";
import { Link } from "react-router-dom";

const getStatusColor = (status) => {
  switch (status) {
    case "success":
      return "success-color";
    case "failure":
      return "failure-color";
    case "pending":
      return "pending-color";
    case "sent":
      return "sent-color";
    case "refund initiated":
      return "refund-initiated-color";
    case "refund completed":
      return "refund-completed-color";
    default:
      return "";
  }
};

const Display = ({ filteredData }) => {
  return (
    <div className="display-cont">
      <table className="table-cont">
        <thead className="t-head">
          <tr className="t-row">
            <th>S.No.</th>
            <th>Date</th>
            <th>
              Order <br /> ID
            </th>
            <th>
              Machine <br /> name
            </th>
            <th>
              Customer <br /> name
            </th>
            <th>Contact</th>
            <th>
              Total <br /> amount
            </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {filteredData.map((order, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>
                {order.date} <br /> {order.time}
              </td>
              <td>OD{order.orderID}</td>
              <td>
                {order.machineName}
                <br />
                {order.machineNo}
                <span>(MI{order.machineID})</span>
              </td>
              <td>{order.customerDetails.name}</td>
              <td>{order.customerDetails.contact}</td>
              <td>₹ {order.totalAmt}</td>
              <td className={`status ${getStatusColor(order.status)}`}>
                <Link to={`/status/${order.orderID}`} className="link">
                  <div className="status-box">{order.status}</div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
