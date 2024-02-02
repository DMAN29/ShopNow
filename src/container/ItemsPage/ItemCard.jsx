import React from 'react'

const ItemCard = ({item}) => {
  return <>
    <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] m-2 md:m-4 w-full md:w-64 lg:w-44  xl:w-[280px] h-40 md:h-80  xl:h-[360px] p-2 rounded-xl transition ease-in-out adelay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer flex md:block'>
        <div className='w-1/2 md:w-full'> 
            <img src={item.src} alt="" className='h-36 md:h-48 xl:h-60  object-cover mx-auto '/>
        </div>
        <div className=' my-auto xl:my-4 lg:px-4'>
            <h4 className='font-bold lg:text-xl'>{item.brand}</h4>
            <p className='font-semibold text-sm lg:text-base'>Details</p>
            <p className='space-x-2 text-sm lg:text-base'>
                <span className='font-bold'>&#8377;40000</span>
                <span className='line-through'>&#8377;80000</span>
                <span className='font-semibold text-green-600 text-sm'>50% off</span>
            </p>
        </div>
    </div>
  </>
}

export default ItemCard