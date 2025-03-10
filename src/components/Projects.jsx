import { motion } from 'framer-motion'
import React from 'react'
import {NavLink} from 'react-router-dom'
import { ImGithub } from "react-icons/im";

function Projects() {
  
  return (
    <div  className='w-full py-10 flex-wrap'  id="projects"> 
      <div className='w-full px-02 border-b-[1px] border-zinc-400 pb-10'>
        <h1 className='text-4xl md:text-7xl' >Featured Projects</h1>        
      </div>

        <div className='cards w-full flex flex-col md:flex-row gap-6 mt-10 px-0 md:px-20 '>


        <div className="h-auto md:h-[75vh] md:w-[50%] bg-violet-400 rounded-xl p-2 md:p-4">
    <div className="w-full h-auto md:h-[84%] bg-white rounded-xl">
        {/* Image for mobile screens */}
        <img 
            src="/docBookMobile.png" 
            alt="Doctor appointment booking system" 
            className="w-full h-auto rounded-xl object-contain md:hidden" 
        />
        {/* Image for desktop screens */}
        <img 
            src="/doctorBook.png" 
            alt="Doctor appointment booking system" 
            className="w-full h-full rounded-xl object-cover hidden md:block" 
        />
    </div>
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center pt-5"> 
        <NavLink 
            to="https://dochealth.onrender.com/" 
            target="_blank" 
            className="px-4 py-2 rounded-lg bg-white text-xl font-bold text-black"
        >
            Live Preview
        </NavLink>
        <NavLink 
            to="https://github.com/AnandIsCoding/Doctor-Appointment-Booking-System" 
            target="_blank" 
            className="px-4 py-2 rounded-lg bg-white text-xl font-bold text-black flex gap-2"
        > 
            <ImGithub size={24} /> 
            <span>Github</span> 
        </NavLink>
    </div>
</div>


             
        <div className='h-[65vh] md:h-[75vh] md:w-[50%] bg-violet-400 rounded-xl p-1 md:p-4 overflow-hidden'>
       <div className='w-full h-[84%]  rounded-xl flex gap-1 md:gap-3 '>
                <img src='/tinderSignup.png' alt='tinderSignupPage' className='w-[33%] md:w-[33%] h-full rounded-lg' />
                <img src='/tinderFeed.png' alt='tinderFeedPage' className='w-[33%] md:w-[33%] h-full rounded-lg' />
                <img src='/tinderOptions.png' alt='tinderOptions' className=' w-[33%] md:w-[33%] h-full rounded-lg' />
                </div>
                <div className='flex gap-10 justify-center items-center pt-5'> 
                    <NavLink to='https://lovefinder.onrender.com' target='_blank' className='px-4 py-2 rounded-lg bg-[white] text-xl font-bold text-black'>Live Privew</NavLink>
                    <NavLink to='https://github.com/AnandIsCoding/Tinder-Replica.git' target='_blank' className='px-4 py-2 rounded-lg bg-[white] text-xl font-bold text-black flex gap-2'> <ImGithub size={24} /> <span> Github</span> </NavLink>
                </div>
            </div>


            


           
        </div>

       <div className=' w-full flex flex-col md:flex-row gap-6 mt-10 px-0 md:px-20 '>
       

            <div className='h-[65vh] md:h-[75vh] md:w-[50%] rounded-b-xl bg-violet-400 p-1 md:p-4'>
                <div className='w-full h-[84%]   flex gap-1 md:gap-3'>
                <img src='/caberProject1.png' alt='caberProject_home_page' className='w-[33%] md:w-[33%] h-full rounded-lg' />
                <img src='/caberProject2.png' alt='caberProject_login_page' className='w-[33%] md:w-[33%] h-full rounded-lg ' />
                <img src='/caberProject3.png' alt='Serach_Page' className='w-[33%] md:w-[33#] h-full rounded-lg' />
                </div>
                <div className='flex gap-10 justify-center items-center pt-5'> 
                    <NavLink to='https://mycar-hwz0.onrender.com/' target='_blank' className='px-4 py-2 rounded-lg bg-[white] text-xl font-bold text-black'>Live Privew</NavLink>
                    <NavLink to='https://github.com/AnandIsCoding/Uber-replica.git' target='_blank' className='px-4 py-2 rounded-lg bg-[white] text-xl font-bold text-black flex gap-2'> <ImGithub size={24} /> <span> Github</span> </NavLink>
                </div>
            </div>

            <div className='h-[65vh] md:h-[75vh] md:w-[50%] bg-violet-400 rounded-xl p-1 md:p-4'>
                <div className='w-full h-[84%] bg-white rounded-xl flex overflow-hidden'>
                <img src='/chatApp1.png' alt='profile_mychatsPage' className='w-[65%] h-full ' />
                <img src='/chatApp2.png' alt='chattingScreen' className='w-[35%] h-full ' />
                <h1 className=' absolute top-10 right-20 font-bold  text-white'>chatting screen</h1>
                </div>
                <div className='flex gap-10 justify-center items-center pt-5'> 
                    <NavLink onClick={()=>alert('Chat Application is not deployed yet, sorry for the inconvenience')} className='px-4 py-2 rounded-lg bg-[white] text-xl font-bold text-black'>Live Privew</NavLink>
                    <NavLink to='https://github.com/AnandIsCoding/Full-Stack-Chat-Application' target='_blank' className='px-4 py-2  rounded-lg bg-[white] text-xl font-bold text-black flex gap-2'> <ImGithub size={24} /> <span> Github</span> </NavLink>
                </div>
            </div>

       </div>
    </div>
  )
}

export default Projects
