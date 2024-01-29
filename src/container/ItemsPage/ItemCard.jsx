import React from 'react'

const ItemCard = () => {
  return <>
    <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] m-2 lg:m-4 h-40 lg:h-[360px] p-2 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer flex lg:block'>
        <div className='w-1/2 lg:w-full'> 
            <img src="./images/item1.jfif" alt="" className='h-36 lg:h-60  object-cover mx-auto '/>
        </div>
        <div className=' my-auto xl:my-4 lg:px-4'>
            <h4 className='font-bold lg:text-xl'>Brand</h4>
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