import React, { useState } from 'react'
import about1 from "../../assets/aboutimage1.jpg"
import AboutSection from './AboutSection';


const sections = [
    { icon: 'bi-gear-fill', text: 'ABOUT US', content: [
        'We have commenced and established a company named EZYBOND industries.',
        'Our main product is silicon sealant (Adhesive in multipurpose use) with the brand name EZYBOND.',
        'It is a high-performance sealant for ACP, Metal, Ceramic, Wood, Glass, Door, Aluminium.',
      ] 
    },
    { icon: 'bi-tools', text: 'MULTIPURPOSE SEALANTS', content: [
        'Need to fix your fish aquarium? Attaching a mirror on your wooden cupboard? Be it household or commercial usage, we have a sealant that serves your purpose.',
        'Our specialized range of sealants is a result of our innovative product development. These sealants have proved effective for a variety of uses ranging from automotive, construction, glass, wet surfaces, high temperatures & all weather conditions.',
        'Explore our series of highly specialized products & find a perfect one to fetch optimum utility & great results!',
      ] 
    },
    { icon: 'bi-star-fill', text: 'QUALITY PRODUCTION', content: [
        'At EZYBOND Industries, we adhere to a rigorous system of quality control for all our raw materials. Our process begins with thorough inward testing, ensuring that every batch of material meets our stringent standards.',
        'Each raw material undergoes comprehensive analysis and evaluation based on specific quality control guidelines tailored to its characteristics.',
        'This meticulous attention to detail guarantees that only the highest quality materials are used in our silicon sealant production.',
      ] 
    }
  ];

export const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(index);
        
      };
  return (
    <section className='about'>
    <div className='about-overlay'>

    </div>
    <h6>WHO WE ARE</h6>
    <h3>EXCELLENCE IN SILICON SEALANTS</h3>
    <div className='row mt-5'>
      <div className='col-md-3'>
        <div className='d-flex flex-column'>
        {sections.map((section, index) => (
              <AboutSection 
                key={index} 
                handleClick={() => setActiveIndex(index)} 
                active={activeIndex === index} 
                icon={section.icon} 
                text={section.text} 
              />
            ))}
         
        </div>
      </div>
      <div className='col-md-5'>
      {sections.map((section, index) => (
            <div key={index} className={`about-info ${activeIndex === index ? 'active' : ''}`}>
              <h4>{section.text}</h4>
              <div className='mt-4'>
                {section.content.map((item, idx) => (
                  <div key={idx} className='d-flex align-items-start'>
                    <i className="bi bi-check2-square me-3"></i>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className='col-md-4 position-relative'>
        <div className='about-img'><img src={about1}></img></div>
        <div className='img-back-div'></div>
      </div>
    </div>
  </section>
  )
}
