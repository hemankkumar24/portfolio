import React from 'react'

const Skills = () => {
    const noise = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOCIgdHlwZT0iZnJhY3RhbE5vaXNlIiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4=")`;

    return (
        <div className='h-full bg-black text-white pt-40 px-64'>
            <div className='text-5xl contactme text-center'>SS KK I LL LL SS</div>
                <div className='flex pt-10 justify-evenly gap-5'>
                <div className='flex flex-col'>
                    <div className='text-3xl pt-30 w-full contactme text-center'>LANGUAGES</div>
                    <div
                    className="w-[20vw] h-[40vh] border-2 border-white relative overflow-hidden bg-repeat opacity-100 rounded-xl p-5 header flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: noise
                    }}>
                    <p className='text-xl'>Python</p>
                    <p className='text-xl'>C++</p>
                    <p className='text-xl'>C</p>
                    <p className='text-xl'>HTML</p>
                    <p className='text-xl'>CSS</p>
                    <p className='text-xl'>JAVASCRIPT</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-3xl pt-30 w-full contactme text-center'>FRAMEWORKS</div>
                    <div
                    className="w-[20vw] h-[40vh] border-2 border-white relative overflow-hidden bg-repeat opacity-100 rounded-xl p-5 header flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: noise
                    }}>
                    <p className='text-xl'>Flask</p>
                    <p className='text-xl'>FastAPI</p>
                    <p className='text-xl'>TensorFlow</p>
                    <p className='text-xl'>Streamlit</p>
                    <p className='text-xl'>LangChain</p>
                    <p className='text-xl'>ReactJS</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-3xl pt-30 w-full contactme text-center'>LIBRARIES</div>
                    <div
                    className="w-[20vw] h-[40vh] border-2 border-white relative overflow-hidden bg-repeat opacity-100 rounded-xl p-5 header flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: noise
                    }}>
                    <p className='text-xl'>NumPy</p>
                    <p className='text-xl'>Pandas</p>
                    <p className='text-xl'>Matplotlib</p>
                    <p className='text-xl'>Scikit-learn,</p>
                    <p className='text-xl'>HuggingFace</p>
                    <p className='text-xl'>Transformers</p>
                    </div>
                </div>
            </div>
            <div className='pt-10 text-3xl w-full contactme text-center'>ARTIFICIAL INTEL<span className='coolvetica font-extrabold'>L</span>IGENCE AND MACHINE LEARNING</div>
            <div className='flex pt-10 justify-evenly gap-5'>
                <div className='flex flex-col'>
                    <div className='text-3xl w-full contactme text-center'>CORE ML & DL</div>
                    <div
                    className="w-[30vw] h-[40vh] border-2 border-white relative overflow-hidden bg-repeat opacity-100 rounded-xl p-5 header flex flex-col items-center justify-center text-center"
                    style={{
                        backgroundImage: noise
                    }}>
                    <p className='text-xl'>EDA</p>
                    <p className='text-xl'>Regression</p>
                    <p className='text-xl'>Classification</p>
                    <p className='text-xl'>ANN CNN YOLO RNN</p>
                    <p className='text-xl'>Attention Models</p>
                    <p className='text-xl'>Model Evaluation</p>
                    <p className='text-xl'>Transfer Learning</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-3xl w-full contactme text-center'>GEN AI & L<span className='coolvetica font-extrabold'>L</span>MS</div>
                    <div
                    className="w-[30vw] h-[40vh] border-2 border-white relative overflow-hidden bg-repeat opacity-100 rounded-xl p-5 header flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: noise
                    }}>
                    <p className='text-xl'>RAG</p>
                    <p className='text-xl'>Prompt Engineering</p>
                    <p className='text-xl'>Context Memory</p>
                    <p className='text-xl'>Vector Search</p>
                    <p className='text-xl'>LLM Chaining</p>
                    <p className='text-xl'>Transformers</p>
                    <p className='text-xl'>Fine-Tuning</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills