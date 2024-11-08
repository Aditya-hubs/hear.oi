
import React, { useEffect, useRef } from 'react';
import './Tagline.css';

function Review() {
  const taglineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('glow');
          } else {
            entry.target.classList.remove('glow');
          }
        });
      },
      { threshold: 1 }
    );

    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }

    return () => {
      if (taglineRef.current) {
        observer.unobserve(taglineRef.current);
      }
    };
  }, []);

  return (
    <div className="tagline-container mt-[100px] ml-[500px]" ref={taglineRef}>
      <h1>
        <span>Our </span>
        <span>Happy</span>
        <span> Customers.</span>
      </h1>
      <h3 className="tagline-subtitle">
       You can be one of them too :)
        <br />
      </h3>
    </div>
  );
}

export default Review;


