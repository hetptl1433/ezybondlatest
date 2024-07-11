import React from 'react';

const AboutSection = ({ handleClick, active, icon, text }) => {
  return (
    <div className={`d-flex align-items-start about-div ${active ? 'active' : ''}`} onClick={handleClick}>
      <i className={`bi ${icon} me-3`}></i>
      <p>{text}</p>
    </div>
  );
};

export default AboutSection;

