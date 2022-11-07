import React from 'react'
import './Success_parameters.css'
import  TRANSPARENCY from '../Assets/TRANSPARENCY.svg'
import  COLLABORATION from '../Assets/COLLABORATION.svg'
import  INNOVATION from '../Assets/INNOVATION.svg'
import  AGILE_METHOD from '../Assets/AGILE_METHOD.svg'
import  PROJECT_STATUS from '../Assets/PROJECT_STATUS.svg'
import  TRANSPWELL_COMMUNICATIONARENCY from '../Assets/WELL_COMMUNICATION.svg'
import  DEDECATED_TEAM from '../Assets/DEDECATED_TEAM.svg'
import  CLIENT_INVOLMENT from '../Assets/CLIENT_INVOLMENT.svg'

const Success_parameters = () => {



  return (
    <div className='main_container'>
<h1 className='main_heading'>MEASUREMENT TO OUR SUCCESS</h1>
    
    <div className='success_parameter_container'>
      <div className='transperency_block'>
        <img src={TRANSPARENCY} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>TRANSPARENCY AND RELIABILITY</h3>
      </div>

      <div className='transperency_block'>
        <img src={COLLABORATION} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>ONSITE COLLABORATION</h3>
      </div>

      <div className='transperency_block'>
        <img src={INNOVATION} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>INNOVATION AT WORK</h3>
      </div>

      <div className='transperency_block'>
        <img src={AGILE_METHOD} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>AGILE METHODOLOGY</h3>
      </div>

      <div className='transperency_block'>
        <img src={PROJECT_STATUS} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>REAL TIME PROJECT STATUS</h3>
      </div>

      <div className='transperency_block'>
        <img src={TRANSPWELL_COMMUNICATIONARENCY} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>WELL STRUCTURED COMMUNICATION</h3>
      </div>
      <div className='transperency_block'>
        <img src={DEDECATED_TEAM} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>CLIENT'S INVOLVEMENT IN EACH MILESTONE</h3>
      </div>
      <div className='transperency_block'>
        <img src={CLIENT_INVOLMENT} alt="" className='transparency_img'/>
        <h3 className='transperency_text'>DEDICATED TEAM</h3>
      </div>
      
    </div>
    </div>
  )
}

export default Success_parameters
