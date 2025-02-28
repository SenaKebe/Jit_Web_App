import React from "react";
import GebrelChurch from "../../assets/Gebrel_church.jpg";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const Banner = () => {
  return (
    <section>
      <div className="container pl-15 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap 8 space-y-6 md:space-y-0">
        {/* Bannner Image  */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={GebrelChurch}
            alt=""
            className="w-[450px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text   */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-2xl font-bold text-blue-500 !leading-snug"
            >
              በጅማ ከተማ የጅማ ዩንቨርስቲ ቴክኖሎጂ ኢንስቲትዩት ግቢ ግቢ ጉባኤ የሚገኘው
              <span className="text-amber-300">
                {" "}
                ጅማ ፈለገ ሰላም ቅዱስ ገብርኤል ቤተ ክርስቲያን{" "}
              </span>{" "}
              ሲሆን በ ጂአይቲ ግቢ ውስጥ ያሉ ኦርቶዶክሳውያን ተማሪዎችን የእግዚአብሔርን ቃል እንዲማሩ እና
              እንዲያገለግሉ የሚያደርግ ግቢ ጉባኤ ነው፡፡
            </motion.h1>

            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-500 font-bold rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <GiTeacher className="text-amber-400 text-4xl" />
                <p className="text-2xl text-amber-400"> 10+ መንፈሳዊ ኮርሶች </p>
              </motion.div>

              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-blue-500 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdHomeRepairService className="text-amber-400 text-4xl" />
                <p className="text-2xl text-amber-400">
                  {" "}
                  8+ ዋና ዋና የአገልግሎት ክፍሎች{" "}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
