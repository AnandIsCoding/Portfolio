import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <div className='w-[100%] h-[100%] p-6 md:fixed bg-white '>
    <button onClick={()=> window.history.go(-1)} className='absolute backdrop-blur-lg top-6 right-6 hidden md:block text-white font-bold text-xl px-4 py-2 rounded-lg border-2 border-zinc-200' >← Back</button>
     <div className='min-h-[92vh] w-full  bg-black rounded-xl text-white flex flex-col md:flex-row '>
     <div className='md:w-[55%] p-4'>

          <h1 className='text-white text-[10vw] md:text-[6vw] font-bold  '>I am Anand Jha</h1>
          <h1 className='text-white text-[4vw] md:text-[2vw] font-bold  '> I am <span className='text-violet-700'>eager</span> to contribute my skills to a dynamic and challenging environment</h1>

          <div className='flex gap-1 md:gap-5 flex-col md:flex-row md:p-5 md:pt-16'>
            <div className='md:w-[20vw] min-h-[20vw] rounded-lg bg-white p-1 hover:scale-105 duration-200'>
              <div className='w-full h-[65%] bg-pink-600 rounded-xl'>
                <img src='https://akubihar.ac.in/slider/slide1.jpg' alt='bca_college' className='w-full h-full object-cover rounded-xl ' />
              </div>
              <h1 className='text-black text-xl font-semibold ml-2 mt-2'>BCA Graduate</h1>
              <h1 className='text-black text-lg font-bold ml-2 '>8.919 CGPA</h1>
              <h2 className='text-black text-lg font-semibold ml-2'>Vidya Vihar Institute of Technology</h2>
            </div>

            <div className='md:w-[20vw] min-h-[20vw] rounded-lg bg-white p-0 md:p-1 hover:scale-105 duration-200'>
            <div className='w-full h-[65%] bg-pink-600 rounded-xl'>
            <img src='https://sssacademy.allegiance-educare.in/storage/uploads/colleges/15874582168.jpg' alt='bca_college' className='w-full h-full object-cover rounded-xl ' />
            </div>
            <h1 className='text-black text-xl font-semibold ml-2 mt-2'>MCA </h1>
              <h2 className='text-black text-lg font-semibold ml-2'>Pursuing</h2>
              <h2 className='text-black text-lg font-semibold ml-2'>AISECT University </h2>
            </div>
          </div>

       
     </div>



      <div className='w-full md:w-[45%]'>     
        <motion.img  initial={{x:"100%"}} animate={{x:'0%'}} transition={{ease:'linear', duration:0.8}} src='/Profile.png' alt='ProfileImage' className='w-full h-full object-cover rounded-xl' />
      </div>
     </div>
      
    </div>
  )
}

export default About
