import React from 'react'
import MainCarosel from '../Carousel/MainCarosel'
import { PhoneData } from '../../Data/PhoneData';
// import ProductChoice from '../Carousel/ProductChoice';
import PageCarosel from '../Carousel/PageCarosel';
import { ProductType } from '../../Data/ProductType';

const HomePage = () => {
  return <>
    <PageCarosel data={ProductType} title=""/>
    <MainCarosel/>
    <PageCarosel data={PhoneData} title="Phone"/>
  </>
}

export default HomePage