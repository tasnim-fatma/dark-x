import React from 'react'
import './Get.css'
import pic from './j.png'
import pic1 from './k.png'
import pic2 from './l.png'


function Get() {
  return (
    <div className='get'>
    <div className='shade'>
      <div className='part'>
      <h1>How to get started</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum risus urna at. Curabitur non lectus eget magna.</p>
      <button className="bttn">Get Started</button>
      </div>
      <div className='block'>
        <div className='part1'>
        <div className='acc'>
        <button className='b'>1</button>
        <h1>Create an account</h1>
        <p>Lorem ipsum dolor sit amet, elit. 
           Imperdiet at at varius commodo 
           pharetra odio sollicitudin. </p>
        </div>
        <div className='bx'>
        <img src={pic} alt="logo" />
        </div>
        </div>

        <div className='part1'>
        <div className='acc'>
        <button className='b'>2</button>
        <h1>Create an account</h1>
        <p>Lorem ipsum dolor sit amet, elit. 
           Imperdiet at at varius commodo 
           pharetra odio sollicitudin. </p>
        </div>
        <div className='bx'>
        <img src={pic1} alt="logo" />
        </div>
        </div>


        <div className='part1'>
        <div className='acc'>
        <button className='b'>3</button>
        <h1>Create an account</h1>
        <p>Lorem ipsum dolor sit amet, elit. 
           Imperdiet at at varius commodo 
           pharetra odio sollicitudin. </p>
        </div>
        <div className='bx'>
        <img src={pic2} alt="logo" />
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Get

