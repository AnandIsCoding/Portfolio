import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen p-10  md:p-20 mt-[170vw] md:mt-0 flex flex-col md:flex-row'>
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
       <a href='https://google.com' className='font-semibold text-xl' >Contact me</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Github</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
       </div>

       <div className='flex flex-col gap-2'>
       <a href='https://google.com' className='font-semibold text-xl' >Contact me</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Github</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
        <a href='https://google.com' className='font-semibold text-xl' >Instagram</a>
       </div>
        
       </div>

       <h1 className='text-[15vw] font-semibold uppercase  md:hidden mt-[40vw]'>Thanks🌿</h1>


       </div>
    </div>
  )
}

export default Footer
