import React, { useState } from "react";
import "./css/Navbar.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { DataContext } from "../Context";
import amazonLogo from "../amazon-2.svg";
import HoverState from "./HoverState";

const Navbar = () => {
  const { totalQty } = React.useContext(DataContext);

  const [openSidebar, setOpenSidebar] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={amazonLogo} alt="amazon-logo" />
          <p>.in</p>
        </div>
      </Link>

      <div className="menu-wrapper">
        <MenuIcon onClick={() => setOpenSidebar(true)} />
        <div
          className="sidebar"
          style={{ transform: `translateX(${openSidebar ? "0px" : "-105%"})` }}
        >
          <CloseIcon className="close" onClick={() => setOpenSidebar(false)} />
          <h3>
            <AccountCircleIcon />
            Hello,User
          </h3>
          <p>Home</p>
          <p>Shop by Category</p>
          <p>Today' Deals</p>
          <p>Your Orders</p>
          <p>Buy Again</p>
          <p>Your Wish List</p>
          <p>Your Account</p>
          <p>Amazon pay</p>
          <p>Try Prime</p>
          <p>Sell on Amazon</p>
          <p>Programs and Features</p>
          <button>Sign Out</button>
        </div>
      </div>

      <div className="address-wrapper">
        <LocationOnIcon />
        <div className="address">
          <small>Hello</small>
          <strong>Select your address</strong>
        </div>
      </div>

      <form className="nav-form">
        <input type="text" />
        <div className="submit-btn">
          <SearchIcon />
        </div>
      </form>

      <div
        className="account-wrapper"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <small>Hello, User</small>
        <strong>
          Accounts & Lists <ArrowDropDownIcon />
        </strong>

        {isHover && <HoverState />}
      </div>

      <div className="return">
        <small>Returns</small>
        <strong>&& Orders</strong>
      </div>

      <Link to="/cart">
        <div className="cart-wrapper">
          <div className="cart">
            <ShoppingCartIcon />
            <p className="cart-items">{totalQty}</p>
          </div>
          <strong>Cart</strong>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
