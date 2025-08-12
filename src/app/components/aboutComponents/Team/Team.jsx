import React from 'react';
import './styles.scss';
import Image from 'next/image';
import {teamImagesAbout} from '../../../assets'
const Team = () => {
  return (
    <div className='team-cover'>
      <h1>
        Meet Our Team
      </h1>
      <p>
        The B.Furniture work embodies the crafts life. 
        Yes, they're world champions, innovators and leaders, 
        but they're also the perfect ambassadors for all things B.Furniture. 
        Providing crucial feedback on all our products while traveling the globe, 
        they're our experts at making the most out of every day.
      </p>
      <div className="team-img-cover">
        {teamImagesAbout.map((picture, index)=>{
          return <div className="team" key={index}>
            <Image src={picture.img} alt='team image' width={'auto'} height={'auto'} placeholder='blur' blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmattewJeo.c530d348.png&w=8&q=70'/>
            <h4>
              {picture.name}
            </h4>
            <h6>
              {picture.role}
            </h6>
          </div>
        })}
      </div>
      <div className="brown" style={{marginTop : "50px"}}></div>
    </div>
  )
}

export default Team