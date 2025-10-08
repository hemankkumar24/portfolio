import React, { useEffect, useRef } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const main = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(".object_navbar", {
            y: 0,
            opacity: 0.80,
            delay: 0.25,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            });

            tl.to(".object_left_hero", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            }, "<0.5");

            tl.to(".object_right_hero", {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            }, "<");

            tl.to(".object_bottom", {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            }, "<0.5");
        }, main);

  return () => ctx.revert();
}, []);


    return (
        <div className="min-h-screen bg-cover bg-center -z-50"
            style={{ backgroundImage: "url('/images/hero_background.webp')" }}
        >
            {/* Hero Text Hello */}
            <div className='w-full h-full' ref={main}>
                <h1 className='hero_text absolute text-transparent text-[50vw] sm:text-[250px] 2xl:text-[300px] py-5 lg:py-20 opacity-50 left-1/2 -translate-x-1/2
                           z-10 mix-blend-overlay'
                    style={{ WebkitTextStroke: '4px white' }}>
                    Hello
                </h1>

                {/* Navbar */}
                <div className='text-white text-xl flex py-5 justify-between hero_text font-extralight cursor-pointer'>
                    <div className='object_navbar opacity-0 translate-y-[-15px] px-5 md:px-10 2xl:px-50 hover:opacity-100 z-20'>
                        Hemank
                    </div>
                    <div className='w-[40%] lg:flex justify-around cursor-pointer z-20 hidden  -space-x-35'>
                        <h1 className='object_navbar opacity-0 translate-y-[-15px] hover:opacity-100' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            Projects
                        </h1>
                        <h1 className='object_navbar opacity-0 translate-y-[-15px] hover:opacity-100' onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            About
                        </h1>
                        <h1 className='object_navbar opacity-0 translate-y-[-15px] hover:opacity-100' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact
                        </h1>
                    </div>
                    <div className='object_navbar opacity-0 translate-y-[-15px] px-5 md:px-10 2xl:px-50 hover:opacity-100 z-20'>
                        <a href="resume/Hemank_Resume.pdf" target="_blank">
                            Resume
                        </a>
                    </div>
                </div>

                {/*Hero Text Here*/}
                <div className='px-5 md:px-10 2xl:px-50 pt-40 lg:pt-50 text-white normal_bold'>
                    <div className='flex flex-col text-center lg:text-left lg:flex-row justify-between items-center'>
                        <div className='object_left_hero opacity-0 translate-x-[-15px] lg:w-[60%]'>
                            <div className='text-3xl sm:text-5xl xl:text-6xl'>
                                I am Hemank!
                            </div>
                            <div className='text-4xl sm:text-6xl xl:ext-7xl bg-gradient-to-r from-violet-950 to-purple-300 bg-clip-text text-transparent'>
                                Full Stack + AI/ML Developer
                            </div>
                            {/*Sub Hero Text*/}
                            <div className='text-2xl text-white normal py-5 w-[95%] xl:w-[80%]'>
                                I have hands-on experience in building end-to-end solutions from developing and training AI/ML models to seamlessly integrating them into modern, responsive web platforms. My skill set covers both frontend and backend development, enabling me to create dynamic user experiences powered by smart, data-driven technologies.
                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <div className='text-xl w-[161px] bg-purple-500/10 py-1 px-3 rounded-md border-1 border-violet-950 hover:bg-purple-300/10 hover:border-violet-900 cursor-pointer'>
                                    <a href="resume/Hemank_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                        <div className='bg-gradient-to-r from-violet-950 to-purple-300 hover:to-white transition duration-200 bg-clip-text text-transparent'>
                                            Open Resume
                                        </div>
                                    </a>
                                </div>
                                <div className='text-xl mx-2 w-[115px] bg-emerald-600/10 py-1 px-3 rounded-md border-1 border-green-950 hover:bg-emerald-300/10 hover:border-green-900 cursor-pointer' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                    <div className='bg-gradient-to-r from-green-950 to-emerald-300 hover:to-emerald-300 transition duration-200 bg-clip-text text-transparent'>
                                        Let’s Talk
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Hero Image*/}
                        <div className='object_right_hero opacity-0 translate-x-[15px] w-[90%] sm:w-100 md:w-120 rounded-full lg:rounded-tr-none lg:rounded-l-full object-bottom bg-gradient-to-t from-indigo-950 to-indigo-200/75 border-b-5 border-b-white mt-15 lg:mt-0'>
                            <img src="images/hemank_nobg.webp" alt="hemank_photo" className='rounded-full filter drop-shadow-2xl' />
                        </div>
                    </div>
                </div>

                <div className='object_bottom opacity-0 translate-y-[-15px] text-white font-extralight h-auto w-full mt-25 flex justify-center gap-5 pb-20'>
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