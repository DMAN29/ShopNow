import React from 'react'
const CaroselCard = ({item}) => {
  return <>
  <div className='mx-2 my-1 h-28 md:h-40 xl:h-72 p-2 shadow-xl bg-white rounded-xl cursor-pointer hover:translate-y-2'>
    <img src={item.src} alt='' className='h-4/5 object-cover mx-auto'/>
    <p className='text-xs md:text-base'>
    {item.brand}
    </p>
  </div>
  </>
}

export default CaroselCard

