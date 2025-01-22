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

import chattyImg from '../../assets/project-images/chatty.png';

export function page() {
  return (
    <BackgroundBeamsWithCollision className="relative overflow-x-clip radient-to-b bg-gradient-to-t from-gray-900/20 to-gray-800/20">
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
const Skeleton = ({ image }: { image: StaticImageData | string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image src={image} alt="" className="object-center w-full h-full" />
  </div>
);
const items = [
  {
    title: "Chatty",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton image={chattyImg} />,
    icon: <MessageCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Codecraft",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tic-Tac-Toe",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Grid3x3 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Zephyr",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Metaverse Madness",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CodeSync",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bolt",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton image={chattyImg}/>,
    icon: <Car className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Weather App",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton image={chattyImg}/>,
    icon: <CloudSun className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dalle",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton image={chattyImg}/>,
    icon: <BotMessageSquare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modern Chair",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton image={chattyImg}/>,
    icon: <RockingChair className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Admin Dashboard",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton image={chattyImg}/>,
    icon: <SquareKanban className="h-4 w-4 text-neutral-500" />,
  },
];

export default page;
