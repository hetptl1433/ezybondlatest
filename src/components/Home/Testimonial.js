import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"



export default function Testimonial({index}) {
  
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <Slider {...settings} >
      <div>
       <div>
        <img src={logo1}></img>
       </div>
      </div>
      <div>
        <div >
          <img src={logo2}></img>
        </div>
      </div>
      <div>
        <div>
          <img src={logo3}></img>
        </div>
      </div>
      <div>
        <div>
          <img src={logo4}></img>
        </div>
      </div>
      <div>
      
      </div>
     
    </Slider>
  );
}