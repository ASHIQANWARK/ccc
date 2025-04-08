import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-20 pb-5 px-6 flex flex-col md:flex-row items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Left: Text Content */}
      <div className="text-center md:text-left max-w-2xl space-y-8">
        {/* Heading animation from left */}
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold italic leading-tight heading-font"
        >
          Welcome to <br />
          <span className="text-[#aabe39] italic heading-font">
            Career Counsellor Consortium
          </span>
        </motion.h2>

        {/* Subheading animation from right */}
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 body-font"
        >
          Empowering Career Counsellors, Empowering Futures.
        </motion.p>

        {/* Button animation from bottom */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [1, 0.5, 1],
            y: 0,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.4,
          }}
          className="bg-[#aabe39] hover:bg-[#8ca62c] text-white px-10 py-4 text-lg rounded-full shadow-lg transition-all duration-300 body-font"
        >
          Join our Network Now
        </motion.button>
      </div>

      {/* Right: Larger Hexagon Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-[420px] h-[460px] md:w-[520px] md:h-[560px] p-4 rounded-2xl"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="hexClip">
              <polygon points="50,10 150,10 190,100 150,190 50,190 10,100" />
            </clipPath>
          </defs>

          {/* Image inside hexagon */}
          <image
            href={heroImage}
            width="200"
            height="200"
            clipPath="url(#hexClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Hex border */}
          <polygon
            points="50,10 150,10 190,100 150,190 50,190 10,100"
            fill="none"
            stroke="#aabe39"
            strokeWidth="4"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;
