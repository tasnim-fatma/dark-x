import React from 'react'
import './Footer.css'
import cms from './cm.png'

function Footer() {
  return (
    <div className='footer'>
     <div className='divide'>
      <div className='page'>
        <h3>Pages</h3>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Blog</p>

        <div className='post'>
          <p>Blog Post</p>
          <img src={cms} alt="logo" />
        </div>

        <p>Pricing</p>
        <div className='post'>
          <p>Pricing Singles</p>
           <img src={cms} alt="logo" />
        </div>
      </div>

        <div className='page'>
          <h3>Utility Pages</h3>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Blog Post</p>
          <p>Pricing</p>
        </div>

        <div className='pg'>
            <h3>Subscribe to our newsletter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purussit amet luctus.</p>
            
            <div className='input'>
                <input type='text' placeholder=' Your email address' />
                <button>Subscribe</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
