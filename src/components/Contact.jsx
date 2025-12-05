import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Resume from "../../public/nikhilResume.pdf";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>
        <div className="flex items-center md:gap-10 gap-3">
          <div className="flex flex-col gap-5">
            <p className="text-center text-lg font-semibold text-gray-500">
              Send me an mail
            </p>
            <a
              href="mailto:nikhildebugs@gmail.com"
              className="text-nowrap rounded-lg border border-indigo-600 bg-black bg-opacity-50 px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl text-center"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-center  text-lg font-semibold text-gray-500">
              Download Resume
            </p>
            <a
              href="/nikhilResume.pdf"
              download={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nowrap rounded-lg border border-indigo-600 bg-black bg-opacity-50 px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl text-center"
            >
              Resume
            </a>
          </div>
        </div>
        <ul className="hidden md:flex gap-5">
          <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 bg-opacity-50 hover:text-blue-500 hover:opacity-100">
            <FaLinkedin className="rounded-lg" />
          </li>
          <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-gray-200 hover:opacity-100">
            <FaGithub />
          </li>

          <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <FaDiscord />
          </li>
          {/* <li className="cursor-pointer text-4xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
          <FaSpotify />
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
