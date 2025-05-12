import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'

const App = () => {
  const[playState, setPlayState]=useState(false);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div className="app-wrapper">
            <Hero/>
            <div className="container">
              <Title subTitle='OUR PROGRAM' title='What We Offer'/>
              <Programs/>
              <About setPlayState={setPlayState} />
              <Title subTitle='Gallery' title='Campus Photos'/>
              <Campus/>
              <Title subTitle='TESTIMONIALS' title='What Students Says'/>
              <Testimonials/>
              <Title subTitle='Contact Us' title='Get in Touch'/>
              <Contact/>
            </div>
          </div>
        } />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </Router>
  )
}

export default App