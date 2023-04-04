import React from 'react'
import './Card.css'
import image1 from './a.png'
import image2 from './b.png'
import image3 from './c.png'
import image4 from './d.png'
import image5 from './e.png'
import image6 from './f.png'

function Card() {
  return (
    <div className='main'>
      <div className='container'> 
        <div className='card'>
         <div className='bg'>
          <img src={image1} alt="logo" />
        </div>
          <h1>Real Time Trading</h1>
           <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
         <div className='card'>
          <div className='bg'>
            <img src={image2} alt="logo" />
        </div>
          <h1>Advanced Charts</h1>
            <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
          <div className='card'>
           <div className='bg'>
            <img src={image3} alt="logo" />
        </div>
          <h1>Enterprise Grade Security</h1>
           <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className='container'>
        <div className='card'>
         <div className='bg'>
          <img src={image4} alt="logo" />
        </div>
          <h1>ETFs and stocks</h1>
          <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
         <div className='card'>
          <div className='bg'>
           <img src={image5} alt="logo" />
          </div>
          <h1>Currencies & commodities</h1>
           <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
          <div className='card'>
           <div className='bg'>
            <img src={image6} alt="logo" />
          </div>
           <h1>Cryptocurrencies</h1>
            <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className='buton'>
        <button className="btn1">
                Get Started
        </button>
         <button className="btn2">Browse Features</button>
        </div>
    </div>
  )
}



export default Card
