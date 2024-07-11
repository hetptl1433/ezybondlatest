import React from 'react'
import logo from "../../assets/cropped-final-logo.png"
import "../../styles/navbar.css"

export const Navbar = () => {
  return (
        <div className='navbar1 main-container'>
        <div>
            <img src={logo} height="60px" width="200px" className=''/>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <ul className=' navbar-ul'>
                <li className=''>About</li>
                <li>Products</li>
                <li>Download</li>
                <li>Contact Us</li>
                
            </ul>
            <div className="nav-right-content indurance-nav-right">
            <div className='navicon-div'>
            <i class="bi bi-newspaper"></i>
            </div>
            <button className='btn-navbar me-5 ms-2 mt-2'>
            NewsLetter 
            <i class="bi bi-arrow-up-right ms-2"></i>
          </button>
          </div>
        </div>
      
        </div>
    
  )
}
