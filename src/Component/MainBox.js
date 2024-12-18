import React, { useState } from "react";
import ProductCart from "./ProductCart";
import CartRender from "./CartRender";

const MainBox = () => {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Casual Loafers For Men",
      price: "600",
      img: "images/34.jpg",
    },
    {
      sno: 2,
      title: "Knee-Hi",
      price: "500",
      img: "./images/37.jpg",
    },
    {
      sno: 3,
      title: "Women White Solid Cushioned...",
      price: "1200",
      img: "./images/6.jpg",
    },
    {
      sno: 4,
      title: "Trending Stylish Casual ",
      price: "700",
      img: "./images/4.jpg",
    },
    {
      sno: 5,
      title: "Multicolor Stylish Casual Sneakers",
      price: "350",
      img: "./images/31.jpg",
    },
    {
      sno: 6,
      title: "Casual Loafers For Men",
      price: "800",
      img: "./images/29.jpg",
    },
    {
      sno: 7,
      title: "Trending Stylish Casual ",
      price: "680",
      img: "./images/27.jpg",
    },
    {
      sno: 8,
      title: "574 Sneakers For Women",
      price: "780",
      img: "./images/18.jpg",
    },
    {
      sno: 9,
      title: "EVOZ Running Shoes For ...",
      price: "570",
      img: "./images/9.jpg",
    },
    {
      sno: 12,
      title: "SL 170 Running Shoes For ...",
      price: "400",
      img: "./images/10.jpg",
    },
    {
      sno: 13,
      title: "NOOR PLUS V Walking Shoe...",
      price: "350",
      img: "./images/16.jpg",
    },
    {
      sno: 14,
      title: "Women White Lifestyle Soft...",
      price: "500",
      img: "./images/12.jpg",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (todo) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.sno === todo.sno);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.sno === todo.sno ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...todo, count: 1 }];
      }
    });
  };

  const updateCartItem = (sno, count) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.sno === sno ? { ...item, count } : item
      ).filter(item => item.count > 0)
    );
  };

  const removeCartItem = (sno) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.sno !== sno)
    );
  };

  return (
    <div className="mainBox">
      <ProductCart todos={todos} addToCart={addToCart} />
      <CartRender cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
    </div>
  );
};

export default MainBox;
