import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQdata } from '../utils/faqData';
import CertificateCard from './CertificateCard';

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 px-2 md:px-10 pt-32 pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">

        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              I’m <span className="text-violet-600">Anand Jha</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Eager to contribute my skills to a dynamic and challenging environment.
            </p>
          </div>

          <div className="space-y-6">
            {/* Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BCA Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-sm bg-white border"
              >
                <img
                  src="https://akubihar.ac.in/slider/slide1.jpg"
                  alt="BCA College"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">BCA Graduate</h3>
                  <p className="text-sm text-gray-600">CGPA: 8.91</p>
                  <p className="text-sm text-gray-500">Aryabhatta Knowledge University, Patna</p>
                </div>
              </motion.div>

              {/* MCA Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-sm bg-white border"
              >
                <img
                  src="https://sssacademy.allegiance-educare.in/storage/uploads/colleges/15874582168.jpg"
                  alt="MCA College"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">MCA</h3>
                  <p className="text-sm text-gray-600">Currently Pursuing</p>
                  <p className="text-sm text-gray-500">AISECT University</p>
                </div>
              </motion.div>
            </div>

            {/* Cloud Computing Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-sm bg-white border"
            >
              <img
                src="https://cdn.prod.website-files.com/6682c116172af44bb7ad4845/66e41e9898ac01b713020da7_unsplash_QMUGK_bQB08.avif"
                alt="Woolf University"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Masters in Cloud Computing</h3>
                <p className="text-sm text-gray-600">Woolf University  \ ^ /</p>
                <p className="text-sm text-gray-500">Specialized in modern cloud technologies</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - FAQs */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900 mt-0 md:mt-24">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQdata.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                onClick={() => handleOpen(index)}
                className="bg-white rounded-lg p-5 cursor-pointer shadow transition-all duration-300 hover:bg-gray-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-xl font-bold text-violet-600">
                    {openIndex === index ? '–' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-gray-700">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
       <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-6">Certificate</h2>
      <CertificateCard
        title="Advanced Certification in Full Stack Web Development"
        issuer="Indian Institute of Technology, Guwahati"
        date="October 2024"
        imageUrl="/IIT.png"
        fileUrl="/IIT-Guwhati.pdf"
      />
    </section>
    </div>
  );
}

export default About;
