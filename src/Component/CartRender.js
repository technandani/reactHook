import React from "react";

const CartRender = ({ cartItems, updateCartItem, removeCartItem }) => {
  const handleIncrement = (sno) => {
    const item = cartItems.find((item) => item.sno === sno);
    updateCartItem(sno, item.count + 1);
  };

  const handleDecrement = (sno) => {
    const item = cartItems.find((item) => item.sno === sno);
    if (item.count > 1) {
      updateCartItem(sno, item.count - 1);
    } else {
      removeCartItem(sno);
    }
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="rightBox">
      <div className="addedItemHeading">Cart</div>
      <div className="addedItemList">
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div className="table">
            <table id="addedItemTable">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.sno}>
                    <td>
                      <div className="cartImage">
                        <img src={item.img} alt="" className="img" height="40px" />
                      </div>
                    </td>
                    <td>
                      <div className="productName">{item.title}</div>
                      <div className="productPrice">₹{item.price}</div>
                    </td>
                    <td style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <button className="countBtn" onClick={() => handleDecrement(item.sno)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <p className="count">{item.count}</p>
                      <button className="countBtn" onClick={() => handleIncrement(item.sno)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="amountInfo">
          <div className="totalAmountName">Total Amount:</div>
          <div id="totalAmountValue">₹{totalAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default CartRender;
