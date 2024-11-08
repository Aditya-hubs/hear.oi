import { FadeText } from '../assets/fade.jsx'
import piano from '../assets/pictures/piano-1.mp4'
import '../App.css'
import React ,{ useEffect, useRef } from 'react'


function Intro(){

   const videoref = useRef(null);
   useEffect(() => {
    videoref.current.playbackRate = 2;
   },[]);

    return (
       
        <div className='flex  w-full gap-96 mb-[70px]	'>
        <div className="text-left mt-60 font-bold ml-5 ">    
          <FadeText
            direction="up"
            className="text-8xl text-left text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
            text={
              <>
                Connecting <br />you with
                the <br />songs you love.
              </>
            }
            framerProps={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.5 } }, 
            }}
          />
        </div> 
        <div className='mt-400'>
  <video ref={videoref}
  className="piano mt-40" autoPlay loop={false}  muted>
    <source src={piano} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        </div>
    )
}

export default Intro;