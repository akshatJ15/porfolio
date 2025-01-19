"use client";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main>
      <section
        className="flex flex-col items-center justify-center mx-11 my-10 md:my-28"
        id="home"
      >
        <div className="flex flex-col items-center justify-center px-[15vw] md:px-[15vh] py-[2vh] relative w-fit">
          <motion.h1
            className={` text-primary-green text-6xl md:text-[8.7vw] font-serif`}
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
          ></motion.div>
        </div>
        <motion.p
          className="text-base md:text-xl text-primary-green max-w-[700px] text-center mt-8 tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
        >
          A collection of tools and sites I&apos;ve created, designed to be
          helpful, fun, & sometimes just a little bit weird.
        </motion.p>
      </section>

      <motion.section
        className="mx-11"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.4 }}
      >
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 700: 1, 800: 2, 1100: 3 }}
        >
          <Masonry gutter="1.75rem" sequential>
            <a
              href="https://chat-it-temp.vercel.app/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl py-2 px-8 flex items-center justify-center min-h-[9.5rem] "
            >
              <div className="flex justify-between items-center">
                <div className="h-full flex flex-col flex-1 justify-center py-3 md:pr-2 md:py-0">
                  <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                    Chatty
                  </h4>
                  <p className="text-primary-green opacity-90">
                    {" "}
                    Join live chats instantly! Connect, converse, and engage in
                    real-time discussions on our dynamic platform.
                  </p>
                </div>
                <Image
                  src="/chatIcon.png"
                  width={100}
                  height={0}
                  alt="chatit"
                  className="flex-grow-0 flex-shrink-0 h-[100px] rounded-full"
                />
              </div>
            </a>
            <a
              href="https://quizzo-aksh.vercel.app/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl py-2 px-8 flex items-center justify-center min-h-[12rem] "
            >
              <div className="flex justify-between items-center">
                <div className="h-full flex flex-col flex-1 justify-center py-3 md:pr-2 md:py-0">
                  <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                    CodeCraft
                  </h4>
                  <p className="text-primary-green opacity-90">
                    {" "}
                    A multiplayer quiz platform where you create rooms,
                    challenge friends, and test your knowledge on any topic.
                    Powered by Gemini for endless trivia fun!
                  </p>
                </div>
                <Image
                  src="/quizzo.png"
                  width={100}
                  height={0}
                  alt="quizzo"
                  className="flex-grow-0 flex-shrink-0 h-[100px] rounded-full"
                />
              </div>
            </a>
            <a
              href="https://metaversus-akshwalia.vercel.app"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center min-h-[9.5rem] "
            >
              <div className="flex justify-between items-center py-3 md:pr-2 md:py-0">
                <div className="h-full flex flex-col flex-1 justify-center">
                  <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                    Zephyr
                  </h4>
                  <p className="text-primary-green opacity-90">
                    {" "}
                    An immersive frontend project that transports you beyond
                    reality using Next.js, Tailwind CSS, and Framer Motion.
                  </p>
                </div>
                <Image
                  src="/planet.png"
                  width={150}
                  height={150}
                  alt="greatball"
                  className="flex-grow-0 flex-shrink-0 -mr-7"
                />
              </div>
            </a>
            <a
              href="https://akshwalia.github.io/calculator/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-2 rounded-3xl p-8 relative overflow-hidden min-h-[9.5rem] "
            >
              <div className="min-h-[250px] md:h-auto">
                <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                  Calculator
                </h4>
                <p className="text-primary-green opacity-90 mb-3">
                  {" "}
                  Effortless calculations await! Crunch numbers swiftly on our
                  user-friendly online calculator.
                </p>
                <Image
                  src="/calculator.png"
                  width={200}
                  height={250}
                  alt="calculator"
                  className="flex-grow-0 flex-shrink-0 absolute left-0 right-0 ml-auto mr-auto"
                />
              </div>
            </a>
            <a
              href="https://akshwalia.github.io/weather/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-2 rounded-3xl p-8 relative overflow-hidden min-h-[9.5rem] "
            >
              <div className="min-h-[250px] md:h-auto">
                <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                  Weather App
                </h4>
                <p className="text-primary-green opacity-90 mb-3">
                  {" "}
                  Get real-time weather updates, forecasts, and conditions for
                  any location at your fingertips. Your go-to source for
                  accurate weather info on the go!
                </p>
                <Image
                  src="/weather.png"
                  width={400}
                  height={250}
                  alt="weather"
                  className="flex-grow-0 flex-shrink-0 absolute left-0 right-0 ml-auto mr-auto"
                />
              </div>
            </a>
            <a
              href="http://where-pikachu.vercel.app/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center min-h-[9.5rem] "
            >
              <div className="flex justify-between items-center py-3 md:pr-2 md:py-0">
                <div className="h-full flex flex-col flex-1 justify-center">
                  <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                    Where&apos;s Pikachu
                  </h4>
                  <p className="text-primary-green opacity-90">
                    {" "}
                    Scan the crowded image, spot the requested Pokemon, and test
                    your eye for detail!
                  </p>
                </div>
                <Image
                  src="/greatball.png"
                  width={100}
                  height={0}
                  alt="greatball"
                  className="flex-grow-0 flex-shrink-0 h-[100px]"
                />
              </div>
            </a>
            <a
              href="https://pokemon-memory-card.vercel.app/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl flex justify-between py-2 px-8 items-center min-h-[9.5rem] "
            >
              <div className="flex justify-between items-center py-3 md:pr-2 md:py-0">
                <div className="h-full flex flex-col flex-1 justify-center">
                  <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-3">
                    Pokémemo
                  </h4>
                  <p className="text-primary-green opacity-90">
                    {" "}
                    Gotta Remember &apos;Em All! Can You Uncover &apos;Em
                    Without A Second Poke?
                  </p>
                </div>
                <Image
                  src="/pokeball.png"
                  width={110}
                  height={0}
                  alt="pokeball"
                  className="flex-grow-0 flex-shrink-0 h-[110px]"
                />
              </div>
            </a>
            <a
              href="https://akshwalia.github.io/tic-tac-toe/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1.5 md:flex-1 xl:flex-1.5 rounded-3xl p-8 relative overflow-hidden min-h-[9.5rem] "
            >
              <div className="min-h-[200px] md:h-auto ">
                <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                  Tic-Tac-Toe
                </h4>
                <p className="text-primary-green opacity-90 mb-3">
                  {" "}
                  Compete with friends in Tic Tac Toe online! Enjoy a timeless
                  game, challenge pals, and strategize for victory on our
                  interactive platform.
                </p>
                <Image
                  src="/tictactoe2.png"
                  width={200}
                  height={250}
                  alt="tictactoe"
                  className="flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto"
                />
              </div>
            </a>
            <a
              href="https://akshwalia.github.io/Etch-a-sketch/"
              target="_blank"
              className="projectcard bg-[#ffffff60] flex-1 rounded-3xl p-8 relative overflow-hidden min-h-[9.5rem] "
            >
              <div className="min-h-[200px] md:h-auto ">
                <h4 className="font-bold text-[19px] md:text-xl text-primary-green mb-2">
                  Etch-a-sketch
                </h4>
                <p className="text-primary-green opacity-90 mb-3">
                  {" "}
                  Pixel art unleashed!
                </p>
                <Image
                  src="/etchasketch.png"
                  width={200}
                  height={250}
                  alt="tictactoe"
                  className="flex-grow-0 flex-shrink-0 absolute rounded-lg left-0 right-0 ml-auto mr-auto"
                />
              </div>
            </a>
          </Masonry>
        </ResponsiveMasonry>
      </motion.section>
    </main>
  );
};

export default page;
