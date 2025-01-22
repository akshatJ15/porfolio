"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  MessageCircle,
  Blocks,
  Grid3x3,
  Zap,
  Earth,
  Code,
  Car,
  CloudSun,
  BotMessageSquare,
  RockingChair,
  SquareKanban,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import codeCraftImg from "../../assets/project-images/codecraft.png";
import zephyrImg from "../../assets/project-images/zephyr.png";
import boltImg from "../../assets/project-images/bolt.png";
import chattyImg from "../../assets/all-projects/chatty.png";
import dashboardImg from "../../assets/project-images/dashboard.png";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import StarIcon from "../../assets/icons/star.svg";

export default function Page() {
  return (
    <BackgroundBeamsWithCollision className="relative overflow-x-clip radient-to-b bg-gradient-to-t from-gray-900/20 to-gray-800/20 font-serif">
      <section
        className="flex flex-col items-center justify-center mx-11 my-10 md:my-28"
        id="home"
      >
        <div className="flex flex-col items-center justify-center px-[15vw] md:px-[15vh] py-[2vh] relative w-fit">
          <motion.h1
            className={`text-primary-green text-6xl md:text-[8.7vw] bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent`}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            Play.
          </motion.h1>
          <motion.div
            className="absolute right-0 top-0 star w-[60px] h-[60px]"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ duration: 1, ease: "backInOut", delay: 0.3 }}
          >
            <StarIcon className="size-32 text-emerald-300 scale-[60%] md:scale-100" />
          </motion.div>
        </div>
        <motion.p
          className="text-base md:text-xl text-primary-green max-w-[700px] text-center mt-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
        >
          A collection of tools and sites I&apos;ve created, designed to be
          helpful, fun, & sometimes just a little bit weird.
        </motion.p>
      </section>

      <div className="relative  px-10 mt-40 overflow-x-clip font-serif">
        <BentoGrid className="lg:max-w-4xl mx-auto pb-60">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
        <div
          className="absolute h-[500px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"
        ></div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
const Skeleton = ({ image, icon }) => (
  <div className="flex-1 min-h-[6rem] rounded-xl radial-gradient bg-gradient-to-b from-gray-900/20 to-gray-800/20 flex justify-center items-center">
    {/* {React.createElement(icon, { className: "h-9 w-9 text-white" })} */}
    {/* <Image src={image} alt="" className="object-contain w-full h-full " /> */}
  </div>
);
const items = [
  {
    title: "Chatty",
    description: "MongoDb , Express.js , React.js , TailwindCSS , Socket.io",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <MessageCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Codecraft",
    description: "Next.js , TailwindCSS , Convex , TypeScript",
    header: <Skeleton image={codeCraftImg} icon={MessageCircle} />,
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tic-Tac-Toe",
    description: "HTML , CSS , JavaScript",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <Grid3x3 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Zephyr",
    description: "Next.js , TailwindCSS , Convex , TypeScript",
    header: <Skeleton image={zephyrImg} icon={MessageCircle} />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Metaverse Madness",
    description: "React.js , TailwindCSS , Frame Motion",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CodeSync",
    description: "Next.js , TailwindCSS , Convex ",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bolt",
    description: "MongoDb , Express.js , React.js , TailwindCSS , Socket.io",
    header: <Skeleton image={boltImg} icon={MessageCircle} />,
    icon: <Car className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Weather App",
    description: "Node.js , HTML , TailwindCSS",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dalle",
    description: "React.js , TailwindCSS , Express.js ,  MongoDB",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <BotMessageSquare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modern Chair",
    description: "HTML , CSS",
    header: <Skeleton image={chattyImg} icon={MessageCircle} />,
    icon: <RockingChair className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Admin Dashboard",
    description: "React.js , TailwindCSS",
    header: <Skeleton image={dashboardImg} icon={MessageCircle} />,
    icon: <SquareKanban className="h-4 w-4 text-neutral-500" />,
  },
];
