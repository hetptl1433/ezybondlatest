import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import ezysil from "../../assets/ezysil.png"
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"

export default function ProductSlider({index}) {
    const sliderRef = useRef(null); 
    useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
      }, [index]);
  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} ref={sliderRef}>
      <div>
       <div className="product-img-div">
        <img src={ezysil} className="product-img"></img>
       </div>
      </div>
      <div>
      <div className="product-img-div">
        <img src={product1} className="product-img"></img>
       </div>
      </div>
      <div>
      <div className="product-img-div">
        <img src={product2} className="product-img"></img>
       </div>
      </div>
      <div>
      <div className="product-img-div">
        <img src={product3} className="product-img"></img>
       </div>
      </div>
      <div>
      <div className="product-img-div">
        <img src={product4} className="product-img"></img>
       </div>
      </div>
     
    </Slider>
  );
}