import React from 'react'

const AboutMe = () => {
    return (
        <div className='h-full bg-black text-white px-64 py-0'>
            <div className='flex flex-col justify-around after:block before:w-25 before:h-[2px] before:bg-white before:mb-10 before:mx-auto'>
                <div className='text-5xl pt-25 coolvetica'>
                    About <span className='grandeItalic'> Me </span>
                </div>
                <div className='text-xl text-zinc-300 pt-5'>
                    My journey into technology began in 6th grade, sparked by a fascination with Discord bots. Seeing how code could bring interactive tools to life ignited a passion for development that has guided my path ever since. This initial curiosity evolved into a dedicated pursuit of software engineering and eventually led me to the captivating field of Artificial Intelligence, where I was profoundly drawn to machine learning's potential to solve complex, real-world problems.
                    <br /><br />
                    This focus now drives my academic and practical work. As a Computer Science student specializing in AI and Machine Learning with a 9.61 GPA, I channel this dedication into building robust applications. I have applied my skills in Python, TensorFlow, and LangChain to hands-on projects, such as architecting a Transformer model from scratch and developing a full-stack, AI-powered resume analysis platform.
                    <br /><br />
                    I am always eager to tackle new challenges and am currently diving into LangGraph and the MERN stack to further enhance my full-stack and advanced AI development capabilities.
                </div>
            </div>
        </div>
    )
}

export default AboutMe