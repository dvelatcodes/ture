import React from 'react'
import './styles.scss';
import {Button} from '../../generalComponents';
import {heroImageHome} from '../../../assets'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className='hero-home'>
      <div className="home-hero-left">
          <h3>
            Beauty, Smooth and Elegant
          </h3>
          <h1>
            Modern Furnitures
          </h1>
          <p>
            A home is a window into the owner's soul and furniture is a way to show our personality.
          </p>
          <Button text='Learn More' className='primary-button home-but' type='button' />
      </div>
      <div className="home-hero-right">
          {heroImageHome.map((picture, index)=>(<Image key={index} src={picture.img} alt='hero image' width={'auto'} height={'auto'}/>))}
      </div>
    </div>
  )
}

export default Hero