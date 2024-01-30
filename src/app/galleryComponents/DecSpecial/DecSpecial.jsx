import React from 'react'
import './styles.scss';
import Image from 'next/image';
import images from '@/app/assets';
const DecSpecial = () => {
  return (
    <div className='dec-special'>
      <h5>
        Dec-Special
      </h5>
      <div className="dec-img">
        <Image src={images.Rectangle30} alt='december special images' width={'auto'} height={'auto'} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle+30.c973f64c.png&w=8&q=70'/>
        <Image src={images.Rectangle31} alt='december special images' width={'auto'} height={'auto'} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle+31.622c946b.png&w=8&q=70'/>
      </div>
    </div>
  )
}

export default DecSpecial