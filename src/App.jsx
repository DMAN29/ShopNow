import React from 'react';
import Navbar from './container/Header/Navbar';
import HomePage from './container/HomePage/HomePage';
import Footer from './container/Footer/Footer';
import ItemsPage from './container/ItemsPage/ItemsPage';
import { PhoneData } from './Data/PhoneData';
import ItemInfoPage from './container/ItemInfoPage/ItemInfoPage';
import Cart from './container/Cart/Cart';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';

const App = () => {
  return (<Routes>
    <Route path='/*' Component={CustomerRouter}/>
    {/* Admin router */}
  </Routes>
  );
};

export default App;
