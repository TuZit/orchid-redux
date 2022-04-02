import { BrowserRouter } from "react-router-dom";

import data from "./component/data/data.json";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Routers from "./component/Routers/Routers";

const { productItems } = data;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routers productItems={productItems} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
