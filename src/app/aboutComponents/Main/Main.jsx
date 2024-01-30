'use client'
import React, {useState} from 'react'
import './styles.scss';
import Link from 'next/link';
import Image from 'next/image';
import images from '../../assets';
const Main = () => {
  const [active, setActive] = useState('we_are')
  return (
    <div className='main-about-cover'>
      <div className="nav-section">
        <Link href='#we_are' className={`${active==='we_are'? 'setActive' : 'nonActive'}`}>Who We Are</Link>
        <Link href='/#why_us' className={`${active==='why_us'? 'setActive' : 'nonActive'}`}>Why Us?</Link>
        <Link href='/#we_do' className={`${active==='we_do'? 'setActive' : 'nonActive'}`}>What We Do</Link>
        <Link href='/#with_us' className={`${active==='with_us'? 'setActive' : 'nonActive'}`}>Work With Us</Link>
      </div>
      <p>
        All of our luxury furniture is handcrafted using kiln-dried hardwood timbers. Our top quality, solid beech wood frames are guaranteed for 15 years for lasting assurance. 
        <br />
        <br />
        Dedicated to true British craftsmanship, we pride ourselves on having only the finest manufacturing practices, authentic materials and a steadfast commitment to quality. We continually strive to offer an impeccable service and a memorable buying experience.
      </p>
      <div className="brown"></div>
      <div className="jake">
          <Image src={images.jake} alt='jake picture' width={750} height={900} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjack.fe6ceabf.png&w=7&q=70'/>
          <div className="jake-content">
            <h2>
              About Jake
            </h2>
            <p>
              Jake founded B.Furniture 
              out of a Vermont barn in 1977 and dedicated the rest of his life 
              to craft. He was our founder, 
              the soul of B.Furnitures, the one 
              who gave us the sport we 
              all love so much.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Main