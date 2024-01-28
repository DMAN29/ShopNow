import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCaroselData} from '../../Data/MainCaroselData';




const MainCarosel = () => {
    const items = MainCaroselData.map((items)=> <img src={items.src} alt="" className='w-full h-40 md:h-72 lg:h-[500px] object-cover cursor-pointer'/>);
    return<>
    <AliceCarousel
        items={items}
        infinite
        autoPlay
        autoPlayInterval={1000}
        disableButtonsControls
    />
    </>
}
export  default MainCarosel;
