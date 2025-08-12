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
        <Image src={images.Rectangle30} alt='december special images' width={'auto'} height={'auto'}/>
        <Image src={images.Rectangle31} alt='december special images' width={'auto'} height={'auto'}/>
      </div>
    </div>
  )
}

export default DecSpecial