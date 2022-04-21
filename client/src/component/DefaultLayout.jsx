import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Routers from './Routers/Routers.js';

function DefaultLayout() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
