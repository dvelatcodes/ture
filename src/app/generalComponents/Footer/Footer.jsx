import React from 'react'
import './styles.scss'
import Link from 'next/link';
import Image from 'next/image';
import {socialImages} from '../../assets';
import images from '../../assets';
const Footer = () => {
  return (
    <footer>
        <div className="company">
            <h1>
                OUR COMPANY
            </h1>
            <Link href='#'>
                ABOUT US
            </Link>
            <Link href='#'>
                CONTACT US
            </Link>
            <Link href='#'>
                VISIT OUR SHOWROOM
            </Link>
            <Link href='#'>
                TESTIMONIALS
            </Link>
            <Link href='#'>
                TERMS & CONDITIONS
            </Link>
            <Link href='#'>
                PRIVACY POLICY
            </Link>
        </div>
        <div className="customer">
            <h1>
                CUSTOMER SERVICE
            </h1>
            <Link href='#'>
                BOOK AN APPOINTMENT
            </Link>
            <Link href='#'>
                FAQS
            </Link>
            <Link href='#'>
                SAMPLE REQUEST
            </Link>
            <Link href='#'>
                INTERIOR DESIGN SERVICE
            </Link>
        </div>
        <div className="sign-up">
            <h1>
                SIGN UP FOR OUR NEWSLETTER
            </h1>
            <div className="input-cover">
                <input type="email" name="email" placeholder='EMAIL ADDRESS' />
                <span>
                    <Image src={images.inputArrow} alt='social link' height={29.786} width={20.04}/>
                </span>
            </div>
            <h1>
                FOLLOW US
            </h1>
            <div className="socials">
                {
                    socialImages.map((picture,index)=>(<Link href={picture.link} key={index}>
                    <Image src={picture.picture} alt='social link' height={'auto'} width={'auto'}/>
                    </Link>))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer