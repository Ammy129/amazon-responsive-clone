import React from "react";
import SingleCartItem from "./components/SingleCartItem";
import "./css/Cart.css";
import { DataContext } from "./Context";

const Cart = () => {
  const { cartItems, totalAmt, totalQty } = React.useContext(DataContext);

  return (
    <section className="Cart-wrapper">
      <div className="cart-items-wrapper">
        {cartItems.length === 0 && (
          <div className="empty-cart">
            <h3>Your Amazon Cart is empty.</h3>
            <p>
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.in homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        )}

        {cartItems.length !== 0 && (
          <>
            <h2 className="cart-title">Shopping Cart</h2>
            {cartItems.map(item => (
              <SingleCartItem key={item.id} {...item} />
            ))}
            <footer className="cart-footer">
              <p>
                Subtotal( {totalQty} item ):
                <span>₹ {totalAmt.toLocaleString("en")}.00</span>
              </p>
            </footer>
          </>
        )}
      </div>

      <div className="cart-total-wrapper">
        <p>Subtotal({totalQty} item ):</p>
        <span>₹ {totalAmt.toLocaleString("en")}.00</span>
        <button>Proceed to Buy</button>
      </div>
    </section>
  );
};

export default Cart;
