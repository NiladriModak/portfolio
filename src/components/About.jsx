import React from "react";
import pic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="border-b border-neutral-600 p-2">
      <h1 className="mx-20 mt-20 text-center text-4xl tracking-tight">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-1/2 my-12 px-8"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <img className="w-2/3 rounded-xl" src={pic} alt="About me" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 my-12 px-8 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center lg:mt-16 lg:justify-start"
          >
            <div className=" h-full flex justify-center items-center">
              {ABOUT_TEXT}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
