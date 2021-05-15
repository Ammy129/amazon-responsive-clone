import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import "./css/HoverState.css";

const HoverState = () => {
  return (
    <article className="hover-section">
      <span>
        <ArrowDropUpIcon />
      </span>
      <div className="list">
        <h3>Your Lists</h3>
        <p>Create a Wish List</p>
        <p>Find a Wish List</p>
        <p>Wish from Any website</p>
        <p>baby wish list</p>
        <p>Discover your style</p>
        <p>explore showroom</p>
      </div>
      <div className="account">
        <h3>Your Account</h3>
        <p>your Account</p>
        <p>your Orders</p>
        <p>your wish list</p>
        <p>your Recommendations</p>
        <p>your prime membership</p>
        <p>your prime video</p>
        <p>your subscribe & save items</p>
        <p>memberships & subscription</p>
        <p>your amazon business account</p>
        <p>your Seller account</p>
        <p>your content and devices </p>
        <p>switch accounts </p>
        <button>Sign Out</button>
      </div>
    </article>
  );
};

export default HoverState;
