import React from "react";
import Card from "./Card";

const ProductCart = ({ todos, addToCart }) => {
  return (
    <div className="container">
      {todos.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        todos.map((todo) => {
          return <Card key={todo.sno} todo={todo} addToCart={addToCart} />;
        })
      )}
    </div>
  );
};

export default ProductCart;
