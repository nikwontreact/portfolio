import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import shoppingCart from "../../public/projects/shoppingCart.png";
import portfolio from "../../public/projects/portfolio.png";
const projectData = [
  {
    title: "Shopping Cart",
    description:
      "This is a simple Shopping Cart built with React and FakeApi, utilizing local storage so items in cart persist even after page refreshes. The app's user interface is styled with Tailwind CSS for a clean, modern look. Users can add items to the cart, delete cart items.",
    image: shoppingCart,
    technologies: ["React", "Tailwind CSS", "axios", "motion", "react-dom"],
    url: "https://shoppingcartz.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website showcases my skills and projects as a Frontend Developer. Built with React and styled using Tailwind CSS, it features a clean, responsive design optimized for all devices. The site highlights my expertise in JavaScript, React, Next.js, and Node.js, and includes projects like a weather app, to-do app, and more. Each project demonstrates my ability to create functional, user-friendly web applications. Feel free to explore my work and get in touch",
    image: portfolio,
    technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
    url: "https://nikcodez.vercel.app/",
  },
  {
    title: "To-Do-App",
    description:
      "This is a simple To-Do App built with React, utilizing local storage to save tasks so they persist even after page refreshes. The app's user interface is styled with Tailwind CSS for a clean, modern look. Users can add, delete, and mark tasks as completed, all while ensuring their tasks are stored locally for future access.",
    image:
      "https://imgs.search.brave.com/Kd9QwPrW9clShao56ScV00ocam3V5fFAgEdDIrd-IZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXYudG8vZHlu/YW1pYy9pbWFnZS93/aWR0aD04MDAsaGVp/Z2h0PSxmaXQ9c2Nh/bGUtZG93bixncmF2/aXR5PWF1dG8sZm9y/bWF0PWF1dG8vaHR0/cHM6Ly9kZXYtdG8t/dXBsb2Fkcy5zMy5h/bWF6b25hd3MuY29t/L3VwbG9hZHMvYXJ0/aWNsZXMvMDB1cmdr/aTZsZjQyN3g0MjRm/ZXUuanBn",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    url: "",
  },
  {
    title: "Weather App",
    description:
      "This Weather App is built with React and styled using Tailwind CSS for a sleek and responsive design. It integrates with the OpenWeather API to provide real-time weather data for any location. Users can search for a city to view current weather conditions, including temperature, humidity, and wind speed. The app is designed for simplicity and usability, delivering up-to-date weather information in a clean, user-friendly interface.",
    image:
      "https://imgs.search.brave.com/pGXZp03imHvrlmRKeYPnh6-wb-ZX2IxExuTpPmnaygM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXYudG8vZHlu/YW1pYy9pbWFnZS93/aWR0aD04MDAsaGVp/Z2h0PSxmaXQ9c2Nh/bGUtZG93bixncmF2/aXR5PWF1dG8sZm9y/bWF0PWF1dG8vaHR0/cHM6Ly9kZXYtdG8t/dXBsb2Fkcy5zMy5h/bWF6b25hd3MuY29t/L2kvYThjZGJjNnA5/ZGtjd3A5NGlkemMu/cG5n",
    technologies: [
      "React",
      "Tailwind CSS",
      "Vercel",
      "Material UI",
      "React Icons",
    ],
    url: "",
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
          className="w-full cursor-pointer border-2 border-gray-600 rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
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

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-2 text-white hover:underline"
            >
              visit <GoArrowUpRight />
            </a>
          ) : (
            <></>
          )}
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
