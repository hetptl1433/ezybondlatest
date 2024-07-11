import React from 'react';

const WhyCard = ({ icon, title }) => {
  return (
    <div className='col-md-6'>
      <div className='why-card'>
        <i className={`bi ${icon}`}></i>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default WhyCard;
