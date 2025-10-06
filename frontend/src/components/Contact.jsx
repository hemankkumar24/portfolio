import React, { useState } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const BACKEND = import.meta.env.VITE_BACKEND;

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: Name,
        email: Email,
        message: Message
      };
      setName('')
      setEmail('')
      setMessage('')

      try {
          const res = await fetch(`${BACKEND}/contact_submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          const result = await res.json();
          console.log(result);
          if (result.success) {
            toast.success(result.msg); 
          } else {
            toast.error(result.msg); 
          }
        } catch (err) {
          toast.error('Something went wrong!');
        }
      };

  return (
    <div className="h-full text-3xl py-20 bg-[#080021]" id="contact">
        <div className='text-center text-5xl pb-20 hero_text text-white'>
            Contact
        </div>

        <div className='px-5 md:px-10 2xl:px-50'>
          <div className='grid xl:grid-cols-2 gap-x-4'>
            <div>
              <div className='flex flex-col w-[100%] xl:w-[95%]'>
                <div className='text-4xl w-full normal_bold text-white'>
                    Get in Touch
                </div>
                <div className='text-lg lg:text-2xl lg:w-full opacity-50 normal_bold bg-gradient-to-l to-10% from-neutral-600 to-white text-transparent bg-clip-text'>
                    Have questions or something exciting in mind? Let’s make it happen.
                </div>
                <div className='w-full h-20 bg-neutral-50/10 outline-0 rounded-xl p-2 text-sm md:text-xl text-white mt-5 flex flex-col justify-center mb-5 xl:mb-0'>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <div className='hidden md:block'>
                        <Mail className="w-full h-full pr-2" />
                      </div>
                      <div>
                        <div className='normal_bold text-2xl'>
                          Email
                        </div>
                        <div className='normal text-white/50'>
                          hemankkumar24@gmail.com
                        </div>
                      </div>
                    </div>
                    <div>
                      <a href="mailto:hemankkumar24@gmail.com" target='_blank'>
                        <ArrowUpRight className="w-[95%] h-[95%] rounded-full bg-neutral-50/10  hover:text-neutral-700 hover:bg-neutral-300 cursor-pointer transition duration-200 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-neutral-600/15 p-3 rounded-xl hover:scale-102 transition duration-300'>
              <form onSubmit={handleSubmit}>
                <input type="text" className='w-full h-20 bg-neutral-50/10 outline-0 rounded-xl p-5 text-xl text-white normal' value={Name} onChange={(e)=> {setName(e.target.value)}} placeholder='Name'/>
                <input type="email" className='w-full h-20 bg-neutral-50/10 outline-0 rounded-xl p-5 text-xl text-white normal mt-2' value={Email} onChange={(e)=> {setEmail(e.target.value)}} placeholder='Email'/>
                <textarea
                  className="w-full h-100 bg-neutral-50/10 outline-0 rounded-xl p-5 text-xl text-white normal mt-2 resize-none"
                  placeholder="Message"
                  value={Message} onChange={(e)=> {setMessage(e.target.value)}} 
                ></textarea>
                <button className='text-white text-center mt-1 normal_bold p-5 bg-gradient-to-l from-purple-950 to-purple-700 from-50% rounded-xl w-full cursor-pointer hover:from-purple-700 active:from-purple-900 active:to-purple-900 transition duration-300'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact