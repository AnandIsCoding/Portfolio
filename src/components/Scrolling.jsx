import { motion } from 'framer-motion'
import React from 'react'

function Scrolling() {
  
  return (
    <div  className='w-full   bg-[#004D43] rounded-t-xl pt-12 pb-[1.5rem] flex  overflow-hidden whitespace-nowrap gap-10 z-[999]'>

   
   
            <motion.h1 initial={{x:"0"}} animate={{x:'-100%'}} transition={{repeat:Infinity, ease:'linear', duration:15}}  className='text-[20vw] md:text-[18vw] w-full px-8 marquee  py-4  h-full text-white font-extrabold uppercase flex mb-2 leading-none'>myself  anand jha myself  anand jha </motion.h1>

            

           

            
    </div>

  
      
    
  )
}

export default Scrolling
