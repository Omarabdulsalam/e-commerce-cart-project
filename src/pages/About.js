import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-intro">
        Welcome to SneakerHub—your go-to platform for the hottest sneakers from the past, present, and future.
        Founded in 2024 and based in Lebanon, we deliver authentic kicks and the latest releases straight to your doorstep—because you deserve better.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>MISSION</h3>
          <p>
            Our mission is simple: to bring you premium sneakers at fair prices while delivering outstanding customer service. We’re here to make your sneaker shopping experience unforgettable.
          </p>
        </div>

        <div className="about-card">
          <h3>VISION</h3>
          <p>
            We aim to set the standard for sneaker culture—combining authenticity, exclusivity, and community. Our vision is to become the number one destination for sneaker lovers worldwide.
          </p>
        </div>

        <div className="about-card">
          <h3>AUTHENTICITY</h3>
          <p>
            Every pair we sell undergoes strict quality checks to guarantee authenticity. We stand behind every product so you can shop with confidence.
          </p>
        </div>

        <div className="about-card">
          <h3>A-Z GUARANTEE</h3>
          <p>
            Our guarantee ensures that if any product falls short of expectations, we’ll make it right—because your satisfaction matters most to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
