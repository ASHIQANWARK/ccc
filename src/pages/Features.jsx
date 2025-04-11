import React from "react";
import { motion } from "framer-motion";

import imgNetworking from "../assets/networking.png";
import imgTraining from "../assets/skill.jpg";
import imgEmployment from "../assets/job.jpg";
import imgEntrepreneur from "../assets/entreprenur.jpg";

const features = [
  {
    title: "Networking",
    description: "Connect with a diverse group of career professionals.",
    details: [
      { icon: "🤝", text: "<strong>Connect</strong> with like-minded career counsellors." },
      { icon: "📅", text: "<strong>Collaborate</strong> on webinars and projects." },
      { icon: "🎟️", text: "<strong>Access</strong> exclusive events and summits." },
    ],
    image: imgNetworking,
  },
  {
    title: "Upskilling & Training",
    description: "Stay ahead with workshops, webinars, and AI-driven tools.",
    details: [
      { icon: "📚", text: "Stay updated with <strong>latest trends and techniques</strong>." },
      { icon: "🖥️", text: "Join <strong>certifications and live workshops</strong>." },
      { icon: "🤖", text: "Learn <strong>virtual counselling and AI tools</strong>." },
    ],
    image: imgTraining,
  },
  {
    title: "Employment Opportunities",
    description: "Access job boards, mentorship programs, and career transitions.",
    details: [
      { icon: "💼", text: "<strong>Job Boards</strong> for exclusive listings." },
      { icon: "🏢", text: "<strong>Partner</strong> with top organizations." },
      { icon: "🎓", text: "<strong>Mentorship</strong> for career transitions." },
    ],
    image: imgEmployment,
  },
  {
    title: "Entrepreneurial Opportunities",
    description: "Build and scale your own career counselling practice.",
    details: [
      { icon: "🚀", text: "<strong>Start your own practice</strong> with ease." },
      { icon: "📢", text: "Learn <strong>branding and client outreach</strong>." },
      { icon: "🤝", text: "Explore <strong>collaborations and networks</strong>." },
    ],
    image: imgEntrepreneur,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Features = () => {
  return (
    <div className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16 heading-font"
      >
        What We Offer
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] backdrop-blur-md text-white p-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden flex flex-col"
          >
            {/* Image Header */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <h3 className="text-2xl font-semibold heading-font text-center">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed text-center">{feature.description}</p>

              <ul className="text-sm text-white space-y-3 leading-relaxed">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-lg">{detail.icon}</span>
                    <span dangerouslySetInnerHTML={{ __html: detail.text }} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
