import React from "react";
import "../Styles/Products.css";
export default function Product(props) {
  const { product, onAddToCart } = props;
  return (
    <div className="list">
      <div className="singleCard" key={product.id}>
        <h1>{product.name}</h1>
        <img src={product.image} />
        <h2>{product.price}</h2>
        <button onClick={() => onAddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
