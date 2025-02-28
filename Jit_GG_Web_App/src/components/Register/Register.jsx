import React from "react";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <section className="bg-[#E7E5E4]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container py-15 md:py-28"
      >
        <div className="flex flex-col justify-center">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-4xl text-blue-500 font-bold !leading-snug"
            >
              የጂአይቲ ግቢ ጉባኤ ማኅበራዊ ትስስር ገጾችን{" "}
              <span className="text-amber-400 font-bold">ይከታተሉ </span> ቤተሰብ ይሁኑ{" "}
              መንፈሳዊ ዕውቀትዎንም ያሳድጉ !
            </motion.h1>

            <div className="flex gap-7 py-5 pl-10">
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                href="https://t.me/jitgibigubae"
                className="group"
              >
                <RiTelegramFill className="text-6xl text-blue-500 group-hover:animate-bounce duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                href="#"
                className="group"
              >
                <AiFillInstagram className="text-6xl text-red-400 group-hover:animate-bounce duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                href="#"
                className="group"
              >
                <AiFillTikTok className="text-6xl text-black group-hover:animate-bounce duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                href="#"
                className="group"
              >
                <FaYoutube className="text-6xl text-red-400 group-hover:animate-bounce duration-200" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
