import React, { useState } from 'react'
import shapedImg from "../../assets/shapedimg2.png"
import shapedimg2 from "../../assets/image3.png"
import aboutimage from "../../assets/aboutimage.jpg"
import ezysil from "../../assets/ezysil.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlider from './ProductSlider'

export const Products = () => {
    const [productActive,setProductActive] = useState(0);


    const handleProduct = ()=>{
      setProductActive(prevIndex => {
        const newIndex = prevIndex === 0 ? 5 - 1 : prevIndex - 1;
        console.log('New productActive:', newIndex);
        return newIndex;
      });
    }
    const handleProductIncrease = ()=>{
      setProductActive(prevIndex => {
        const newIndex = prevIndex === 4 ? 0 : prevIndex + 1;
        console.log('New productActive:', newIndex);
        return newIndex;
      });
    }
  
  return (
    <section className='products'>
    <div className='shaped-div'></div>
      <div className='row products-container'>
        <div className={`col-md-5  product-info ${productActive == 0 ? "activeproduct" : ""}`}>
          <div className='d-flex flex-column justify-content-center'>
          <h3>
            Our multipurpose Silicon Sealants.
          </h3>
          <h6 className='mt-3'>
            A range of sealants best suited for everyday uses.Select from 6 different options best suited for your specific needs.
          </h6>
          <div>
            <button className='product-btn mt-3'>
              All products
            </button>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <div className='arrow-div' onClick={()=>{handleProduct()}}><i class="bi bi-arrow-left"></i></div>
            <div className='arrow-div'  onClick={()=>{
             handleProductIncrease()
            }}><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div className={`col-md-5  product-info ${productActive == 1 ? "activeproduct" : ""}`}>
          <div className='d-flex flex-column justify-content-center'>
          <h3>
            Neutral Silicon Sealants.
          </h3>
          <h6 className='mt-3'>
          Sealants ideal for granite surfaces, sanitary uses & for glazing windows. A perfect option for surfaces that do not allow acetoxy sealants.
          </h6>
          <div>
            <button className='product-btn mt-3'>
              All products
            </button>
          </div>
          </div>
          <div className='d-flex mt-4'>
            <div className='arrow-div' onClick={()=>{handleProduct()}}><i class="bi bi-arrow-left"></i></div>
            <div className='arrow-div'  onClick={()=>{
             handleProductIncrease()
            }} ><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div className={`col-md-5  product-info ${productActive == 2 ? "activeproduct" : ""}`}>
          <div className='d-flex flex-column justify-content-center'>
          <h3>
            Weather Silicon Sealants
          </h3>
          <h6 className='mt-3'>
          Architectural grade sealants that easily cure in all temperatures & can be applied without pre-preparation on all kinds of surfaces.
          </h6>
          <div>
            <button className='product-btn mt-3'>
              All products
            </button>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <div className='arrow-div' onClick={()=>{handleProduct()}}><i class="bi bi-arrow-left"></i></div>
            <div className='arrow-div'  onClick={()=>{
             handleProductIncrease()
            }}><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div className={`col-md-5  product-info ${productActive == 3 ? "activeproduct" : ""}`}>
          <div className='d-flex flex-column justify-content-center'>
          <h3>
            Acrylic Silicon Sealants
          </h3>
          <h6 className='mt-3'>
          Gun grade sealants formulated from acrylic emulsions & provide smooth & perfect sealing that can be painted.
          </h6>
          <div>
            <button className='product-btn mt-3'>
              All products
            </button>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <div className='arrow-div' onClick={()=>{handleProduct()}}><i class="bi bi-arrow-left"></i></div>
            <div className='arrow-div'  onClick={()=>{
             handleProductIncrease()
            }}><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div className={`col-md-5  product-info ${productActive == 4 ? "activeproduct" : ""}`}>
          <div className='d-flex flex-column justify-content-center'>
          <h3>
            Cartdridge Packaging
          </h3>
          <h6 className='mt-3'>
          Perfect packaging choice for large-scale construction.  5 sealant options are available, each sealant provides a specific solution, so you can choose the best for you.
          </h6>
          <div>
            <button className='product-btn mt-3'>
              All products
            </button>
            </div>
          </div>
          <div className='d-flex mt-4'>
            <div className='arrow-div' onClick={()=>{handleProduct()}}><i class="bi bi-arrow-left"></i></div>
            <div className='arrow-div' onClick={()=>{
             handleProductIncrease()
            }}><i class="bi bi-arrow-right"></i></div>
          </div>
        </div>
        <div className='col-md-7 '>
          <div className='slider-div'>
          <ProductSlider index={productActive}/>
          </div>
        </div>
      </div>
  </section>
  )
}
