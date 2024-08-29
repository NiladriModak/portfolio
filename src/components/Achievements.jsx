import React from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
function Achievements() {
  return (
    <div className="flex flex-col items-center border-b border-neutral-600 p-20">
      <h1 className="mx-20 my-10 pb-6  text-4xl tracking-tight">
        <span className="text-neutral-500 mx-1">My</span>Achievements
      </h1>
      <div className="w-full flex flex-col flex-wrap justify-center items-center text-xl">
        <ul className=" w-full justify-center items-center">
          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2 flex-wrap mb-2 w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              href="https://leetcode.com/u/niladrimodak2001/"
              rel="noopener noreferrer"
              target="__blank"
              className="w-full lg:w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <SiLeetcode />
              </span>
              Leetcode
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="w-full lg:w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-orange-400 mx-2">Knight</span>
              at Leetcode with a max rating of 1877 among the top 5.11%
            </motion.h2>
          </li>

          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2 mb-2 flex-wrap w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
              href="https://codeforces.com/profile/niladrimodak2001"
              rel="noopener noreferrer"
              target="__blank"
              className="w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <SiCodeforces />
              </span>
              Codeforces
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
              className="w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-green-400 mx-2 ">Pupil</span>
              at Codeforces with a max rating of 1359
            </motion.h2>
          </li>

          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2 mb-2 flex-wrap w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              href="https://www.codechef.com/users/niladrimodak18"
              rel="noopener noreferrer"
              target="__blank"
              className="w-full lg:w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <SiCodechef />
              </span>
              Codechef
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="w-full lg:w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-cyan-400 mx-2 ">3*</span>
              at Codechef with a max rating of 1772
            </motion.h2>
          </li>

          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2 mb-2 flex-wrap w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
              href="https://www.hackerrank.com/certificates/f06d0d8a6f1d"
              rel="noopener noreferrer"
              target="__blank"
              className="w-full lg:w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <IoMdDownload />
              </span>
              Certified
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
              className="w-full lg:w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-purple-400 mx-2">
                Intermediate problem solving
              </span>
              at Hacker Rank
            </motion.h2>
          </li>

          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2  mb-2 flex-wrap w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2.4 }}
              href="https://www.hackerrank.com/certificates/748f22600850"
              rel="noopener noreferrer"
              target="__blank"
              className="w-full lg:w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <IoMdDownload />
              </span>
              Certified
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2.4 }}
              className="w-full lg:w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-yellow-400 mx-2">Basics of SQL</span>
              at Hacker Rank
            </motion.h2>
          </li>

          <li className="flex flex-col lg:justify-center lg:items-center lg:flex-row mb-6 lg:mb-2 mb-2 flex-wrap w-full">
            <motion.a
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 3 }}
              href="https://drive.google.com/file/d/1PXlQj2cVi_MG3ySVP6xvRhFZLSFt6nqh/view?usp=drive_link"
              rel="noopener noreferrer"
              target="__blank"
              className="w-full lg:w-1/4 mx-2 flex text-neutral-500"
            >
              <span className="mx-2 text-neutral-50">
                <IoMdDownload />
              </span>
              Certified
            </motion.a>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 3 }}
              className="w-full lg:w-2/4 mx-2 text-neutral-50 tracking-tight"
            >
              <span className="text-red-400 mx-2">Hack4Bengal</span>
              (hackathon) certificate of participation
            </motion.h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
