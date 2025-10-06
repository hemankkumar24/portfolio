import React from 'react'
import Contact from './Contact'

const AboutMe = () => {
  return (
    <div className=" bg-[#14112c] bg-cover bg-center py-20" id="about">
        <div className='text-center text-5xl pb-20 hero_text text-white'>
            About Me
        </div>

        <div className='px-50'>
            <div className='grid grid-cols-2 gap-x-10 gap-y-4'>
                <div className='bg-[#12062c] border-2 border-[#1f0b4e] rounded-xl px-10 py-5 hover:scale-102 transition duration-300'>
                    <div className='text-4xl bg-gradient-to-r to-violet-950 from-purple-300 bg-clip-text text-transparent normal_bold'>
                        The Origins
                    </div>
                    <div className='text-white normal mt-2 text-xl border-l-2 border-purple-50 pl-4'>
                        My journey into the world of technology began in the 6th grade with a fascination for Discord bots. Instead of simply using them, I became intensely curious about their inner workings, which immediately led me down a path of self-teaching. My first major project was an ambitious attempt to create a custom chatbot using Stack Overflow as my primary mentor, a bot capable of retrieving user information and hosting a simple, luck-based game. This early dive into problem-solving cemented my passion for coding. Along with that, my creative interests developed inspired by anime edits, I started video editing in the 8th grade and today, I bring over five years of experience utilizing Adobe After Effects to create compelling and dynamic visual content, effectively blending technical skill with creative design.
                    </div>
                    <div className='text-white normal mt-2 text-xl border-l-2 border-purple-50 pl-4'>
                        I am currently maintaining a 9.61 GPA, reflecting my dedication to academic excellence. Technically, I am fluent in full-stack development and have thoroughly explored the fields of AI and Machine Learning in depth, with a particular focus on Deep Learning and Generative AI. This comprehensive skill set allows me to approach projects from foundational architecture to cutting-edge intelligence and compelling visual delivery.
                    </div>
                </div>
                <div className='text-white'>
                    <div className='bg-[#12062c] border-2 border-[#1f0b4e] rounded-xl px-10 py-5 h-full hover:scale-102 transition duration-300'>
                        <div className='text-4xl bg-gradient-to-r to-violet-950 from-purple-300 bg-clip-text text-transparent normal_bold'>
                            Experiences
                        </div>
                        <div className='border-l-2 border-purple-50 pl-4'>
                            <div className='text-white mt-2 flex justify-between w-full'>
                                <div className='normal_bold text-2xl bg-gradient-to-r from-violet-800 
                                to-violet-200 text-transparent bg-clip-text'>IEEE CS MUJ</div>
                                <div className='normal italic opacity-50 text-xl'>Present</div>
                            </div>
                            <div className='text-white hero_text text-xl leading-tight'>
                                Head of Technical Projects
                            </div>
                            <div className='normal leading-tight w-[80%]'>
                                As the Head of Technical Projects, I am responsible for overseeing the planning, execution, and successful delivery of all technical initiatives and events organized by the team.
                            </div>
                        </div>

                        <div className='border-l-2 border-purple-50 pl-4'>
                            <div className='text-white mt-4 flex justify-between w-full'>
                                <div className='normal_bold text-2xl bg-gradient-to-r from-violet-800 to-violet-200 text-transparent bg-clip-text'>Manipal University Jaipur</div>
                                <div className='normal italic opacity-50 text-xl'>Present</div>
                            </div>
                            <div className='text-white hero_text text-xl leading-tight'>
                                Class Coordinator
                            </div>
                            <div className='normal leading-tight w-[80%]'>
                                Collaborating with the Class Representatives to ensure smooth and effective communication between faculty and students. This role involves working closely with both peers and professors to maintain a well-organized academic environment and support collective student needs.
                            </div>
                        </div>

                        <div className='border-l-2 border-purple-50 pl-4'>
                            <div className='text-white mt-4 flex justify-between w-full'>
                                <div className='normal_bold text-2xl bg-gradient-to-r from-violet-800 to-violet-200 text-transparent bg-clip-text'>IEEE CS MUJ</div>
                                <div className='normal italic opacity-50 text-xl'>Nov 2024 - May 2025</div>
                            </div>
                            <div className='text-white hero_text text-xl leading-tight'>
                                Junior Technical Working Team
                            </div>
                            <div className='normal leading-tight w-[80%]'>
                                As a member of the Junior Technical Working Team, I contribute to the planning, coordination, and execution of various technical events and initiatives.
                            </div>
                        </div>
                        
                        <div className='border-l-2 border-purple-50 pl-4'>
                            <div className='text-white mt-4 flex justify-between w-full'>
                                <div className='normal_bold text-2xl bg-gradient-to-r from-violet-800 to-violet-200 text-transparent bg-clip-text'>IEEE GRSS MUJ</div>
                                <div className='normal italic opacity-50 text-xl'>Nov 2024 - Apr 2025</div>
                            </div>
                            <div className='text-white hero_text text-xl leading-tight'>
                                Junior Technical Working Team
                            </div>
                            <div className='normal leading-tight w-[84%]'>
                                Was a member of the Junior Technical Working Team in the Geoscience and Remote Sensing Society of Manipal University Jaipur (IEEE GRSS MUJ)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe