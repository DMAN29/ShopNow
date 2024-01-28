import React from 'react'
const CaroselCard = ({item}) => {
  return <>
  <div className='mx-2 my-1 h-28 md:h-40 xl:h-72 cursor-pointer p-2 shadow-xl bg-white rounded-xl'>
    <img src={item.src} alt='' className='h-4/5 object-cover mx-auto'/>
    <p className='text-xs md:text-base'>
    {item.brand}
    </p>
  </div>
  </>
}

export default CaroselCard

