import React, { useEffect, useState } from "react";

import data from "../data/data.json";
import "./shop.scss";
import Product from "./Product.jsx";
import { useSelector } from "react-redux";

const { productItems } = data;

function Shop({ name, id, price }) {
  return (
    <div id="shop">
      <div className="shop-container">
        <div className="shop-left">
          <h3>Categories</h3>
          <ul>
            <li>All</li>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Meats</li>
          </ul>
        </div>
        <div className="shop-right">
          {productItems.map((item, index) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              thumbnailUrl={item.thumbnailUrl}
              price={item.price}
              weight={item.weight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
