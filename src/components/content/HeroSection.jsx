import React from 'react'
import hemank from '@photos/hemank.png'

const HeroSection = () => {
  return (
    <div className='my-20 flex justify-between font-light h-[60vh] w-full overflow-x-hidden border-white items-center'>
        <div className=' text-white coolvetica space-y-5'>
            <div className='text-8xl'>Hey I'm <p className='mainName text-8xl'>Hemank!,</p></div>
            <div className='text-3xl text-white coolvetica w-[60%]'>
              Aspiring <span className='grandeItalic'>Machine Learning Engineer</span> passionate about <span className='grandeItalic'>ML, UX, and innovation.</span>
            </div>
        </div>
      
        <img src={hemank} alt="" className='w-[400px] h-[400px] filter grayscale border-2 pt-1 rounded-full backdrop-contrast-50 contrast-120 border-b-white border-l-white border-t-0 border-r-0'/>
    </div>
  )
}

export default HeroSection