import React, { useState } from 'react';
import './Buy.scss'; // Ensure you import your CSS for styling

const Buy = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
    }
  };

  return (
    <div className='ml-[750px]'>
    <button className={`order ${isAnimating ? 'animate' : ''}`} onClick={handleClick}>
      <span className="default">Buy Now</span>
      <span className="success">Purchased<svg viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>

      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
    </div>
  );
};

export default Buy;
