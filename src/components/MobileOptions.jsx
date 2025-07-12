import React, { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { PiReadCvLogo } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";

function MobileOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (isHome && section) {
      scroller.scrollTo(section, {
        duration: 600,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      sessionStorage.removeItem("scrollTo");
    }
  }, [location.pathname]);

  const handleScrollOrRedirect = (section) => {
    if (isHome) {
      scroller.scrollTo(section, {
        duration: 600,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      sessionStorage.setItem("scrollTo", section);
      navigate("/");
    }
  };

  const iconSize = 28;
  const activeColor = "text-violet-600";

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white rounded-t-xl border-t border-gray-300 shadow-lg z-50 p-2 flex justify-around items-center">
      {/** Home */}
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150 cursor-pointer"
      >
        <IoHomeOutline className={`text-${iconSize}`} />
        <span className="mt-1 text-xs font-medium">Home</span>
      </div>

      {/** Skills */}
      <div
        onClick={() => handleScrollOrRedirect("skills")}
        className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150 cursor-pointer"
      >
        <GiSkills className={`text-${iconSize}`} />
        <span className="mt-1 text-xs font-medium">Skills</span>
      </div>

      {/** Resume */}
      <NavLink
        to="/AnandJhaResume.pdf"
        target="_blank"
        className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150"
      >
        <PiReadCvLogo className={`text-${iconSize}`} />
        <span className="mt-1 text-xs font-medium">Resume</span>
      </NavLink>

      {/** About */}
      <NavLink
        to="/about"
        className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150"
      >
        <BsPerson className={`text-${iconSize}`} />
        <span className="mt-1 text-xs font-medium">About</span>
      </NavLink>

      {/** Contact */}
      <NavLink
        to="/contact"
        className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150"
      >
        <RiContactsLine className={`text-${iconSize}`} />
        <span className="mt-1 text-xs font-medium">Contact</span>
      </NavLink>

      {/** Social */}
      <div className="relative">
        <div
          onClick={() => setShowSocial(!showSocial)}
          className="flex flex-col items-center justify-center text-gray-700 hover:scale-110 transition transform duration-150 cursor-pointer"
        >
          <IoShareSocialSharp className={`text-${iconSize}`} />
          <span className="mt-1 text-xs font-medium">Social</span>
        </div>

        {showSocial && (
          <div className="absolute bottom-14  -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-md p-2 flex gap-3">
            <a
              href="https://github.com/AnandIsCoding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/anandjhaji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-4xl"
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
