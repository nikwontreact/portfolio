import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "To-Do-App",
    description:
      "This is a simple To-Do App built with React, utilizing local storage to save tasks so they persist even after page refreshes. The app's user interface is styled with Tailwind CSS for a clean, modern look. Users can add, delete, and mark tasks as completed, all while ensuring their tasks are stored locally for future access.",
    image: "https://github.com/nikwontreact/portfolio/blob/main/public/1.png?raw=true",
    technologies: ["React", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Weather App",
    description:
      "This Weather App is built with React and styled using Tailwind CSS for a sleek and responsive design. It integrates with the OpenWeather API to provide real-time weather data for any location. Users can search for a city to view current weather conditions, including temperature, humidity, and wind speed. The app is designed for simplicity and usability, delivering up-to-date weather information in a clean, user-friendly interface.",
    image: "../../public/2.png",
    technologies: ["React", "Tailwind CSS", "Vercel","Material UI","React Icons"],
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website showcases my skills and projects as a Frontend Developer. Built with React and styled using Tailwind CSS, it features a clean, responsive design optimized for all devices. The site highlights my expertise in JavaScript, React, Next.js, and Node.js, and includes projects like a weather app, to-do app, and more. Each project demonstrates my ability to create functional, user-friendly web applications. Feel free to explore my work and get in touch",
    image: "../../public/3.png",
    technologies: ["React", "Tailwind", "Framer Motion","Vercel"],
  },
  
  
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className=" flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl  font-light md:text-6xl  text-white">
        My Projects
      </h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
