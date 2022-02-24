import React from "react";
import "../Styles/Products.css";
import Product from "../model/Product";
function Products(props) {
  const { products,onAddToCart } = props;

  // console.warn(data.products);
  return (
    <div className="list">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart}></Product>
      ))}
    </div>
  );
}
export default Products;
