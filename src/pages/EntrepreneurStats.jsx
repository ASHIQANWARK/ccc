import React from "react";
import avatar1 from "../assets/avatar3.webp";
import avatar2 from "../assets/avatar1.png";
import avatar3 from "../assets/avatar2.png";
import { motion } from "framer-motion";

const EntrepreneurStats = () => {
  return (
    <div className="relative py-24 px-4 text-white overflow-hidden ">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-2 text-center tracking-tight"
      >
        BECOME AN <span className="text-[#aabe39]">ENTREPRENEUR.</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-white mb-16 text-center"
      >
        Start Your Career Counselling Practice!
      </motion.p>

      {/* Main Section */}
      <div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center">
        {/* Center Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-[520px] h-[520px] bg-[#aabe39] text-black rounded-full flex flex-col items-center justify-center px-6 text-sm text-center shadow-2xl z-10"
        >
          <div className="font-semibold text-white text-lg mb-2 leading-snug">
            Scope of Starting a <br /> Career Counselling Practice
          </div>
          <p className="leading-relaxed text-[13px] text-white">
            On an average an Indian Parent spends anywhere between INR 5 Lakhs
            to INR 25 Lakhs on their child’s graduation and 93% of these are
            ready to spend around INR 5000 per session for a counsellor who can
            lay a clear path for their child.
          </p>

          {/* Avatars */}
          {/* Bottom Center Avatar */}
          <img
            src={avatar1}
            alt="Avatar"
            className="object-cover absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-34 h-34 rounded-full border-4 border-[#aabe39] shadow-lg"
          />

          {/* Top Left Avatar */}
          <img
            src={avatar2}
            alt="Avatar"
            className="object-cover absolute top-[30px] left-[-30px] w-34 h-34 rounded-full border-4 border-[#aabe39] shadow-md"
          />

          {/* Top Right Avatar */}
          <img
            src={avatar3}
            alt="Avatar"
            className="object-cover absolute top-[30px] right-[-30px] w-34 h-34 rounded-full border-4 border-[#aabe39] shadow-md"
          />
        </motion.div>

        {/* Left Stat */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-[20%] w-48 text-right"
        >
          <h3 className="text-5xl font-bold text-[#aabe39]">83%</h3>
          <p className="text-sm text-gray-300">
            Of the Indian workforce prefers entrepreneurship over employment*
          </p>
        </motion.div>

        {/* Bottom Left Stat */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-[5%] bottom-[15%] w-48 text-right"
        >
          <h3 className="text-5xl font-bold text-[#aabe39]">86%</h3>
          <p className="text-sm text-gray-300">
            Think India is the land of opportunities for Start-Ups!*
          </p>
        </motion.div>

        {/* Top Right Stat */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute right-[5%] top-[10%] w-48 text-left"
        >
          <h3 className="text-5xl font-bold text-[#aabe39]">56%</h3>
          <p className="text-sm text-gray-300">
            Have considered leaving their job and starting their own ventures!*
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EntrepreneurStats;
