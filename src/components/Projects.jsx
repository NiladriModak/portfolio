import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
function Projects() {
  const container = (delay, init) => ({
    hidden: {
      x: init,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, delay: delay },
    },
  });
  return (
    <div className="flex flex-col items-center border-b border-neutral-600  w-full">
      <h1 className="mx-10 my-10 text-center  text-4xl tracking-tight w-full">
        <span className="text-neutral-500 mx-1">My</span>Projects
      </h1>
      <div className="text-neutral-50  w-full ">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 h-fit border border-neutral-600 p-3  flex flex-wrap w-full"
          >
            <motion.div
              variants={container(0.5, -200)}
              initial="hidden"
              whileInView="visible"
              className="w-full h-full  flex justify-center items-center p-10  lg:max-w-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-full h-full "
              />
            </motion.div>
            <motion.div
              variants={container(0.5, 200)}
              initial="hidden"
              whileInView="visible"
              className="w-full flex flex-col flex-wrap  lg:mr-10 lg:px-20 items-center lg:items-start max-w-xl"
            >
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="__blank"
                className="w-full mb-9 lg:text-2xl text-xl text-wrap"
              >
                {project.title}
              </a>
              <a
                className="border border-neutral-500 p-2 sm:text-2/4 mb-3 text-wrap"
                href={project.github}
                target="__blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <p className="w-full mb-9 ">{project.description}</p>
              <div className="flex flex-wrap">
                <p className="p-2">TECHSTACK - </p>
                {project.technologies.map((items, index) => (
                  <p
                    index={index}
                    className="mx-2 p-2 border border-neutral-400 rounded"
                  >
                    {items}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
