import React from 'react'
import './styles.scss'
import { Button } from '../../generalComponents';
import images from '@/app/assets';
import Image from 'next/image';
const Inquiry = () => {
  return (
    <div className='inquiry'>
      <div className="inquiry-left-cover">
          <div className="inquiry-left">
          <h4>
            Drop us a message
          </h4>
          <form action="#">
            <label htmlFor="name">
              Name
            </label>
            <input type="text" name="name" />
            <label htmlFor="dial">
              Contact Number
            </label>
            <input type="number" name="dial" />
            <label htmlFor="message">
              Message
            </label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <Button text='Submit' className='primary-button' type='button'/>
          </form>
        </div>
      </div>
      
      <div className="inquiry-right">
        <Image src={images.inputImage} alt='image input' width={'auto'} height={'auto'} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finput-image.4c2db098.png&w=4&q=70'/>
      </div>
    </div>
  )
}

export default Inquiry