import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getCartTotal } =
    useContext(StoreContext);

  const Navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="cart-item">
                <img src={item.image} alt={item.title} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            );
          }
        })}
      </div>
      <hr />
      <div className="cart-bottom">
        <div className="promo">
          <p>Enter Promo Code Here!</p>
          <div className="promo-input">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Submit!</button>
          </div>
        </div>
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
          <button onClick={() => Navigate("/order")}>
            Proceed To Checkout!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
