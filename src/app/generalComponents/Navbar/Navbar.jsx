'use client'
import React, {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import './styles.scss'
import Link from 'next/link'
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [ham, setHam] = useState(true);
    const address = usePathname();
    useEffect(()=>{
        setActiveLink(address);
        setHam(true);
    },[address])

  return (
    <nav className='nav-container'>
        <div className="logo-section">
            <div className="logo">
                <h1>
                    BF
                </h1>
            </div>
            <span>
                B.Furniture
            </span>
        </div>
        <div className={`${ham? "nav-section" : "ham-nav"}`}>
            <Link href='/' className={`${activeLink === '/'? 'active-nav' : "" }`} onClick={(e)=>{setActiveLink(e.target.getAttribute('href'))
             }}>
                Home
            </Link>
            <Link href='/about' className={`${activeLink === '/about'? 'active-nav' : "" }`} onClick={(e)=>{setActiveLink(e.target.getAttribute('href'))
            console.log(activeLink)
            }}>
                About Us
            </Link>
            <Link href='/gallery' className={`${activeLink === '/gallery'? 'active-nav' : "" }`} onClick={(e)=>{setActiveLink(e.target.getAttribute('href'))
            }}>
                Gallery
            </Link>
            <Link href='/#footer' className={`${activeLink === '#footer'? 'active-nav' : "" }`} onClick={(e)=>{setActiveLink(e.target.getAttribute('href'))
            }}>
                Contact Us
            </Link>
        </div>
        <div className="hamContainer"
        onClick={()=>setHam(!ham)}>
            <div className={`${ham? "ham" : "ham-collapse"}`}>

            </div>
        </div>
    </nav>
  )
}

export default Navbar