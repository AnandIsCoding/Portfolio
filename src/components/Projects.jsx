import React from "react";
import { NavLink } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <div
      className="w-full py-1 md:py-16 px-1 md:px-16 bg-gradient-to-b from-white to-zinc-100 mb-44 md:mb-0 "
      id="projects"
    >
      <div className="border-b border-zinc-400 pb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
          🚀 Featured Projects
        </h1>
      </div>

      <div className="mt-16 flex flex-col gap-12">
        {/* Project Card 1 */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <div className="w-full md:w-1/2 bg-violet-500 rounded-2xl p-1 py-2 md:p-4 shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex h-72 md:h-[85%] gap-1 md:gap-2 overflow-hidden rounded-xl">
              <img
                src="/Dashboard1.png"
                alt="Home Page 1"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/Dashboard2.png"
                alt="Product Page"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/DoctorPage1.png"
                alt="More Products"
                className="w-1/3 object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 justify-center items-center pt-5 flex-wrap">
              <NavLink
                to="https://dochealth.onrender.com/"
                target="_blank"
                title="Live preview"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                Live Preview
              </NavLink>
              <NavLink
                to="https://github.com/AnandIsCoding/Doctor-Appointment-Booking-System"
                target="_blank"
                title="Github Repository"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white flex items-center gap-2 transition-colors"
              >
                <ImGithub size={20} />
                Github
              </NavLink>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="w-full md:w-1/2 bg-violet-500 rounded-2xl p-1 py-2 md:p-4  shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex h-72 md:h-[85%] gap-1 md:gap-2 overflow-hidden rounded-xl">
              <img
                src="/HomeMobile1.png"
                alt="Home Page 1"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/Product3.png"
                alt="Product Page"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/Product4.png"
                alt="More Products"
                className="w-1/3 object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 justify-center items-center pt-5 flex-wrap">
              <NavLink
                to="https://myshopcluess.web.app"
                target="_blank"
                title="Live Preview"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                Live Preview
              </NavLink>
              <NavLink
                to="https://github.com/AnandIsCoding/FullStack-ShopClues"
                target="_blank"
                title="GitHub Repository"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white flex items-center gap-2 transition-colors"
              >
                <ImGithub size={20} />
                GitHub
              </NavLink>
            </div>
          </div>
          
        </motion.div>

        {/* Second Row of Projects */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
        >
          {/* Project Card 3 */}
          <div className="w-full md:w-1/2 bg-violet-500 rounded-2xl p-1 py-2 md:p-4  shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex h-72 md:h-[85%] gap-1 md:gap-2 overflow-hidden rounded-xl">
              <img
                src="/tinderSignup.png"
                alt="Signup"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/tinderFeed.png"
                alt="Feed"
                className="w-1/3 object-cover rounded-xl"
              />
              <img
                src="/tinderOptions.png"
                alt="Options"
                className="w-1/3 object-cover rounded-xl"
              />
            </div>
            <div className="flex gap-4 justify-center items-center pt-5 flex-wrap">
              <NavLink
                to="https://lovefinder.onrender.com"
                target="_blank"
                title="Live preview"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                Live Preview
              </NavLink>
              <NavLink
                to="https://github.com/AnandIsCoding/Tinder-Replica.git"
                target="_blank"
                title="Github Repository"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white flex items-center gap-2 transition-colors"
              >
                <ImGithub size={20} />
                Github
              </NavLink>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="w-full md:w-1/2 bg-violet-500 rounded-2xl p-1 py-2 md:p-4  shadow-xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex h-72 md:h-[85%] bg-white rounded-xl overflow-hidden">
              <img
                src="/chatApp1.png"
                alt="Chats"
                className="w-[65%] object-cover"
              />
              <img
                src="/chatApp2.png"
                alt="Screen"
                className="w-[35%] object-cover"
              />
            </div>
            <div className="flex gap-4 justify-center items-center pt-5 flex-wrap">
              <button
                title="Live preview"
                onClick={() =>
                  alert(
                    "Chat Application is not deployed yet, sorry for the inconvenience"
                  )
                }
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white transition-colors"
              >
                Live Preview
              </button>
              <NavLink
                to="https://github.com/AnandIsCoding/Full-Stack-Chat-Application"
                target="_blank"
                title="Live preview is not available"
                className="px-6 py-2 rounded-full bg-white font-semibold text-black hover:bg-black hover:text-white flex items-center gap-2 transition-colors"
              >
                <ImGithub size={20} />
                Github
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
