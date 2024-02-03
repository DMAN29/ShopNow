import React from 'react'
import AddressCard from './AddressCard'
import Cart from '../Cart/Cart'

const OrderSummery = () => {
  return <div className='mt-5'>
  
    <div className=' w-10/12 mx-auto'>

  <AddressCard/>
    </div>
  <Cart/>
  </div>
}

export default OrderSummery