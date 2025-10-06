import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Hero = () => {
  return (
    <div className="h-full bg-cover bg-center -z-50"
    style={{ backgroundImage: "url('/images/hero_background.jpg')" }}
    >
        {/* Hero Text Hello */}
        <div className='w-full h-full'>
            <h1 className='hero_text absolute text-transparent text-[300px] py-20 opacity-50 left-1/2 -translate-x-1/2
                           z-10 mix-blend-overlay'
                style={{WebkitTextStroke:'4px white'}}>
                Hello
            </h1>

            {/* Navbar */}
            <div className='text-white text-xl flex py-5 justify-between hero_text font-extralight cursor-pointer'>
                <div className='px-50 opacity-80 hover:opacity-100 z-20'>
                    Hemank
                </div>
                <div className='w-[40%] flex justify-around cursor-pointer z-20 -space-x-50'>
                    <h1 className='opacity-80 hover:opacity-100' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        Projects
                    </h1>
                    <h1 className='opacity-80 hover:opacity-100' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        About
                    </h1>
                    <h1 className='opacity-80 hover:opacity-100' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact
                    </h1>
                </div>
                <div className='px-50 opacity-80 hover:opacity-100 z-20'>
                     <a href="resume/Hemank_Resume.pdf" target="_blank">
                        Resume
                    </a>
                </div>
            </div>

            {/*Hero Text Here*/}
            <div className='px-50 pt-50 text-white normal_bold'>
                <div className='flex justify-between items-center'>
                    <div className='w-[60%]'>
                        <div className='text-6xl'>
                            I am Hemank!
                        </div>
                        <div className='text-7xl bg-gradient-to-r from-violet-950 to-purple-300 bg-clip-text text-transparent'>
                            Full Stack + AI/ML Developer
                        </div>
                        {/*Sub Hero Text*/}
                        <div className='text-2xl text-white normal py-5 w-[80%]'>
                            I have hands-on experience in building end-to-end solutions from developing and training AI/ML models to seamlessly integrating them into modern, responsive web platforms. My skill set covers both frontend and backend development, enabling me to create dynamic user experiences powered by smart, data-driven technologies.
                        </div>
                    </div>

                    {/*Hero Image*/}
                    <div className='w-120 rounded-b-full rounded-l-full object-bottom bg-gradient-to-t from-indigo-950 to-indigo-200/75 border-b-5 border-b-white'>
                        <img src="images/hemank_nobg.png" alt="hemank_photo" className='rounded-full filter drop-shadow-2xl'/>
                    </div>
                </div>
            </div>

            <div className='text-white font-extralight h-auto w-full mt-25 flex justify-center gap-5 pb-20'>
                <div className='border-1 p-1 rounded-md hover:text-black hover:bg-white cursor-pointer hover:scale-102 transition duration-300'>
                    <a href="mailto:hemankkumar24@gmail.com" target='_blank'>
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
                <div className='border-1 p-1 rounded-md hover:text-black hover:bg-white cursor-pointer hover:scale-102 transition duration-300'>
                    <a href="https://linkedin.com/in/hemankkumar24" target='_blank'>
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
                <div className='border-1 p-1 rounded-md hover:text-black hover:bg-white cursor-pointer hover:scale-102 transition duration-300'>
                    <a href="https://github.com/hemankkumar24" target='_blank'>
                        <Github className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero