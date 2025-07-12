import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

function Navbar({ openPanel, setOpenpanel }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full h-[10vh] bg-white/70 backdrop-blur-lg z-[999] flex justify-between items-center px-6 md:px-12">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-3xl md:text-4xl font-bold text-black cursor-pointer"
      >
        Anand
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {
          isHome ? (<Link
          to="skills"
          smooth={true}
          duration={1000}
          className="text-xl font-semibold hover:text-violet-600 cursor-pointer"
        >
          Skills
        </Link>) : (
          <NavLink
          to="/"
          className="text-xl font-semibold hover:text-violet-600 cursor-pointer"
        >
          Skills
        </NavLink>
        )
        }
        {isHome ? (
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="text-xl font-semibold hover:text-violet-600 cursor-pointer"
          >
            Projects
          </Link>
        ) : (
          <NavLink
            to="/"
            className="text-xl font-semibold hover:text-violet-600 cursor-pointer"
          >
            Projects
          </NavLink>
        )}

        <NavLink
          to="/about"
          className="text-xl font-semibold hover:text-violet-600 cursor-pointer"
        >
          About Me
        </NavLink>
        <NavLink
          to="/AnandJhaResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#27DFB3]  text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#20c0a5] transition"
        >
          Get Resume
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-[#27DFB3]  text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#20c0a5] transition"
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-2xl text-black cursor-pointer">
        {!openPanel ? (
          <GiHamburgerMenu onClick={() => setOpenpanel(true)} />
        ) : (
          <RiCloseLargeFill onClick={() => setOpenpanel(false)} />
        )}
      </div>

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 left-0 w-full bg-black text-white z-[998] transition-all duration-500 ${
          openPanel ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <button
          onClick={() => setOpenpanel(false)}
          className="absolute top-7 right-5 text-white hover:text-red-500 transition-colors cursor-pointer"
        >
          <FaTimes size={28} />
        </button>
        <div className="p-6 flex flex-col gap-6 text-white mt-[10vh]">
          {
            isHome ? (<Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={() => setOpenpanel(false)}
            className="text-3xl font-bold cursor-pointer"
          >
            Skills
          </Link>) : (
            <NavLink
            to="/"
            onClick={() => setOpenpanel(false)}
            className="text-3xl font-bold cursor-pointer"
          >
            Skills
          </NavLink>
          )
          }
          {
            isHome ? (<Link
            to="projects"
            smooth={true}
            duration={1000}
            onClick={() => setOpenpanel(false)}
            className="text-3xl font-bold cursor-pointer"
          >
            Projects
          </Link>) : (<NavLink
            to="/"
            onClick={() => setOpenpanel(false)}
            className="text-3xl font-bold cursor-pointer"
          >
            Projects
          </NavLink>)
          }
          <NavLink
            to="/about"
            onClick={() => setOpenpanel(false)}
            className="text-3xl font-bold cursor-pointer"
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpenpanel(false)}
            className="bg-[#27DFB3] text-black px-4 py-3 rounded-lg text-lg font-semibold"
          >
            Contact
          </NavLink>
          <NavLink
            to="/AnandJhaResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenpanel(false)}
            className="bg-[#27DFB3] text-black   px-4 py-3 rounded-lg text-lg font-semibold"
          >
            Get Resume
          </NavLink>

          <hr className="my-4 border-white/30" />

          <div>
            <h3 className="text-xl underline mb-2">Socials</h3>
            <a
              href="https://github.com/AnandIsCoding"
              target="_blank"
              rel="noreferrer"
              className="text-lg block"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/anandjhaji"
              target="_blank"
              rel="noreferrer"
              className="text-lg block"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-6">
            <h3 className="text-xl underline">Address</h3>
            <p className="text-lg">Katihar, Bihar 854105</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
