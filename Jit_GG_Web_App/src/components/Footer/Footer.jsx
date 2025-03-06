import React from "react";
import { motion } from "framer-motion";
import { RiTelegramFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-stone-200 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4 pl-15">
          {/* first Section  */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-4xl font-bold text-[#083765]">JIT ግቢ ጉባኤ</h1>
            <p className="text-dark2">
              የጅማ ዩንቨርስቲ ቴክኖሎጂ ኢንስቲትዩት ግቢ ግቢ ጉባኤ በጂአይቲ ግቢ ለሚገኙ ከ1ኛ ዓመት - 5ኛ ዓመት
              ድረስ ያሉ የግቢ ኦርቶዶክሳውያን ተማሪዎችን እንዲሁም ተመርቀው የወጡ የግቢ ጉባኤ ተማሪዎችን በአንድነት
              የያዘ የማኅበረ ቅዱሳን አንዱ ክፍል ሲሆን ይህ ድኅረ-ገፅም ባለቤትነቱ ሙሉ ለሙሉ የጂአይቲ ግቢ ጉባኤ
              ሲሆን የግቢ ጉባኤው አገልግሎት መስጫ አንዱ አካል ነው፡፡
            </p>
          </div>

          {/* second Section  */}

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-[#083765]">
                የምንሰጣቸው አገልግሎቶች
              </h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    ዕቅበተ እምነት
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    ኮርስ
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    ወቅታዊ መረጃ
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    መዝሙር
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    ቤተ-መጽሐፍት
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-[#083765]">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-[#083765] hover:font-bold duration-200">
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* third Section  */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-[#083765]">Get In Touch</h1>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Your email"
                className="p-3 rounded-2xl bg-white w-full py-2 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="primary-btn py-2 px-6 rounded-2xl ">Go</button>
            </div>

            {/* social icons  */}

            <div className="flex gap-7 py-5">
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                href="https://t.me/jitgibigubae"
                className="group"
              >
                <RiTelegramFill className="text-4xl text-blue-500 hover:scale-150 duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                href="https://www.instagram.com/jit_gibi_gubae"
                className="group"
              >
                <AiFillInstagram className="text-4xl text-[#E9683D] hover:scale-150  duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                href="https://www.tiktok.com/@jit_gibi_gubae"
                className="group"
              >
                <AiFillTikTok className="text-4xl text-black hover:scale-150  duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                href="#"
                className="group"
              >
                <FaYoutube className="text-4xl text-red-400 hover:scale-150   duration-200" />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                href="#"
                className="group"
              >
                <TbWorld className="text-4xl text-[#083765] hover:scale-150  duration-200" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
