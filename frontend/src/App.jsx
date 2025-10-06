import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false}
        closeOnClick pauseOnHover draggable theme="dark" />
    </>
  )
}

export default App
