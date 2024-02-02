import React from 'react';
import Navbar from './container/Header/Navbar';
import HomePage from './container/HomePage/HomePage';
import Footer from './container/Footer/Footer';
import ItemsPage from './container/ItemsPage/ItemsPage';
import { PhoneData } from './Data/PhoneData';
import ItemInfoPage from './container/ItemInfoPage/ItemInfoPage';
import Cart from './container/Cart/Cart';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 py-[72px] md:pt-[128px] lg:pb-0">
        {/* <HomePage /> */}
        {/* <ItemsPage product={PhoneData} /> */}
    {/* <ItemInfoPage/> */}
    <Cart/>
      </div>
      <Footer />
    </div>

  );
};

export default App;
