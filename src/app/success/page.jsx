import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './styles.scss';

const page = () => {
  return (
    <div className='success-cover'>
        <p className=''>SUCCESS</p>
        <h1 className=''>Your order has been placed! 🎉</h1>
        <p className='thanks'>Thank you for your purchase!</p>
        <a href='/' className=''>
            Continue shopping <FaArrowRightLong />
        </a>
    </div>
  )
}

export default page