import React from 'react'
import HomePage from '../container/HomePage/HomePage'
import Cart from '../container/Cart/Cart'
import Orders from '../container/Orders/Orders'
import ItemsPage from '../container/ItemsPage/ItemsPage'
import Navbar from '../container/Header/Navbar'
import Footer from '../container/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { ProductType } from '../Data/ProductType'
import { PhoneData } from '../Data/PhoneData'
const CustomerRouter = () => {
  return <>
    <div className="flex flex-col min-h-screen">
       <Navbar />
       <div className="flex-1 py-[72px] md:pt-[128px] lg:pb-0">
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/orders' element={<Orders/>}/>
         <Route path='/:category' element={<ItemsPage/>}/>
         {/* {ProductType.map((item) => (
          <Route
            key={item.category}
            path={`/${item.category.toLowerCase()}`}
            element={<ItemsPage product={item.category}/>}
          />
        ))} */}
       </Routes>
    //     {/* <HomePage /> */}
    //     {/* <ItemsPage product={PhoneData} /> */}
    // {/* <ItemInfoPage/> */}
    // {/* <Cart/> */}
    // {/* <Checkout/> */}
       </div>
       <Footer />
     </div>

  </>
}

export default CustomerRouter