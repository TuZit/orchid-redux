import React, { useContext, useEffect, useState } from 'react';

// import data from '../data/data.json';
import './shop.scss';
import Product from './Product.jsx';
import { ProductsContext } from '../../ProductContext.js';

// const { productItems } = data;

function Shop({ name, id, price }) {
  const productItems = useContext(ProductsContext);
  const [data, setData] = useState();
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    setData(productItems);
    setFilter(productItems);
  }, []);

  // Sort Products by category
  const filterProducts = (check) => {
    const updatedProducts = data.filter((x) => x.category === check);
    setFilter(updatedProducts);
  };

  return (
    <div id='shop'>
      <div className='shop-container'>
        <div className='shop-left'>
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setFilter(productItems)}>All</li>
            <li onClick={() => filterProducts('vegetable')}>Vegetables</li>
            <li onClick={() => filterProducts('fruit')}>Fruits</li>
            <li onClick={() => filterProducts('meat')}>Meats</li>
          </ul>
        </div>
        <div className='shop-right'>
          {filter &&
            filter.map((item, index) => (
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
