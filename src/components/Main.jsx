import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function Main({openPanel, setOpenpanel}) {
  
  return (
    <div className='pt-[10vh] px-5  py-10'>
      <div className='leading-none mt-5 md:px-10 '>
        <h1 className='text-[10vw] md:text-[8vw] font-extrabold mt-10 tracking-tighter'>WE CREATE</h1>
        <h1 className='flex text-[10vw] md:text-[8vw] font-extrabold tracking-tighter'> <motion.div initial={{width:0}} animate={{width:'10vw'}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[14vw] h-[10vw] md:h-[6vw] mt-0 md:mt-4 rounded-lg  mr-2 flex justify-center items-center text-white font-extralight'>🌿
           
        </motion.div> EYE-OPENING</h1>
        <h1 className='text-[10vw] md:text-[8vw] font-extrabold tracking-tighter'>PRESENTATION</h1>

        <div  className={`absolute  w-[14vw] md:w-[4vw] bg-[red] right-0 top-32 ${openPanel && 'hidden'} flex flex-col items-center pt-2 pb-2 rounded-l-md `}>
            <h1 className='text-white bg-[red] text-2xl font-bold'>A</h1>
            <h1 className='text-white bg-[red]  text-2xl font-bold  '>n</h1>
            <h1 className='text-white  bg-[red] text-2xl font-bold'>a</h1>
            <h1 className='text-white bg-[red]  text-2xl font-bold'>n</h1>
            <h1 className='text-white bg-[red]  text-2xl font-bold'>d</h1>
        </div>
      </div>

      <div className={`w-full h-[1px] bg-zinc-400 mt-[47vw] md:mt-14 `}></div>
      <div className='w-full flex flex-col md:justify-between md:flex md:flex-row px-4 md:px-8 py-8 text-xl font-thin '>
        <h1 className='mt-5 md:mt-0'>For public and private works</h1>
        <h1  className='mt-5 md:mt-0'>
        From the first pitch to IPO</h1>

        <button className='px-4      py-2 rounded-full border-2  border-zinc-400 mt-4 md:mt-[-1vw] flex gap-4 uppercase'>Start first project <GoArrowUpRight className='mt-1 bg-zinc-100 rounded-full '/>  </button>
      </div>
    </div>
  )
}

export default Main
