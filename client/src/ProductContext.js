import { createContext } from 'react';

import data from './component/data/data.json';

const ProductsContext = createContext();

const value = data.productItems;

function ProductProvider({ children }) {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductProvider, ProductsContext };
