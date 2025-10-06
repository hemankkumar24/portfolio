import React from 'react'
import Single_Project from './Single_Project'

const Projects = () => {

    const projectsData = [
        {
            image: "images/projects/webrtc_tutorial.png",
            title: "WebRTC Tutorial",
            description: "Built a real-time video calling application using WebRTC, complete with a working backend and signaling server. Documented the entire backend workflow to help others learn and replicate the project easily.",
            liveLink: "https://webrtc-tutorial-ebon.vercel.app/",
            githubLink: "https://github.com/hemankkumar24/webrtc-tutorial"
        },
        {
            image: "images/projects/clear_report.png",
            title: "ClearReport",
            description: "ClearReport is a full-stack Retrieval-Augmented Generation (RAG) application designed to process health reports, extract structured data, and provide AI-powered insights in natural language.",
            liveLink: "https://clearreport-full-stack-rag-application-fpio27ihi.vercel.app/",
            githubLink: "https://github.com/hemankkumar24/clearreport-full-stack-rag-application"
        },
        {
            image: "images/projects/transformer_decoder.png",
            title: "Transformer From Scratch",
            description: "Built a decoder-only Transformer from scratch using TensorFlow, trained on 4,000+ SQuAD QA pairs with a custom tokenizer and manual attention pipeline.",
            liveLink: "",
            githubLink: "https://github.com/hemankkumar24/transformer-decoder-from-scratch"
        },
        {
            image: "images/projects/doodle_predictor.png",
            title: "CNN Doodle Predictor",
            description: "Built a deep learning-based doodle recognition system using CNNs and TensorFlow, trained on the Google Quick, Draw! dataset to accurately classify hand-drawn sketches.",
            liveLink: "",
            githubLink: "https://github.com/hemankkumar24/doodle-drawing-predictor"
        }
    ]

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-[#080021] -z-50 py-20" id="projects">
        <div className='text-center text-4xl lg:text-5xl pb-20 hero_text text-white'>
            My Work
        </div>
    
        <div className='px-5 md:px-10 2xl:px-50'>
            <div className='grid lg:grid-cols-2 gap-x-4 gap-y-4'> 
                {
                    projectsData.map((project, index) => (
                        <Single_Project
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Projects