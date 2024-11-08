import React from 'react'
import './App.css'
import Head from './components/Head'
import Foot from './components/Foot.jsx'
import Intro from './components/Intro.jsx'
// import Mus from './components/Mus.jsx'
import Astro from './components/Astro.jsx'
import Tagline from './components/tagline.jsx'
import Carousel from './components/Carousel.jsx'
import Buy from './components/Buy.jsx'
import Model from './components/HeadphoneModel.jsx'
import Review from './components/Review.jsx'

function App() {

  return (
  <div> 
  <Head />
  <Intro />
  <Astro />
  <Tagline />
  {/* <Mus /> */}
  {/* <Mus /> */}
  {/* <Mus /> */}
  <Model />
  <Buy />
  <Review />
  <Carousel />
  <Foot  />
  </div>
   
  )
}

export default App
