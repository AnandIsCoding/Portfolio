import { motion } from 'framer-motion'
import React from 'react'

function Projects() {
  
  return (
    <div  className='w-full py-10 '> 
      <div className='w-full px-02 border-b-[1px] border-zinc-400 pb-10'>
        <h1 className='text-4xl md:text-7xl' >Featured Projects</h1>

        
      </div>

      <div className='cards w-full flex flex-col md:flex-row gap-10 mt-10 px-2 md:px-20'>
            <div className='card  md:w-1/2 h-[80vh]  rounded-xl'>
                <div className='w-full h-full rounded-xl bg-blue-400 relative  duration-[1s] hover:scale-75'>
                    <img src='/gen_image.png' alt='project_image' className='w-full h-full rounded-xl object-cover' />

                    <img src='/result.png' alt='project_image' className='w-[60vw] h-[60vw]  md:w-[20vw] md:h-[20vw] absolute rounded-xl object-fit right-2 top-4 border-4 border-white hover:scale-125 duration-[2s]' />
                </div>
            </div>

            <div className='card md:w-1/2 h-[85vh] rounded-xl'>
            <div className='w-full h-full rounded-xl  duration-[1s] flex flex-col md:flex-row hover:scale-75'>
            <img src='/caber_home.png' alt='project_image' className='md:w-1/2 h-full rounded-xl object-cover  ' />

            <img src='/caber.png' alt='project_image' className='md:w-1/2 h-full  rounded-xl object-fit ml-4  ' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
