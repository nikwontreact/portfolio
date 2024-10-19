import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-4 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl md:text-lg transition-all duration-300 font-semibold  hover:opacity-100"
      >
        Nikhil Codes
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <FaLinkedin className="rounded-lg" />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100">
          <FaGithub />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <FaDiscord />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
          <FaSpotify />
        </li>
      </ul>

      {isOpen ? (
        <BiX onClick={menuOpen} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={menuOpen} className="block md:hidden text-4xl" />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[65px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border border-x-gray-800 bg bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            ></a>
          </ul>

          <ul className="flex flex-wrap gap-5 ">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
             <a href="https://www.linkedin.com/in/nikhil-sode/"><FaLinkedin className="rounded-lg" /></a> 
            </li>

            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100b">
              <FaGithub />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <FaDiscord />
            </li>
          
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
