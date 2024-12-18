import React from "react";

const Card = ({ todo, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(todo);
  };

  return (
    <div className="leftBox">
      <div className="box">
        <div className="cart">
          <div className="productImage">
            <img src={todo.img} alt="" className="img" />
          </div>
          <div className="productInfoBox">
            <div className="productInfo">
              <div className="productName">{todo.title}</div>
              <div className="productPrice">₹{todo.price}</div>
              <button type="button" className="addToCartBtn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

