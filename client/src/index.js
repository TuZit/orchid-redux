import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'swiper/css/bundle';
import { Provider } from 'react-redux';
import store, { persistor } from './store/index.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ProductProvider } from './ProductContext.js';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
