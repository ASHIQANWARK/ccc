import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        Ready to Shape the Future?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
      >
        Join the Career Consortium and unlock new possibilities in professional guidance,
        innovation, and impact. Let's grow together.
      </motion.p>

      <motion.a
        href="https://www.careerconsortium.org"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
        className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg"
      >
        Apply Now
      </motion.a>
    </div>
  );
};

export default JoinUs;

  