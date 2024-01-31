import { Avatar, Rating } from '@mui/material'
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
const ReviewCard = () => {
  return (
    <div className='flex m-5'>
    <Avatar sx={{ bgcolor: deepOrange[500]}}>N</Avatar>
    <div className='mx-5'>
      <h2 className='text-xl font-semibold'>Name</h2>
      <p>Feb 1st, 2023</p>
      <Rating value={4.6} precision={.5}  readOnly/>
    </div>
    </div>
  )
}

export default ReviewCard