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
        <h1 className="text-xl font-normal hover:text-violet-600  cursor-pointer ">
          Services
        </h1>
        <Link to="about" smooth={true} duration={2000} className="text-xl font-normal  hover:text-violet-600  cursor-pointer ">
          Projects
        </Link>
        <NavLink  className="text-xl font-normal  cursor-pointer  hover:text-violet-600 ">
          About me
        </NavLink>
        <h1 className="text-xl font-normal  cursor-pointer  hover:text-violet-600">
          Insights
        </h1>
      </div>

      <div className="w-[20%] h-full px-20 py-6 ">
        <h1 className="hidden md:flex text-2xl font-normal cursor-pointer ml-20 ">
          Contact
        </h1>

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
            <GiHamburgerMenu />
          ) : (
            <RiCloseLargeFill className="font-bold" />
          )}
        </h1>
        <div
          className={`w-full h-[1px] bg-white ${
            !openPanel ? "hidden" : "absolute top-24"
          }  `}
        ></div>

        <div
          className={` w-full    py-7 text-white ${
            !openPanel ? "hidden" : "absolute top-20 leading-1 px-6"
          } `}
        >
          <h1 className="text-[15vw] font-bold text-white cursor-pointer ">
            SERVICES
          </h1>
          <Link onClick={()=>setOpenpanel(prev => !prev)} to="about" smooth={true} duration={2000} className="text-[12vw] font-bold text-white cursor-pointer ">
            Projects
          </Link>
          <h1 className="text-[10vw] font-bold text-white cursor-pointer ">
            ABOUT US
          </h1>
          <h1 className="text-[10vw] font-bold text-white cursor-pointer ">
            INSIGHTS
          </h1>
          <div className={`w-full h-[1px] bg-white mt-4 `}></div>

          <br></br>
          <div className={` w-full    py-7 text-white flex flex-col `}>
            <h1 className="text-[4vw] underline font-bold text-white cursor-pointer ">
              Socials
            </h1>
            <a
              target="_blank"
              href="https://google.com "
              className="text-[7vw] font-bold text-white cursor-pointer mt-3"
            >
              Instagram
            </a>
            <a className="text-[7vw] font-bold text-white cursor-pointer ">
              Linkdeln
            </a>
            <a className="text-[7vw] font-bold text-white cursor-pointer ">
              Facebook
            </a>
            <a className="text-[7vw] font-bold text-white cursor-pointer ">
              Github
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
