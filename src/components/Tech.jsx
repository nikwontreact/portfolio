import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoReact,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoGithub,
  BiLogoBootstrap,
  BiLogoNodejs,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className=" flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoReact className=" cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoJavascript className=" cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoPython className=" cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5}}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoHtml5 className=" cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5}}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoGithub className=" cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoTailwindCss className=" cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5}}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoBootstrap className=" cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <BiLogoNodejs className=" cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-6xl"
        >
          <RiNextjsFill className=" cursor-pointer text-[80px] text-gray-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
