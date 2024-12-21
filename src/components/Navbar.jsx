import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


function Navbar({ openPanel, setOpenpanel }) {
  const navigate = useNavigate()

  return (
    <div className="fixed flex w-full h-[10vh] backdrop-blur-2xl z-[999]">
      <div onClick={()=>navigate('/')} className="w-[48%] h-full text-3xl md:text-4xl font-semibold px-10 py-5 text-black cursor-pointer">
        Anand
      </div>

      <div className="w-[35%] h-full  justify-between py-7 hidden md:flex">
        <Link to="skills" smooth={true} duration={3000}  className="text-2xl font-semibold hover:text-violet-600  cursor-pointer ">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={2000} className="text-2xl font-semibold  hover:text-violet-600  cursor-pointer ">
          Projects
        </Link>
        <NavLink to='/about'  className="text-2xl font-semibold  cursor-pointer  hover:text-violet-600 ">
          About me
        </NavLink>
        <NavLink
  to="/AnandResume1.pdf" // Replace "AnandResume1.pdf" with your actual filename
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl font-semibold cursor-pointer bg-[#27DFB3] px-5 py-6 mt-[-10px] animate-bounce duration-500 flex items-center rounded-lg"
>
  Get Resume
</NavLink>

      </div>

      <div className="w-[20%] h-full px-20 py-6 ">
        <NavLink to='/contact' className="hidden md:flex text-2xl font-bold cursor-pointer ml-20 ">
          Contact
        </NavLink>

        <h1
          onClick={() => setOpenpanel(!openPanel)}
          className="md:hidden text-2xl font-semibold  cursor-pointer ml-20 "
        >
          {!openPanel ? <GiHamburgerMenu /> : <RiCloseLargeFill />}
        </h1>
      </div>



      <div
        className={`w-full z-[999]  bg-black absolute top-0 duration-[0.5s] ${
          openPanel ? "h-screen" : "h-[0%] "
        } `}
      >
        <div
          className={`w-[45%] h-full text-3xl md:text-4xl font-semibold px-10 py-5 text-white  ${
            !openPanel && "hidden"
          } `}
        >
          Anand
        </div>
        <h1
          onClick={() => setOpenpanel(!openPanel)}
          className={`md:hidden absolute top-6 right-10 text-bold text-white text-2xl font-semibold  cursor-pointer ml-24 ${
            !openPanel && "hidden"
          } `}
        >
          {!openPanel ? (
            <GiHamburgerMenu className="mr-4" />
          ) : (
            <RiCloseLargeFill className="font-bold" />
          )}
        </h1>
        <div
          className={`w-full h-[1px] bg-white ${
            !openPanel ? "hidden" : "absolute top-24 z-[999]"
          }  `}
        ></div>

        <div
          className={` w-full    py-7 text-white ${
            !openPanel ? "hidden" : "absolute top-20 leading-1 px-6"
          } `}
        >
          <Link to="skills" smooth={true} duration={3000} onClick={()=>setOpenpanel(prev => !prev)} className="block text-[12vw] font-bold text-white cursor-pointer ">
            SKILLS
          </Link>
          <Link onClick={()=>setOpenpanel(prev => !prev)} to="projects" smooth={true} duration={2000} className="text-[12vw] font-bold text-white cursor-pointer ">
            Projects
          </Link>
          <NavLink to='/about' onClick={()=>setOpenpanel(prev => !prev)} className="text-[10vw] block font-bold text-white cursor-pointer ">
            About Me
          </NavLink>
          <NavLink to='/contact' onClick={()=>setOpenpanel(prev => !prev)} className="text-[10vw] font-bold text-white cursor-pointer ">
            Contact
          </NavLink>
          <NavLink onClick={()=>setOpenpanel(prev => !prev)} 
  to="/AnandResume1.pdf" // Replace "AnandResume1.pdf" with your actual filename
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl font-semibold cursor-pointer bg-[#27DFB3] px-5 py-3 mt-[-5px] flex items-center text-black rounded-lg"
>
  Get Resume
</NavLink>
          <div className={`w-full h-[1px] bg-white mt-4 `}></div>

          <br></br>
          <div className={` w-full    py-7 text-white flex flex-col `}>
            <h1 className="text-[4vw] underline font-bold text-white cursor-pointer ">
              Socials
            </h1>
            <NavLink onClick={()=>setOpenpanel(prev => !prev)} to='https://github.com/AnandIsCoding' target='_blank' className="text-[7vw] font-bold text-white cursor-pointer ">
              Github
            </NavLink>
            
            <a onClick={()=>setOpenpanel(prev => !prev)} href='www.linkedin.com/in/anandjha123' target="_blank" className="text-[7vw] font-bold text-white cursor-pointer ">
              Linkdeln
            </a>
            
            

            <h1 className="text-[4vw] underline font-bold text-white cursor-pointer mt-6">
              Address
            </h1>
            <h1 className="text-[5vw] mt-4 font-bold text-white cursor-pointer ">
              Katihar, Bihar 854105
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
