import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Order.css";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const Navigate = useNavigate();
  const { getCartTotal } = useContext(StoreContext);

  return (
    <form className="order-from">
      <div className="left">
        <div className="info">
          <p className="title">Delivery Information</p>
          <div className="multi-field">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="multi-field">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-field">
            <input type="text" placeholder="Zipcode" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone Number" />
        </div>
      </div>
      <div className="right">
        <div className="total">
          <div className="details">
            <p>Subtotal</p>
            <p>${getCartTotal()}</p>
          </div>
          <div className="details">
            <p>Delivery</p>
            <p>${5}</p>
          </div>
          <div className="details">
            <p>Total</p>
            <p>${getCartTotal() + 5}</p>
          </div>
          <button onClick={() => Navigate("/")}>Proceed To Payment!</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
