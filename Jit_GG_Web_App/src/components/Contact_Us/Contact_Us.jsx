import React from "react";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <section>
      <div className="container pl-15 py-1 md:py-24 grid grid-cols-1 md:grid-cols-2 gap 8 space-y-2 md:space-y-0">
        <div className="flex flex-col gap-6 py-40">
          <motion.a
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-4 p-6 bg-[#083765] font-bold rounded-2xl hover:bg-blue-800 duration-300 hover:shadow-2xl object-cover drop-shadow"
          >
            <FaLocationDot className="text-[#FFFB15] text-3xl" />
            <p className="text-2xl text-[#FFFB15]">
              {" "}
              የጅማ ፈለገ ሰላም ቅዱስ ገብርኤል ቤተ ክርስቲያን አድራሻ{" "}
            </p>
          </motion.a>

          <motion.a
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-4 p-6 bg-[#083765] rounded-2xl hover:bg-blue-800 duration-300 hover:shadow-2xl object-cover drop-shadow"
          >
            <FaLocationDot className="text-[#FFFB15] text-3xl" />
            <p className="text-2xl text-[#FFFB15]"> የ ጂአይቲ ግቢ አድራሻ </p>
          </motion.a>

          <motion.a
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-4 p-6 bg-[#083765] rounded-2xl hover:bg-blue-800 duration-300 hover:shadow-2xl object-cover drop-shadow"
          >
            <FaPhoneAlt className="text-[#FFFB15] text-3xl" />
            <p className="text-2xl text-[#FFFB15]"> +251-900-00-00-00 </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container py-15 md:py-28"
        >
          <div className="flex flex-col justify-center">
            <div className="bg-white text-center space-y-4 lg:max-w-[430px] mx-auto rounded-2xl items-center justify-center font-bold p-4 py-7 object-cover drop-shadow ">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-4xl text-[#083765] font-bold !leading-snug"
              >
                የጂአይቲ ግቢ ጉባኤ ማኅበራዊ ትስስር ገጾችን ይከታተሉ ቤተሰብ ይሁኑ መንፈሳዊ ዕውቀትዎንም ያሳድጉ !
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
                  href="https://www.instagram.com/jit_gibi_gubae"
                  className="group"
                >
                  <AiFillInstagram className="text-6xl text-[#E9683D] group-hover:animate-bounce duration-200" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  href="https://www.tiktok.com/@jit_gibi_gubae"
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
      </div>
    </section>
  );
};

export default Register;
