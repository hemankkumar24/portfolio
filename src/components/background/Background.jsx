import React from 'react'
import DarkVeil from '../../assets/background/DarkVeil/DarkVeil'

const Background = () => {
  return (
    <>
    <div className='absolute top-0 right-0 h-screen inset-0 -z-10 overflow-hidden'>
        <div className='w-full h-full filter grayscale'>
        <DarkVeil/>
        </div>
    </div>
    </>
  )
}

export default Background