import React from 'react';
import './styles.scss';
import {Button} from '../../generalComponents';
import images from '../../assets';
import Image from 'next/image';
const Main = () => {
  return (
    <div className='main-home'>
      <div className='first'>
        <h4>
          We create the world best furniture.
        </h4>
        <p>
          All of our luxury furniture is handcrafted using kiln-dried hardwood timber.
        </p>
        <Button text='Learn More' className='primary-button main-home-btn' type='button'/>
      </div>
      <div className='second'>
          <div className='we-are'>
              <div className="process-cover">
                <Image src={images.process} alt='process image' width={50} height={50}/>
              </div>
              <div>
                <h4>
                  Who We Are
                </h4>
                <small>
                  We are a PUC licensed and <br/> insured moving company.
                </small>
              </div>
          </div>
          <div className='we-do'>
              <div className="process-cover">
                <Image src={images.process} alt='process image' width={50} height={50}/>
              </div>
              <div>
                <h4>
                  What We Do
                </h4>
                <small>
                  We manufacture the best <br/> furnitures there is.
                </small>
              </div>
          </div>
      </div>
      <div className='third'>
          <div className='why-us'>
            <div className="process-cover">
                <Image src={images.process} alt='process image' width={50} height={50}/>
            </div>
            <div>
                <h4>
                  Why Us?
                </h4>
                <small>
                  We aim at customer <br/> satisfaction.
                </small>
            </div>
          </div>
          <div className='with-us'>
              <div className="process-cover">
                <Image src={images.process} alt='process image' width={50} height={50}/>
              </div>
              <div>
                <h4>
                  Work With Us
                </h4>
                <small>
                  We have a great work <br/> environment.
                </small>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Main