import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { PiScrollDuotone } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

function MobileOptions() {
  const navigate = useNavigate();
  const [showSocial, setShowSocial] = useState(false);

  // Scroll helper
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-400 shadow-md z-50 flex justify-around items-center py-2 sm:py-3 text-sm sm:text-sm z-999">
      {/* Home */}
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/");
        }}
        className="flex flex-col items-center justify-center text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
      >
        <IoHomeOutline className="text-2xl sm:text-3xl" />
        <span className="mt-1 text-xs font-medium">Home</span>
      </div>

      {/* Skills */}
      <div
        onClick={() => scrollTo("skills")}
        className="flex flex-col items-center justify-center text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
      >
        <MdOutlineWork className="text-2xl sm:text-3xl" />
        <span className="mt-1 text-xs font-medium">Skills</span>
      </div>

      {/* Projects */}
      <div
        onClick={() => scrollTo("projects")}
        className="flex flex-col items-center justify-center text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
      >
        <PiScrollDuotone className="text-2xl sm:text-3xl" />
        <span className="mt-1 text-xs font-medium">Projects</span>
      </div>

      {/* About */}
      <NavLink
        to="/about"
        className="flex flex-col items-center justify-center  text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
      >
        <BsPerson className="text-2xl sm:text-3xl" />
        <span className="mt-1 text-xs font-medium">About</span>
      </NavLink>

      {/* Contact */}
      <NavLink
        to="/contact"
        className="flex flex-col items-center justify-center text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
      >
        <RiContactsLine className="text-2xl sm:text-3xl" />
        <span className="mt-1 text-xs font-medium">Contact</span>
      </NavLink>

      {/* Social Toggle Button */}
      <div className="relative">
        <div
          onClick={() => setShowSocial(!showSocial)}
          className="flex flex-col items-center justify-center text-black cursor-pointer hover:text-violet-600 active:scale-95 transition-transform duration-150"
        >
          <IoShareSocialSharp className="text-2xl sm:text-3xl" />
          <span className="mt-1 text-xs font-medium">Social</span>
        </div>

        {/* Social Links Dropdown */}
        {showSocial && (
          <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-2 flex gap-4 z-50">
            <a
              href="https://github.com/AnandIsCoding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-violet-600 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anandjhaji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-violet-600 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileOptions;
