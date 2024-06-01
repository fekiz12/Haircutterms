import React from 'react'
import './Book.css'
import Booking from '../../Components/Booking/Booking'
import Title from '../../Components/Title/Title'
const Book = () => {
  return (
    <div>
      <Title subTitle="Book Now"/>
      <Booking/>
    </div>
  )
}

export default Book