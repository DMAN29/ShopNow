import { Button } from '@mui/material'
import React from 'react'

const AddressCard = () => {
  return <div className='border px-2 py-2 md:py-5 text-xs md:text-sm xl:text-base relative'>
  <h2 className='text-base md:text-lg xl:text-xl font-semibold py-2'>Hritik Chauhan</h2>
  <p>Alpha 1, Chitwan Streets, road 9, Greater Noida, 201309</p>
  <p>Greater Noida, Uttar Pradesh 201309</p>
    <h4 className='text-sm md:text-base xl:text-lg font-semibold py-2'>Phone Number : </h4>
<p>9638527410</p>
  <Button variant='contained' color='secondary' sx={{height:{xs:32,lg:42}, fontSize:{xs:12,md:16},position:{xl:'absolute'},right:{xl:10},bottom:{xl:16},marginTop:1}}>Deliver Here</Button>
  </div>
}

export default AddressCard