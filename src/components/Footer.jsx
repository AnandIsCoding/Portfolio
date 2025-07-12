import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full h-screen p-10 mb-7 md:mb-0  md:p-20 mt-[1vw] md:mt-0 flex flex-col md:flex-row'>
      <div className='md:w-1/2 '> 
         <div className='heading '>
           <div className=' mb-[18vw]'> <h1 className='text-[11vw] md:text-[5vw] font-semibold uppercase leading-none '>Eye-</h1>

<h1 className='text-[12vw] md:text-[7vw] font-semibold uppercase leading-[0.99] -mb-10'>opening</h1></div>
             
            <h1 className='text-[5vw] font-semibold uppercase hidden md:flex'>Thanks🌿</h1>
          </div>
       </div>

       <div className='md:w-1/2 h-full '>
       <h1 className='text-[11vw] md:text-[7vw] font-semibold uppercase leading-none mt-8'>Projects</h1>

       <div className='dets flex md:pl-10 pt-10 gap-24'>
       <div className='flex flex-col gap-2'>
       <NavLink to='/contact'  className='font-semibold text-xl md:text-2xl' >Contact me</NavLink>
        <NavLink to='https://github.com/AnandIsCoding' target="_blank" className='font-semibold text-xl' >Github</NavLink>
        <a  href='https://www.linkedin.com/in/anandjhaji/' target="_blank" className='font-semibold text-xl' >LinkedIn</a>
        
       </div>

       <div className='flex flex-col gap-2'>
       <NavLink to='/contact'  className='font-semibold text-xl md:text-2xl' >Contact me</NavLink>
       <NavLink to='https://github.com/AnandIsCoding' target="_blank" className='font-semibold text-xl' >Github </NavLink>
        <a href='https://www.linkedin.com/in/anandjhaji/' target="_blank" className='font-semibold text-xl' >LinkedIn</a>
        <NavLink to='/contact' className="hidden md:flex  text-2xl font-semibold cursor-pointer bg-[#27DFB3] px-5 py-2  items-center rounded-lg">
                  Give a message
                </NavLink>

       
        
       </div>
        
       </div>

       

       <h1 className='text-[15vw] font-semibold uppercase  md:hidden mt-[40vw]'>Thanks🌿</h1>

       <NavLink to='/contact' className=" w-full py-5 px-8  md:hidden  text-2xl font-semibold cursor-pointer bg-[#27DFB3] items-center rounded-lg">
                  Give a message
                </NavLink>

        <h1 className=' text-lg ml-[-5vw] md:ml-0 md:text-3xl  md:mt-[30%] mt-10 font-bold'>Designed and built with ❤️ by Anand Jha</h1>
       </div>
    </div>
  )
}

export default Footer
