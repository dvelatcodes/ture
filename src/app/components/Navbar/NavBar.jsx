import React from 'react'
import Link from 'next/link'

const Navbar
 = () => {
  return (
    <div>
        <div className="icon-section">
            <div className="icon">
                <div className="inner-icon">
                    BF
                </div>
            </div>
            <div className="company-name">
                B.Furniture
            </div>
        </div>
        <div className="nav-section">
            <Link href='/' className='home'>
                Home
            </Link>
            <Link href='/aboutUs' className='about'>About Us</Link>
            <Link href='/gallery' className='gallery'>Gallery</Link>
            <Link href='#contact' className='contact'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar
