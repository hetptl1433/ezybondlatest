import React from 'react'
import logo from "../assets/cropped-final-logo.png"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='row '>
            
            <div className='col-md-4'>
              <h3>Navigation</h3>
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div className='col-md-8'>
                <div className='footer-logo'><img src={logo}></img></div>
                <h3>Ezybond Industries Pvt. Ltd.</h3>
                <p>Plot No. 260/1, Phase - 1, G.I.D.C, Wadhwan, Surrendranagar - 363035. Gujarat, India</p>
                <div className='mb-2'>
                  <h3>Contact:</h3>
                  <a href='tel: +91 94285 71005'>+91 94285 71005</a>
                </div>
                <div className='mb-2'>
                <h3>Inquiry:</h3>
                  <a href='maito:info@ezybond.in'>info@ezybond.in</a>
                </div>
            </div>
        </div>
    </div>
  )
}
