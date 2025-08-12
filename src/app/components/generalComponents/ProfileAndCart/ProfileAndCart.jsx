import React from 'react';
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import './styles.scss'

const ProfileAndCart = () => {
  return (
    <div className='ProfileAndCart'>
        <Link href='/'>
            <CgProfile className='ProfileAndCart-icon'/>
        </Link>
         <Link href='/'>
            <FaShoppingCart className='ProfileAndCart-icon'/>
        </Link>
    </div>
  )
}

export default ProfileAndCart