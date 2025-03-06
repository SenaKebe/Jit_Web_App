import React from "react";
import ProfilePicture from "../../assets/profile_picture.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container pl-15 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap 8 space-y-6 md:space-y-0">
        {/* Banner Text   */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[550px]">
            <h1 className="text-4xl font-bold !leading-snug">
              የ ጂአይቲ ግቢ ጉባኤ ማኅበረሰብን አሁኑኑ ይቀላቀሉ!{" "}
            </h1>
            <div className="flex gap-5 py-5 pl-5">
              <p className="text-2xl text-[#083765] font-bold">
                አሁን ላይ የግቢ ተማሪ ከሆኑ
              </p>
              <FaHandPointRight className="text-[#083765] hover:text-[#FFFB15] text-3xl" />
              <button className="primary-btn"> Register Now! </button>
            </div>

            <div className="flex gap-5 pl-5">
              <p className="text-2xl text-[#083765] font-bold">
                አሁን ላይ የግቢ ተማሪ ካልሆኑ{" "}
              </p>
              <FaHandPointRight className="text-[#083765] hover:text-[#FFFB15] text-3xl" />
              <button className="primary-btn "> Register Now! </button>
            </div>
          </div>
        </motion.div>

        {/* Bannner Image  */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={ProfilePicture}
            alt=""
            className="w-[450px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
