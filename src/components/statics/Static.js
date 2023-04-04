import React from 'react'
import './Static.css'
import image from './1.png'

function Static() {
  return (
    <div className='static'>
    <div className='image'>
      <img src={image} alt="logo" />
      </div>
    </div>
  )
}

export default Static
