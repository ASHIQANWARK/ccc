import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sneha Kapoor",
    role: "Career Counsellor",
    message:
      "The mentorship and collaborative spirit at Career Counsellor Consortium have helped me reimagine my impact as a counselor. It’s where visionaries unite to push boundaries and grow together…",

  },
  {
    name: "Ravi Mehta",
    role: "Career Counsellor",
    message:
      "Joining the Consortium was a game-changer. I went from working in isolation to being surrounded by a support system that actually gets what I do—and helps me do it better every day.",

  },
  {
    name: "Ananya Iyer",
    role: "Career Counsellor",
    message:
      "I found not just a network, but a family. The insights, resources, and constant encouragement from fellow members have truly elevated my counseling practice.",
 
  },
  {
    name: "Vikram Desai",
    role: "Career Counsellor",
    message:
      "Every session, every workshop at the Consortium pushes me to grow. It’s more than a platform—it’s a movement for counsellors who believe in real change.",

  },
  {
    name: "Fatima Siddiqui",
    role: "Career Counsellor",
    message:
      "The Career Counsellor Consortium helped me scale my practice and build lasting relationships with other professionals. It's where passion meets purpose.",

  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="relative py-24 px-4 text-white bg-cover bg-center"

    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          Success Stories
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 text-center shadow-xl max-w-3xl mx-auto">
               
                <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed mb-6">
                  "{item.message}"
                </p>
                <h4 className="text-xl md:text-2xl font-semibold text-yellow-400">{item.name}</h4>
                <p className="text-sm md:text-base text-gray-300">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;