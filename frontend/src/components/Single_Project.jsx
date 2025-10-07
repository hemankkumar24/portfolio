import React from 'react'

const Single_Project = ({ image, title, description, liveLink, githubLink }) => {
    return (
        <div className='rounded-xl border-2 border-[#18083d] hover:scale-102 hover:shadow-purple-950 hover:shadow-lg transition duration-300'>
            <img src={image} alt={title} className='rounded-t-xl' />
            <div className='bg-gradient-to-r from-violet-900 to-purple-300 to-50% bg-clip-text text-transparent normal pl-5 pt-5 text-3xl'>
                {title}
            </div>
            <div className='text-white/80 normal pl-5 pr-5 pb-2'>
                {description}
            </div>
            <div className='flex ml-5 my-2 pb-2 gap-3 normal tracking-tight'>
                {
                liveLink && 
                <div className='text-xl bg-green-600/20 py-1 px-3 rounded-md border-1 border-green-600 text-neutral-200 hover:bg-green-400/15 hover:text-neutral-50 hover:border-green-500 cursor-pointer'>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </div>
                }
                {
                githubLink && 
                <div className='text-xl bg-neutral-500/20 py-1 px-3 rounded-md border-1 border-neutral-500 text-neutral-200 hover:bg-neutral-400/15 hover:text-neutral-50 hover:border-neutral-400 cursor-pointer'>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        Github Link
                    </a>
                </div>
                }
            </div>
        </div>
    )
}

export default Single_Project