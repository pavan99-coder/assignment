import React from 'react'
import Navbar from './Navbar'
import './Landing_page.css'
import Landing from '../Assets/landing_img.svg'
const Landing_page = () => {
  return (
    <div className='landing_page'>
      <Navbar/>
      <div className='landing_text'>
             <h1 className='landing_heading'>INNOVATION DIGITAL TECHNOLOGY</h1>
          <p className='landing_sub_heading'>everything we do is the consumer, imagination and you.</p>
          </div>
     
          <img src={Landing} alt="img" className='landing_img' />
         
         
   
    
    </div>  
  )
}

export default Landing_page
