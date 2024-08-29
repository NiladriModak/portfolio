import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoPrism } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
function Technologies() {
  const iconVariants = (duration) => ({
    initial: {
      y: -10,
    },
    animate: {
      y: [-20, 20],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="flex flex-col items-center border-b border-neutral-600 p-20">
      <h1 className="mx-20 my-10  text-4xl tracking-tight">
        <span className="text-neutral-500 mx-1">My</span>Technologies
      </h1>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <IoPrism className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <TbBrandCpp className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <FaJava className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400"
        >
          <SiMysql className="text-7xl text-white-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
