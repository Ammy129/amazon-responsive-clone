import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import "./css/SingleCartItem.css";

const SingleCartItem = ({ id, image, price, title, qty }) => {
  const { qtyChanged, deleteItem } = React.useContext(DataContext);
  const [newQty, setNewQty] = useState(qty);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    qtyChanged(id, newQty);
    if (newQty === "0") {
      deleteItem(id);
    }
  }, [newQty]);

  const quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <article
      className="singleCartItemWrapper"
      style={{ opacity: `${opacity ? "0.5" : "1"}` }}
    >
      <figure className="cart-item-img">
        <Link to={`/product/${id}`}>
          <img src={image} alt="cartItem" />
        </Link>
      </figure>

      <article className="content-container">
        <Link to={`/product/${id}`}>
          <h4 className="cart-item-title">{title}</h4>
          <small className="in-stock">In stock</small>
        </Link>
        <div className="btn-wrapper">
          <select value={newQty} onChange={e => setNewQty(e.target.value)}>
            {quantities.map((qty, index) => (
              <option key={index} value={qty}>
                Qty: {qty} {qty === 0 && "(Delete)"}
              </option>
            ))}
          </select>
          <button className="cart-btn" onClick={() => deleteItem(id)}>
            Delete
          </button>
          <button
            className="cart-btn"
            onClick={() => (opacity ? setOpacity(false) : setOpacity(true))}
          >
            Save for Later
          </button>
        </div>
      </article>

      <p className="cart-item-price">₹{price.toLocaleString("en")}.00</p>
    </article>
  );
};

export default SingleCartItem;
