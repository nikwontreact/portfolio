import React from "react";
import { motion } from "framer-motion";
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
            src="https://imgs.search.brave.com/r_GRmU8iP-xVb5E1TDNssNhIOh4Rx3YRiN5rxJjcR3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRhLzY4/LzI3LzRhNjgyN2Yw/ZGYwMjIxMjNlOTM0/NDBjNjkyMWE3MGNh/LmpwZw"
            alt=""
            className="  w-[200px] cursor-pointer  rounded-full shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-indigo-600 md:w-[200px]"
          />
        </motion.div>

        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-4xl  font-light md:text-5xl">
            Nikhil Sode
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-xl   md:text-xl">
            Frontend Developer
          </h3>
          <p className="md:text-base text-pretty text-sm">
            I'm a skilled Frontend Developer with expertise in React, Next.js,
            Tailwind CSS, and JavaScript. I build responsive, user-friendly web
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
