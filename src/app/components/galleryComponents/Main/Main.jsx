import React from 'react'
import './styles.scss';
import Link from 'next/link';
import Image from 'next/image';
import {galleryImages} from '../../../assets';
// import images from '../../assets';
const Main = () => {
  return (
    <div className='main-gallery'>
        <div className="nav-list">
            <Link href='#' className='listActive'>Trending</Link>
            <Link href='#' className='listActive selected'>Collections</Link>
            <Link href='#' className='listActive'>New Arrival</Link>
            <Link href='#' className='listActive nonSelected'>More...</Link>
        </div>
        <div className="gallery-img-cover">
          {galleryImages.map((picture, index)=><Image key={index} src={picture.img} alt='gallery image' width={'auto'} height={'auto'} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgallery-image1.be6cb18d.png&w=7&q=70'/>)}
        </div>
        <div className="brown" style={{marginTop:'51px', marginBottom:'48px'}}></div>
    </div>
  )
}

export default Main