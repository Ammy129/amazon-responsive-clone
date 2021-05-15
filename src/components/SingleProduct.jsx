import React from "react";
import "./css/SingleProduct.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";

const SingleProduct = ({ id, title, image, stars, price }) => {
  const { AddToCart } = React.useContext(DataContext);

  return (
    <article className="single-product">
      <p className="title">{title}</p>
      <strong className="price">₹{price.toLocaleString("en")}.00</strong>
      <p className="stars">
        {Array(stars)
          .fill()
          .map((star, index) => (
            <span key={index}>⭐</span>
          ))}
      </p>
      <Link to={`/product/${id}`}>
        <figure className="product-img">
          <img src={image} alt="product-image" />
        </figure>
      </Link>
      <div className="SingleProduct-btn-wrapper">
        <button className="add-btn" onClick={() => AddToCart(id)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default SingleProduct;
