import React from "react";
import "./css/SingleInlineProduct.css";

const SingleInlineProduct = ({ id, image, price }) => {
  return (
    <article className="single-inline-product">
      <figure className="inline-img">
        <img src={image} alt="" />
      </figure>
      <p className="inline-price">₹{price.toLocaleString("en")}.00</p>
    </article>
  );
};

export default SingleInlineProduct;
