import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page404 from '../404Page/Page404';
import CartPage from '../CartPage/CartPage';
import Contact from '../Contact/Contact';
import FAQ from '../FAQPage/FAQPage';
import Home from '../Home/Home';
import ShopDetail from '../ShopDetail/ShopDetail';
import ShopPage from '../ShopPage/ShopPage';
import Login from '../Login/Login';
import Shop from '../Shop/Shop';
import UserManage from '../UserManage/UserManage.jsx';
import Signup from '../Login/Signup.jsx';
import Pagi from '../UserManage/Pagination.js';

function Routers() {
  return (
    <div id='routers'>
      <Routes>
        <Route path='/' extract element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feature' element={<FAQ />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/about' element={<ShopPage />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/manage' element={<UserManage />} />
        <Route path='/manage' element={<UserManage />} />
        <Route path='/pagi' element={<Pagi />} />
        <Route path='/details/:id' element={<ShopDetail />} />
      </Routes>
    </div>
  );
}

export default Routers;
