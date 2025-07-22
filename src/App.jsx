import React from 'react'
import Background from './components/background/Background'
import Navbar from './components/header/Navbar'
import HeroSection from './components/content/HeroSection'
import AboutMe from './components/content/AboutMe'

const App = () => {
  return (
    <>
    <div className='px-64 h-screen w-screen overflow-x-auto'>
      <Background />
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
    </>
  )
}

export default App