import React from 'react'
import Background from './components/background/Background'
import Navbar from './components/header/Navbar'
import HeroSection from './components/content/HeroSection'

const App = () => {
  return (
    <>
    <div className='px-64 h-screen'>
      <Background />
      <Navbar />
      <HeroSection />
    </div>
    </>
  )
}

export default App