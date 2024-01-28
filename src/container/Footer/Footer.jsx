import React from 'react' 
const Footer = () => {
  return <div className='bg-black text-white text-center'>
    <div className=' grid grid-cols-2 xl:grid-cols-4 uppercase '>
      <div>
      <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold my-2 xl:my-5 text-gray-400'>About</h2>
      <div className='flex flex-col space-y-1 xl:space-y-2 text-xs md:text-sm xl:text-base'>      
        <a href="#"> About</a>
        <a href="#"> Blog</a>
        <a href="#"> Careers</a>
        <a href="#"> Partners</a>
      </div>
      </div>
      <div>
      <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold my-2 xl:my-5 text-gray-400'>Solution</h2>
      <div className='flex flex-col space-y-1 xl:space-y-2 text-xs md:text-sm xl:text-base'>
        <a href="#"> Marketing</a>
        <a href="#"> Analatics</a>
        <a href="#"> Commerce</a>
        <a href="#"> insights</a>
        <a href="#"> support</a>
      </div>
      </div>
      <div>
      <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold my-2 xl:my-5 text-gray-400'>Documentation</h2>
      <div className='flex flex-col space-y-1 xl:space-y-2 text-xs md:text-sm xl:text-base'>
        <a href="#"> Guide</a>
        <a href="#"> api status</a>
      </div>
      </div>
      <div>
      <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-semibold my-2 xl:my-5 text-gray-400'>Legal</h2>
      <div className='flex flex-col space-y-1 xl:space-y-2 text-xs md:text-sm xl:text-base'>
        <a href='#'> Claim</a>
        <a href='#'> Privacy</a>
        <a href='#'> Terms</a>
      </div>
      </div>
    </div>
    <h2 className='text-lg md:text-xl xl:text-2xl py-5'>&copy; 2023 ShopNow. All rights reserved.</h2>
  </div>
}

export default Footer