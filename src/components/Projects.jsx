import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt deserunt sit consectetur eligendi quibusdam quasi, et quas dolores corrupti quisquam. Possimus, cumque. A eos, illum magni sed commodi blanditiis",
    image: "https://via.placeholder.com/200x200",
    technologies: ["React", "tailwind", "vercel"],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt deserunt sit consectetur eligendi quibusdam quasi, et quas dolores corrupti quisquam. Possimus, cumque. A eos, illum magni sed commodi blanditiis",
    image: "https://via.placeholder.com/200x200",
    technologies: ["React", "tailwind", "vercel"],
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt deserunt sit consectetur eligendi quibusdam quasi, et quas dolores corrupti quisquam. Possimus, cumque. A eos, illum magni sed commodi blanditiis",
    image: "https://via.placeholder.com/200x200",
    technologies: ["React", "tailwind", "vercel"],
  },
  {
    title: "Project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt deserunt sit consectetur eligendi quibusdam quasi, et quas dolores corrupti quisquam. Possimus, cumque. A eos, illum magni sed commodi blanditiis",
    image: "https://via.placeholder.com/200x200",
    technologies: ["React", "tailwind", "vercel"],
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
