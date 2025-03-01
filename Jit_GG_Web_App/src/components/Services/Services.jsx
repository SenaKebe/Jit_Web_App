import React from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { PiBooksFill } from "react-icons/pi";
import { FaInfo } from "react-icons/fa";
import { motion } from "framer-motion";

const ServiceData = [
  {
    id: 1,
    title: " ኮርስ ",
    link: "#",
    icon: <SiGoogleclassroom />,
    delay: 0.2,
  },
  {
    id: 2,
    title: " ዕቅበተ እምነት ",
    link: "#",
    icon: <FaQuestion />,
    delay: 0.3,
  },
  {
    id: 3,
    title: " መዝሙር ",
    link: "#",
    icon: <FaMicrophone />,
    delay: 0.4,
  },
  {
    id: 4,
    title: " ቤተ - መጻሕፍት ",
    link: "#",
    icon: <PiBooksFill />,
    delay: 0.5,
  },
  {
    id: 5,
    title: " ወቅታዊ የቤተ ክርስቲያን መረጃ ",
    link: "#",
    icon: <FaInfo />,
    delay: 0.6,
  },
  {
    id: 6,
    title: " ወቅታዊ የቤተ ክርስቲያን መረጃ ",
    link: "#",
    icon: <FaInfo />,
    delay: 0.7,
  },
  {
    id: 7,
    title: " ወቅታዊ የቤተ ክርስቲያን መረጃ ",
    link: "#",
    icon: <FaInfo />,
    delay: 0.8,
  },
  {
    id: 8,
    title: " ኮርስ ",
    link: "#",
    icon: <SiGoogleclassroom />,
    delay: 0.9,
  },
  {
    id: 9,
    title: " ዕቅበተ እምነት ",
    link: "#",
    icon: <FaQuestion />,
    delay: 1.0,
  },
  {
    id: 10,
    title: " መዝሙር ",
    link: "#",
    icon: <FaMicrophone />,
    delay: 1.1,
  },
  {
    id: 11,
    title: " ቤተ - መጻሕፍት ",
    link: "#",
    icon: <PiBooksFill />,
    delay: 1.2,
  },
  {
    id: 12,
    title: " ወቅታዊ የቤተ ክርስቲያን መረጃ ",
    link: "#",
    icon: <FaInfo />,
    delay: 1.3,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10 pl-15">
          የምንሰጣቸው አገልግሎቶች
        </h1>

        <div className="pl-15 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-[#083765]">
          {ServiceData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#FFFB15] hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
