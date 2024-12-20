import React from 'react';
import { motion } from 'framer-motion';

function SingleSlide({ imagesurl ,direction}) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity, // Corrected repeat value
        }}
        className="flex flex-shrink-0 gap-5 md:gap-20 py-10"
      >
        {/* Duplicate images for seamless scrolling */}
        {imagesurl.concat(imagesurl).map((url, index) => (
          <img
            key={index}
            src={url}
            alt="singleLogo"
            className="w-[14vw] h-[14vw] md:h-[7vw] md:w-[7vw] flex-shrink-0"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x: direction === 'left' ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity, // Corrected repeat value
        }}
        className="flex flex-shrink-0 gap-5 md:gap-20 py-10"
      >
        {/* Duplicate images for seamless scrolling */}
        {imagesurl.concat(imagesurl).map((url, index) => (
          <img
            key={index}
            src={url}
            alt="singleLogo"
            className="  w-[14vw] h-[14vw] md:h-[7vw] md:w-[7vw] flex-shrink-0"
          />
        ))}
      </motion.div>

      
    </div>
  );
}

export default SingleSlide;
