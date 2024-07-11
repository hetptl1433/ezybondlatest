import React from 'react'
import { WaveButton } from '../Common/WaveButton'
import WhyCard from './WhyCard';


const cards = [
    { icon: 'bi-award-fill', title: 'Continuous Quality Enhancement' },
    { icon: 'bi-cash', title: 'Market Leading Competitive Prices' },
    { icon: 'bi-stopwatch', title: 'On Time Efficient Delivery' },
    { icon: 'bi-globe-central-south-asia', title: 'Wide Dealer Network Across India' },
  ];

export const Whyus = () => {
  return (
    <section className='whyUs'>
    <div className='row whyUs-container'>
      <div className='col-md-5 whyus-left position-relative'>
        <div className='whyUs-overlay'></div>
        
        <WaveButton/>
        
      </div>
      <div className='col-md-7'>
        <h3>Why Choose Us?</h3>
        <div className='row ms-5 mt-5'>

          {cards.map((card, index) => (
              <WhyCard key={index} icon={card.icon} title={card.title} />
            ))}
        </div>
      </div>
    </div>
  </section>
  )
}
