import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../public/profile.png";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src= {profilePic}
            alt=""
            className="  w-[190px] cursor-pointer  rounded-full shadow-md shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-indigo-600 md:w-[180px]"
          />
        </motion.div>

        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-4xl  font-light md:text-5xl hover:opacity-100">
            Nikhil Sode
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-xl   md:text-xl hover:opacity-100">
            Frontend Developer
          </h3>
          <p className="md:text-base text-pretty text-sm opacity-80 hover:opacity-100">
            I'm a skilled Frontend Developer with expertise in React, Tailwind
            CSS and JavaScript. I build responsive, user-friendly web
            applications and enjoy crafting seamless interfaces. With experience
            in Node.js and Python, I bridge the gap between frontend and backend
            for optimal performance. Let’s create something amazing!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
