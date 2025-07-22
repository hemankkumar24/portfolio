import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white z-1 flex justify-between items-center py-5'>
        <div className='text-5xl text-white' id='mainName'>Hemank</div>
        <div className='flex header gap-10'>
            <div>
                About
            </div>
            <div>
                Skills  
            </div>
            <div>
                Projects
            </div>
        </div>
        <div className='text-xl header border-2 border-white p-2 px-3 rounded-xl mt-1'>
            Contact Me
        </div>
    </div>
  )
}

export default Navbar