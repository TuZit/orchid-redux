import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import Routers from "./Routers/Routers.js";

import data from "./data/data.json";
const { productItems } = data;

function DefaultLayout() {
  return (
    <div>
      <Header />
      <Routers productItems={productItems} />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
