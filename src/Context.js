import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
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
  const { pathname } = useLocation();
  const [cartItems, setCartItems] = useState(getFromLocal());
  const [totalQty, setTotalQty] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredCartItems, setFilteredCartItems] = useState([]);
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

    //change qty to 1
    const deletedItem = ProductData.find(data => data.id === id);
    deletedItem.qty = 1;
  };

  //getting item for product detail page
  const getItems = id => {
    const newItem = ProductData.find(data => data.id === id);
    setItemDetail(newItem);
  };

  const filterProducts = () => {
    //if search happn
    if (searchValue) {
      const searchLower = searchValue.toLowerCase();

      // on Home page
      if (pathname === "/") {
        const temp = ProductData.filter(data =>
          data.title.includes(searchLower)
        );
        setFilteredProducts(temp);
      }

      // on Cart page
      else if (pathname === "/cart") {
        const temp = cartItems.filter(data => data.title.includes(searchLower));
        setFilteredCartItems(temp);
      }
    }

    //nothing happn
    else {
      setFilteredProducts(ProductData);
      setFilteredCartItems(cartItems);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [searchValue]);

  useEffect(() => {
    setSearchValue("");
    filterProducts();
  }, [pathname, cartItems]);

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
        searchValue,
        setSearchValue,
        filteredProducts,
        filteredCartItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
