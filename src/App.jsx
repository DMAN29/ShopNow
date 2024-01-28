import React from 'react'
import Navbar from './container/Header/Navbar'
import HomePage from './container/HomePage/HomePage'
import Footer from './container/Footer/Footer'

const App = () => {
  return <>
    <Navbar/>
    <div className='py-[72px] md:pt-[128px] lg:pb-0 '>
    <HomePage />
    <Footer/>
    </div>
  </>
}

export default App