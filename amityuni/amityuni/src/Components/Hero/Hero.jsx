import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  const handleClick = () => {
    window.open("https://amity.edu/about-university.aspx", "_blank");
  };

  return (
    <div className="hero container">
      <div className="hero-text">
      <h1>Transforming Education, Empowering Futures</h1>
            <p>
                Join a world-class institution committed to academic excellence, innovation, and holistic development. Experience state-of-the-art facilities, expert faculty, and global opportunities.
            </p>
        <button className="btn" onClick={handleClick}>
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
