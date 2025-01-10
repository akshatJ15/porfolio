"use client";
import Image from "next/image";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg";
import chatty from "../assets/project-images/chatty.png";
import codecraft from "../assets/project-images/codecraft.png";
import weather from "../assets/project-images/weather.png";
import dashboard from "../assets/project-images/dashboard.png";
import bolt from "../assets/project-images/bolt.png";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    company: "React-js , Express-js , MongoDB",
    title: "Chatty",
    results: [
      { title: "Real-time messaging feature" },
      { title: "Socket-io Usage" },
      { title: "Deployed on Render" },
    ],
    link: "https://chatty-7foh.onrender.com/",
    git: "https://github.com/akshatJ15/Chatty",
    image: chatty,
  },
  {
    company: "Next-js , Tailwind-css , Typescript",
    title: "CodeCraft",
    results: [
      { title: "Can compile upto 10 languages" },
      { title: "Uses Piston Api" },
      { title: "Deployed on Vercel" },
    ],
    link: "https://codecraft-tau-lemon.vercel.app/",
    git: "https://github.com/akshatJ15/Code-Craft",
    image: codecraft,
  },
  {
    company: "React-js , Tailwind-css , Framer-motion",
    title: "React Dashboard",
    results: [
      { title: "Deployed on Vercel" },
      { title: "Responsive" },
      { title: "Uses Charty and framer motion" },
    ],
    link: "https://react-admin-dashboard-theta-ten.vercel.app/",
    git: "https://github.com/akshatJ15/React-Admin-Dashboard",
    image: dashboard,
  },
  {
    company: "React-js, Express-js, MongoDB",
    title: "Bolt",
    results: [
      { title: "Uses Socket-io" },
      { title: "Real-time connection feature" },
      { title: "Deployed on Render" },
    ],
    link: "https://bolt-frontend.onrender.com/",
    git: "https://github.com/akshatJ15/Bolt/",
    image: bolt,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg mx-w-md mx-auto lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl 
                after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-2 border-white/20 sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <motion.div
                  className="lg:grid lg:grid-cols-2 gap-16"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xlmd:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => {
                        return (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm text-white/50 md:text-base"
                          >
                            <CheckIcon className="size-5" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="flex flex-col md:flex-row md:gap-4">
                      <a href={project.link}>
                        <button
                          className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 
                        transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white
                        hover:-translate-y-1 hover:scale-110
                        duration-300"
                        >
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <a href={project.git}>
                        <button
                          className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6
                        transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white
                        hover:-translate-y-1 hover:scale-110
                        duration-300"
                        >
                          <span>Github</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="relative ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
