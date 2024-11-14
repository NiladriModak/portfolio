import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pp.png";
import { motion } from "framer-motion";
function Hero() {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });
  return (
    <div className="text-neutral-50 border-b border-neutral-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col   items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin sm:text-start text-center tracking-tight lg:mt-16 lg:text-8xl sm:ml-10 "
            >
              NILADRI MODAK
            </motion.h1>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-50 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent sm:ml-10 text-center sm:text-start"
            >
              Full Stack Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mx-4 px-2 lg:mx-0 max-w-xl py-6 font-light tracking-tighter lg:ml-10"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-2/3 p-6 lg:p-2 rounded-xl"
              src={profilePic}
              alt="Profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
