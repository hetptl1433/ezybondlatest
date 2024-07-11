import React from 'react'

export const FeatureCard = ({image,subtitle,title,animation}) => {
  return (
    <div className='col-md-4'>
    <div class="indurance-feature-item" data-aos={animation}>
      <div class="feature-image">
        <img src={image} alt="" />
      </div>
      <div class="feature-content">
        <span class="subtitle">{subtitle}</span>
        <h5 class="title">{title}</h5>
      </div>
    </div>
  </div>
  )
}
