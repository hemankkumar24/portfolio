import React from 'react'
import Background from './components/background/Background'
import Navbar from './components/header/Navbar'
import HeroSection from './components/content/HeroSection'
import AboutMe from './components/content/AboutMe'
import DarkVeil from './assets/background/DarkVeil/DarkVeil'
import Skills from './components/content/Skills'


const App = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden grayscale">
          <DarkVeil />
        </div>
      </div>
    
      <div className="px-64 w-full min-h-screen overflow-x-auto">
        <Navbar />
        <HeroSection />
      </div>


      <div className="w-full h-[60vh] overflow-x-auto">
        <AboutMe />
      </div>

      <div className="w-full h-[200vh] overflow-x-auto">
        <Skills />
      </div>
    </>
  )
}

export default App