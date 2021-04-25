import React, { createContext, useEffect, useState } from "react";
import ProductData from "./data/ProductData";

//create context
export const DataContext = createContext();

// getting cart items from local storage
const getFromLocal = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getFromLocal());
  const [totalQty, setTotalQty] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  const [itemDetail, setItemDetail] = useState({
    image: "",
    price: "",
  });

  //Updating qty and amt
  const updateQtyAmt = () => {
    setTotalQty(0);
    setTotalAmt(0);

    cartItems.map(item => {
      setTotalQty(prev => prev + item.qty);
      setTotalAmt(prev => prev + item.price * item.qty);
    });
  };

  //Adding Items to Cart
  const AddToCart = id => {
    const newItem = ProductData.find(data => data.id === id);
    let alreadyAdded = cartItems.find(data => data.id === id);

    //if item is already added in cart
    if (alreadyAdded) {
      if (alreadyAdded.qty >= 10) return;
      alreadyAdded.qty += 1;
      updateQtyAmt();
      saveToLocal();
    }

    //new item added in cart
    else {
      setCartItems(prev => [...prev, newItem]);
    }
  };

  //save cart items to local storage
  const saveToLocal = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    updateQtyAmt();
    saveToLocal();
  }, [cartItems]);

  // if qty changed
  const qtyChanged = (id, newQty) => {
    const updateItem = cartItems.find(data => data.id === id);
    updateItem.qty = parseInt(newQty) === 0 ? 1 : parseInt(newQty);

    updateQtyAmt();
  };

  // delete from Cart
  const deleteItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  //getting item for product detail page
  const getItems = id => {
    const newItem = ProductData.find(data => data.id === id);
    setItemDetail(newItem);
  };

  return (
    <DataContext.Provider
      value={{
        cartItems,
        AddToCart,
        totalQty,
        totalAmt,
        qtyChanged,
        deleteItem,
        getItems,
        itemDetail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
