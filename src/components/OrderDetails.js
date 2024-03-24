import React from "react";
import { useParams } from "react-router-dom";
import refundIcon from "../assets/icons/refund.svg";
import Excel from "../assets/icons/excel-export.svg";
import PrintPDF from "./PrintPDF";
import orderObj from "../utils/mockData";

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

const OrderDetails = () => {

  // Get the orderID from the URL
  const { orderID } = useParams();
  const orderDetails = orderObj.find((order) => order.orderID === orderID);

  const totalAmountOfDrinks = orderDetails.details.reduce((total, drink) => {
    return total + parseInt(drink.amt);
  }, 0);

  return (
    <div className="order-cont">
      <div className="order-feature">
        <button className="rfnd-btn">
          <img src={refundIcon} alt="" />
          Refund Complete Order
        </button>
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
      <div className="order-main">
        <div className="ord-left">
          <div className="ord-cont-1">
            <h4>OD{orderDetails.orderID}</h4>
            <div className={`status ${getStatusColor(orderDetails.status)}`}>
              <div className="status-box">{orderDetails.status}</div>
            </div>
          </div>

          <div className="ord-cont-2">
            <h3>basic information</h3>
            <div className="details-info">
              <div className="info-1">
                <p className="info-heading">Date and Time</p>
                <p className="info-1-detail">
                  {orderDetails.date} ; {orderDetails.time} PM
                </p>
              </div>
              <div className="info-2">
                <p className="info-heading">Machine</p>
                <p className="info-1-detail">
                  {orderDetails.machineName}
                  {orderDetails.machineNo}
                  <span>(MI{orderDetails.machineID})</span>
                </p>
              </div>
            </div>
          </div>

          <div className="ord-cont-3">
            <h3>Order Summary</h3>
            <div className="details-info">
              <div className="info-1">
                <p className="info-heading">Payment ID</p>
                <p className="info-1-detail">{orderDetails.paymentID}</p>
              </div>
              <div className="info-2">
                <p className="info-heading">Total Amount</p>
                <p className="info-1-detail">₹ {totalAmountOfDrinks}</p>
              </div>
            </div>
          </div>

          <div className="ord-cont-4">
            <h3>Customer Information</h3>
            <div className="details-info" id="h-inc">
              <div className="info-1">
                <p className="info-heading">Name</p>
                <p className="info-1-detail">
                  {orderDetails.customerDetails.name}
                </p>
              </div>
              <div className="info-2">
                <p className="info-heading">Contact Number</p>
                <p className="info-1-detail">
                  {orderDetails.customerDetails.contact}
                </p>
              </div>
              <div className="info-3">
                <p className="info-heading">Email</p>
                <p className="info-1-detail">
                  {orderDetails.customerDetails.email}
                </p>
              </div>
            </div>
          </div>

          <div className="ord-cont-5">
            <h3>Refund Information</h3>
            <div className="details-info">
              <div className="info-1">
                <p className="info-heading">Refund Transaction ID</p>
                <p className="info-1-detail">{orderDetails.refundID}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ord-right">
          <h4>Order Details</h4>
          <div className="ord-display">
            <table className="table-ord-cont">
              <thead className="t-ord-head">
                <tr className="t-ord-row">
                  <th>ID</th>
                  <th>Drink Name</th>
                  <th>customisation</th>
                  <th>Amount</th>
                  <th>Drink status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="t-ord-body">
                {orderDetails.details.map((drink, index) => (
                  <tr key={index}>
                    <td>C{drink.custID}</td>
                    <td>{drink.drinkName}</td>
                    <td>{drink.customization}</td>
                    <td>₹{drink.amt}</td>
                    <td
                      className={`status ${getStatusColor(drink.drinkStatus)}`}
                    >
                      <div className="status-box">{drink.drinkStatus}</div>
                    </td>
                    <td>
                      {drink.action ? (
                        <button className="rfnd-btn">Refund</button>
                      ) : (
                        <button className="rfnd-btn-dbl" disabled>
                          Refund
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
