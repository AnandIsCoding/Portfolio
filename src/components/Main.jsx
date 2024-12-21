import { motion, useMotionValueEvent } from 'framer-motion';
import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { useScroll } from 'framer-motion';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

function Main({ openPanel, setOpenpanel }) {
  const navigate = useNavigate()
  const [images, setImages] = useState([
    { url: 'https://res.cloudinary.com/dm0rlehq8/image/upload/v1734635541/Tinder/jonmvwzqgpscaw1lazgz.jpg', top: '28%', left: '60%', isActive: false },
    // { url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b1608a4f57abd6f4bb1b06_cover-home-p-500.webp', top: '32%', left: '60%', isActive: false },
    { url: 'https://res.cloudinary.com/dm0rlehq8/image/upload/v1734635541/Tinder/jonmvwzqgpscaw1lazgz.jpg', top: '20%', left: '50%', isActive: false },
    { url: 'https://res.cloudinary.com/dm0rlehq8/image/upload/v1734635541/Tinder/jonmvwzqgpscaw1lazgz.jpg', top: '35%', left: '70%', isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on('change', (data) => {
    const showImages = (arr) => {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1,2]);
        break;       
      
      default:
        showImages([0,1,2]);
        break;
    }
  });

  return (
    <div className='pt-[10vh] py-10 overflow-x-hidden'>
      <div className='leading-none mt-5 md:px-10 select-none '>
        <h1 className='text-[10vw] md:text-[8vw] font-extrabold mt-10 tracking-tighter uppercase'>Delivering</h1>
        <h1 className='flex text-[10vw] md:text-[8vw] font-extrabold tracking-tighter'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '10vw' }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className='w-[14vw] uppercase h-[10vw] md:h-[6vw] mt-0 md:mt-4 rounded-lg mr-2 flex justify-center items-center text-white font-extralight'
          >
            🌿
          </motion.div> 
          IMPACTFUL
        </h1>
        <h1 className='text-[10vw] md:text-[7vw] font-extrabold tracking-tighter uppercase'>Digital Experiences</h1>

        <div
          className={`absolute w-[14vw] md:w-[4vw] bg-[red] right-0 top-32 ${openPanel && 'hidden'} flex flex-col items-center pt-2 pb-2 rounded-l-md`}
        >
          <h1 className='text-white bg-[red] text-2xl font-bold'>A</h1>
          <h1 className='text-white bg-[red] text-2xl font-bold'>N</h1>
          <h1 className='text-white bg-[red] text-2xl font-bold'>A</h1>
          <h1 className='text-white bg-[red] text-2xl font-bold'>A</h1>
          <h1 className='text-white bg-[red] text-2xl font-bold'>D</h1>
        </div>
      </div>

      <div className={`w-full h-[1px] bg-zinc-400 mt-[47vw] md:mt-14`}></div>
      <div className='w-full flex flex-col md:justify-between md:flex md:flex-row px-4 md:px-8 py-8 text-xl font-thin'>
        <h1 className='mt-5 md:mt-0'>From concept to reality</h1>
        <h1 className='mt-5 md:mt-0'>From idea validation to deployment</h1>

        <NavLink onClick={()=>navigate('/contact')} className='px-4 py-2 cursor-pointer rounded-full border-2 border-zinc-400 mt-4 md:mt-[-1vw] flex gap-4 uppercase'>
        Lets get to it together <GoArrowUpRight className='mt-1 bg-zinc-100 rounded-full' />
        </NavLink>
      </div>

      <div className='w-full h-full absolute overflow-x-hidden top-0'>
        {images.map((item, index) => {
          return item.isActive && (
            <img
              key={index}
              src={item.url}
              alt='images'
              className='w-36 duration-150 absolute rounded-lg'
              style={{ top: item.top, left: item.left }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
