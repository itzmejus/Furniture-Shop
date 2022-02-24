import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import data from "./data/data";
import Cartnew from "./components/Cartnew";
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAddToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={<Products products={products} onAddToCart={onAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} onAddToCart={onAddToCart} />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<Cartnew />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
