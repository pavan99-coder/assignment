import React from 'react'
import './Working_industry.css'
import  agritech from '../Assets/industry/agritech.svg'
import  E_commerce from '../Assets/industry/E-commerce.svg'
import  education from '../Assets/industry/education.svg'
import  health from '../Assets/industry/health.svg'
import  hospitality from '../Assets/industry/hospitality.svg'
import  it from '../Assets/industry/it.svg'
import  media from '../Assets/industry/media.svg'
import  mobile from '../Assets/industry/mobile.svg'
import  travel from '../Assets/industry/travel.svg'


const Success_parameters = () => {



  return (
    <div className='industry_main_container'>
<h1 className='industry_main_heading'>WE ARE WORKING WITH THESE INDUSTRIES</h1>
    
    <div className='industry_parameter_container'>
      <div className='industry_block'>
        <img src={media} alt="" className='transparency_img'/>
        <h3 className='industry_text'>MEDIA & ENTERTAINMENT</h3>
      </div>

      <div className='industry_block'>
        <img src={health} alt="" className='transparency_img'/>
        <h3 className='industry_text'>HEALTH CARE & WELLNESS</h3>
      </div>

      <div className='industry_block'>
        <img src={hospitality} alt="" className='transparency_img'/>
        <h3 className='industry_text'>HOSPITALITY & REAL ESTATE</h3>
      </div>

      <div className='industry_block'>
        <img src={E_commerce} alt="" className='transparency_img'/>
        <h3 className='industry_text'>RETAIL & E COMMERCE</h3>
      </div>

      <div className='industry_block'>
        <img src={education} alt="" className='transparency_img'/>
        <h3 className='industry_text'>EDUCATION & LEARNING</h3>
      </div>

      <div className='industry_block'>
        <img src={travel} alt="" className='transparency_img'/>
        <h3 className='industry_text'>TRAVEL & TRANSPORT</h3>
      </div>
      <div className='industry_block'>
        <img src={mobile} alt="" className='transparency_img'/>
        <h3 className='industry_text'>MOBILE & TELECOM</h3>
      </div>
      <div className='industry_block'>
        <img src={it} alt="" className='transparency_img'/>
        <h3 className='industry_text'>IT & ITES</h3>
      </div>
      <div className='industry_block'>
        <img src={agritech} alt="" className='transparency_img'/>
        <h3 className='industry_text'>AGRITECH</h3>
      </div>
      
    </div>
    </div>
  )
}

export default Success_parameters
