import React from "react";
import "../Styles/Cart.css";
const Cart = (props) => {
  const { cartItems, onAddToCart } = props;
  return (
    <div className="list">
      <div>
        {cartItems.length === 0 && (
          <div className="listpart">
            <h1>cart is empty</h1>
            <h2>Please add some items</h2>
          </div>
        )}
      </div>
      <div className="cartitems">
        {cartItems.map((item) => (
          <div className="singleCard" key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} />
            <h1>{item.price}</h1>
            <h1>
              {item.qty}x{item.price.toFixed(2)}
            </h1> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
