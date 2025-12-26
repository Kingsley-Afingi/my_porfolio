import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Crypto Investment Platform",
      description:
        "A React + TypeScript web app for managing and tracking crypto investments. Features authentication, admin dashboard, and live chat with localStorage persistence.",
      image: "./images/grow.jpg",
      tech: ["React", "TypeScript", "TailwindCSS", "LocalStorage"],
      githubLink: "https://github.com/Kingsley-Afingi",
    },
    {
      id: 2,
      title: "Real Estate Listing App",
      description:
        "A responsive app where users can browse, post, and manage real estate listings using React, Node.js, and PostgreSQL.",
      image: "./images/menuAgent.svg",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      githubLink: "https://github.com/Kingsley-Afingi",
    },
    {
      id: 3,
      title: "Developer Hiring Portal",
      description:
        "A platform that connects developers with recruiters. Built with React and Express, featuring authentication, job filtering, and admin management.",
      image: "./images/showcase.jpg",
      tech: ["React","node.js", "Express", "TypeScript", "TailwindCSS"],
      githubLink: "https://workopia-react-frontend.vercel.app/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my work, skills, and projects with modern UI and responsive design using React and TailwindCSS.",
      image: "./images/king.jpg",
      tech: ["React", "TailwindCSS", "Vite","local storage"],
      githubLink: "https://github.com/Kingsley-Afingi",
    },
    {
      id: 5,
      title: "E-Commerce Store",
      description:
        "A modern e-commerce store with shopping cart, product filtering, and checkout experience built using React, TypeScript,",
      image: "./images/recipe6.webp",
      tech: ["Nextjs", "TailwindCSS", "typescript","supabase"],
      // demoLink: "#",
      githubLink: "https://recipe-app-pro.vercel.app/",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-6"id="projects">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-400">My Projects</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of the professional and personal projects I’ve worked on. Each one
          reflects my dedication to building modern, responsive, and user-focused web
          applications.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-800 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3 mb-4 justify-center lg:justify-start">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center lg:justify-start gap-4 mt-auto">
                  
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 border border-blue-700 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
