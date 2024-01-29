import React from 'react'
import './styles.scss'
import Image from 'next/image';
import {galleryImageHome} from '../../assets';
const Gallery = () => {
  return (
    <div className='home-gallery'>
      <h1>
        Our Gallery
      </h1>
      <h6>
        Beauty, Smooth and Elegant.
      </h6>
      <div className="home-gallery-img">
        {
          galleryImageHome.map((picture, index)=><Image src={picture.img} key={index} alt='gallery image' width={424} height={204} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle+3.e3cf59ad.png&w=8&q=70'/>)
        }
      </div>
    </div>
  )
}

export default Gallery