import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [active, setActive] = useState("home");

  const {getCartTotal} = useContext(StoreContext);

  const handleClick = (item) => {
    console.log(`Clicked on ${item}`);
    setActive(item);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleClick("home")}
          className={active === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => handleClick("menu")}
          className={active === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => handleClick("contact")}
          className={active === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-basket-icon">
          <Link to="/Cart"> 
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getCartTotal() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
