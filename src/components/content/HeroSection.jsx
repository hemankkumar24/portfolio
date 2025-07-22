import React from 'react'
import hemank from '@photos/hemank.png'

const HeroSection = () => {
  return (
    <div className='my-25 flex justify-between font-light h-[55%] w-full overflow-x-hidden border-b-1 border-white'>
        <div className=' text-white coolvetica'>
            <div className='text-8xl'>Hey I'm Hemank!,</div>
            <div className='w-[72%] h-[50px] text-7xl leading-17'>Aspiring Machine Learning Engineer focused on ML, UX, and innovation.</div>
        </div>
        <img src={hemank} alt="" className='w-[400px] h-[400px] filter grayscale border-2  rounded-full backdrop-contrast-50 contrast-120' />
    </div>
  )
}

export default HeroSection