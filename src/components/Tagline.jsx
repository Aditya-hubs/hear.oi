// import React from 'react';
// import './Tagline.css'

// function Tagline() {
//   return (
//     <div className='pt-[130px] '> 
//         <h1>
//       <span>FEEL </span><span>WHAT YOU</span><span> HEAR.</span>
//     </h1>
//     <h3 className='color: rgb(247 254 231);'>Play around, Explore around and find out yourself.<br></br>
//    </h3>
//     </div>
    
//   );
// }

// export default Tagline;



import React, { useEffect, useRef } from 'react';
import './Tagline.css';

function Tagline() {
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
    <div className="tagline-container" ref={taglineRef}>
      <h1>
        <span>FEEL </span>
        <span>WHAT YOU</span>
        <span> HEAR.</span>
      </h1>
      <h3 className="tagline-subtitle">
        Play around, Explore around and find out yourself.
        <br />
      </h3>
    </div>
  );
}

export default Tagline;


