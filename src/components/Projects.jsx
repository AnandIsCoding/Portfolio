import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ImGithub } from "react-icons/im";

const projects = [
  {
    title: "DevLinked – Social Media App",
    description:
      "A full-stack professional networking site with real-time chat, notifications, and cloud integration.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Cloudinary",
      "AWS",
      "GoDaddy",
    ],
    liveLink: "https://devlinked.site",
    githubLink:
      "https://github.com/AnandIsCoding/Professional-Networking-System",
    imagesMobile: [
      "/devlinked_mobile1.png",
      "/devlinked_mobile2.png",
      "/devlinked_mobile3.png",
    ],
    imagesDesktop: [
      "/devlinked_mobile1.png",
      "/devlinked_mobile2.png",
      "/devlinked_mobile3.png",
    ],
    bgImage:
      "https://cdn.dribbble.com/userupload/44062340/file/original-5c090a6bafb14b80efdeedb55d9e2de9.jpeg?resize=1504x1003&vertical=center",
  },
  {
    title: "DocHealth – Doctor Appointment Booking System",
    description: "Doctor appointment system with dashboards, scheduling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "jwt", "Render"],
    liveLink: "https://dochealth.onrender.com/",
    githubLink:
      "https://github.com/AnandIsCoding/Doctor-Appointment-Booking-System",
    imagesMobile: ["/Dashboard1.png", "/Dashboard2.png", "/DoctorPage1.png"],
    imagesDesktop: ["/Dashboard1.png", "/Dashboard2.png", "/DoctorPage1.png"],
    bgImage:
      "https://cdn.dribbble.com/userupload/15630357/file/original-04683117fdc77f8bc7cfde1281da6717.jpg?resize=1504x1128&vertical=center", // example
  },
  {
    title: "ShopClues – E-Commerce Clone",
    description:
      "A complete shopping website with user auth, cart, and responsive design.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "jwt",
      "Tailwind",
      "Firebase",
      "Render",
    ],
    liveLink: "https://myshopcluess.web.app",
    githubLink: "https://github.com/AnandIsCoding/FullStack-ShopClues",
    imagesMobile: ["/HomeMobile1.png", "/Product3.png", "/Product4.png"],
    imagesDesktop: ["/HomeMobile1.png", "/Product3.png", "/Product4.png"],
    bgImage:
      "https://cdn.dribbble.com/userupload/15276181/file/original-a0f07373298e7c47fea247931c8b1684.jpg?resize=1504x1592&vertical=center", // example
  },
  {
    title: "Tinder Replica – Dating App",
    description:
      "Swipe-based dating platform with matching, options, and basic chat interface.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://lovefinder.onrender.com",
    githubLink: "https://github.com/AnandIsCoding/Tinder-Replica",
    imagesMobile: [
      "/tinderSignup.png",
      "/tinderFeed.png",
      "/tinderOptions.png",
    ],
    imagesDesktop: [
      "/tinderSignup.png",
      "/tinderFeed.png",
      "/tinderOptions.png",
    ],
    bgImage:
      "https://cdn.dribbble.com/userupload/16365106/file/original-971baeae128853b8185fc546fa611991.jpg?resize=1504x1504&vertical=center", // example
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b  py-16 px-2 md:px-16 lg:px-24 text-gray-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">🚀 Featured Projects</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Full-stack applications showcasing real-time features, responsive
          design, and clean UI.
        </p>
      </div>

      <div className="grid gap-20">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            variants={fadeIn}
          >
            {/* ✅ Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${proj.bgImage})`,
              }}
            ></div>

            {/* ✅ Dark translucent overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* ✅ Foreground Content */}
            <div className="relative z-10 flex flex-col lg:flex-row text-white p-4 lg:p-8">
              {/* Left Side - Images */}
              <div className="lg:w-1/2 w-full flex gap-2 ml-[-8px] md:ml-0 ">
                
                {proj.imagesMobile.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={proj.title}
                    className="block  w-1/3 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Right Side - Details */}
              <div className="lg:w-1/2 md:ml-4 w-full flex flex-col justify-center gap-4 mt-6 lg:mt-0 px-2 lg:px-6">
                <h3 className="text-3xl font-bold text-cyan-400">
                  {proj.title}
                </h3>
                <p className="text-white/90">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/10 border border-white text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4 flex-wrap">
                  <NavLink
                    to={proj.liveLink}
                    target="_blank"
                    className="bg-cyan-500 text-white px-5 py-2 rounded-full text-sm hover:bg-cyan-600 transition"
                  >
                    Live Preview
                  </NavLink>
                  <NavLink
                    to={proj.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2 border border-white rounded-full text-sm text-white hover:bg-white/20 transition"
                  >
                    <ImGithub size={18} />
                    GitHub
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
