import React from "react";
import { Routes, Route } from "react-router-dom";

import Page404 from "../404Page/Page404";
import CartPage from "../CartPage/CartPage";
import Contact from "../Contact/Contact";
import FAQ from "../FAQPage/FAQPage";
import Home from "../Home/Home";
import ShopDetail from "../ShopDetail/ShopDetail";
import ShopPage from "../ShopPage/ShopPage";
import Login from "../Login/Login";

function Routers({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearAllProducts,
}) {
  return (
    <div id="routers">
      <Routes>
        <Route
          path="/"
          extract
          element={<Home productItems={productItems} />}
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              productItems={productItems}
              handleAddProduct={handleAddProduct}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feature" element={<FAQ />} />
        <Route
          path="/cart"
          element={
            <CartPage
              productItems={productItems}
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleClearAllProducts={handleClearAllProducts}
            />
          }
        />
        <Route
          path="/about"
          element={<ShopDetail productItems={productItems} />}
        />
        <Route path="/404" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Routers;
