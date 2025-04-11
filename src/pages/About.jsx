import { motion } from "framer-motion";
import {  FaBullseye, FaEye } from "react-icons/fa";
import img4 from "../assets/img4.jpg";
import img3 from "../assets/img3.jpg";
import logo from "../assets/logowhite.png";

export default function About() {
  return (
    <div id="about" className="max-w-6xl mx-auto px-6 pt-6 pb-16 space-y-16">
      {/* About Us */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center text-white rounded-3xl overflow-hidden p-10 md:p-16"
      >
        <div className="space-y-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3 heading-font">
            About
            <img
              src={logo}
              alt="Logo"
              className="h-18 w-auto inline-block"
            />
          </h2>

          <p className="text-lg text-gray-300">
            The{" "}
            <span className="font-semibold text-white">
              Career Counsellor Consortium (CCC)
            </span>{" "}
            is a vibrant and forward-thinking collective of seasoned career
            professionals committed to guiding individuals through pivotal
            career choices. By fostering a collaborative environment, CCC
            empowers its members to deliver impactful, informed, and
            future-ready career guidance. Our mission is rooted in elevating the
            standards of career counselling by providing access to resources,
            training, and a strong peer network that supports continuous growth
            and innovation in the field.
          </p>
        </div>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex flex-col-reverse md:flex-row items-center text-white rounded-3xl overflow-hidden"
      >
        <div className="p-10 md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold flex items-center gap-3 heading-font">
            <FaBullseye className="text-[#aabe39]" />
            Our Mission
          </h2>
          <ul className="list-disc pl-5 text-gray-300 text-lg space-y-4">
            <li>
              <span className="font-semibold text-white">
                Cultivating a Collaborative Community:
              </span>{" "}
              Foster a strong network of career counsellors who exchange
              insights, share best practices, and support one another in
              advancing the profession.
            </li>
            <li>
              <span className="font-semibold text-white">
                Empowering Through Continuous Learning:
              </span>{" "}
              Deliver high-impact training programs, workshops, and
              certifications that equip our members with the latest tools and
              techniques in career development.
            </li>
            <li>
              <span className="font-semibold text-white">
                Creating Meaningful Opportunities:
              </span>{" "}
              Open pathways for employment, entrepreneurship, and leadership,
              allowing members to expand their impact and grow professionally.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src={img4}
            alt="Mission"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative flex flex-col md:flex-row items-center text-white rounded-3xl overflow-hidden"
      >
        <div className="w-full md:w-1/2 relative">
          <img
            src={img3}
            alt="Vision"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="p-10 md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold flex items-center gap-3 heading-font">
            <FaEye className="text-[#aabe39]" />
            Our Vision
          </h2>
          <p className="text-lg text-gray-300">
            Our vision is to be the most trusted and influential global
            consortium for career counselling professionals — a hub where
            expertise, innovation, and human-centric guidance converge. We
            envision a future where every individual, regardless of background,
            has access to skilled guidance that empowers them to navigate their
            career path with clarity, confidence, and purpose.
          </p>
          <p className="text-md text-gray-400 italic heading-font">
            "Guiding careers, shaping futures — together, we lead with purpose."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
