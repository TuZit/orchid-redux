import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import data from "./component/data/data.json";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Routers from "./component/Routers/Routers";

import "./App.css";

function App() {
  const { productItems } = data;
  // console.log(productItems);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductsExist = cartItems.find((item) => item.id === product.id);

    if (ProductsExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductsExist, quantity: ProductsExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductsExist = cartItems.find((item) => item.id === product.id);

    if (ProductsExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductsExist, quantity: ProductsExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClearAllProducts = () => {
    setCartItems([]);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routers
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleClearAllProducts={handleClearAllProducts}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
