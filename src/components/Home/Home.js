import React, { useState } from 'react'
import { Navbar } from '../Common/Navbar'
import "../../styles/Home.css"

import "../../styles/Cards.css"
import Testimonial from './Testimonial'
import { Cursor } from '../Cursor'
import { Footer } from '../Footer'
import { Features } from './Features'
import { About } from './About'
import { Whyus } from './Whyus'
import { Products } from './Products'
import { CtaSection } from '../Common/CtaSection'
import { Banner } from './Banner'



export const Home = () => {

 
  const sliderSettings = { className: "slider variable-width", infinite: true, speed: 1000, slidesToShow: 3, swipeToSlide: true, autoplay: true, arrows: false, autoplaySpeed: 8000, responsive: [{ breakpoint: 1100, settings: { slidesToShow: 3, }, }, { breakpoint: 985, settings: { slidesToShow: 2, }, }, { breakpoint: 410, settings: { arrows: false, slidesToShow: 1, }, },], };

  
 
  return (
    <div className='screen'>
      <Cursor/>
      <Navbar />
      <Banner/>

      <Features/>
      <Whyus/>
     <About/>
     {/* <CtaSection/> */}
     

      <Products/>

      <section className='clients'>
       <h3>Our Clients</h3>
       <h6>How Our Clients Trust Us</h6>
       <div className='mt-5'>
          <Testimonial/>
          </div>

      </section>

      <Footer/>





    </div>
  )
}
