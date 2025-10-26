"use client";
import React, { useState } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import GuessGame from "@/components/GuessGame";
import { GrGamepad } from "react-icons/gr";

const HeroEight = () => {
  const [showGame, setShowGame] = useState(false);

  const dockItems = [
    {
      src: "/sponsor/amstel.jpg",
      name: "Amstel Lager",
      href: "https://www.facebook.com/share/1LcvFmZSD7/?mibextid=wwXIfr",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      src: "/sponsor/np.jpg",
      name: "National Petroleum",
      href: "https://npgroup-ltd.com/sierraleone/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      src: "/sponsor/orange.jpg",
      name: "Orange Money",
      href: "https://www.orange.sl/en/orange-money.html",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      src: "/sponsor/tourism.jpg",
      name: "Ministry of Tourism and Cultural Affairs",
      href: "https://tourism.gov.sl/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      src: "/sponsor/uba.jpg",
      name: "United Bank of Africa",
      href: "https://www.ubagroup.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <>
      <section>
        {/* HEADING */}
        <section className="relative flex flex-col items-center justify-center py-16 bg-white">
          <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
            HASH
          </h1>

          <div className="relative text-center">
            <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
              HASHING
            </p>
            <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
              Meet Our Sponsors
            </h2>
          </div>
        </section>

        {/* Body of section of our SPONSOR */}
        <div className="bg-yellow-50 flex items-center justify-center py-12 px-[1rem] lg:px-[3rem] w-full">
          <div className="bg-gray-100 grid grid-cols-1 lg:flex items-center gap-4 justify-center">
            <Dock iconSize={80} className="gap-3 lg:gap-5">
              {dockItems.map((item, index) => (
                <DockIcon
                  key={index}
                  src={item.src}
                  name={item.name}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                />
              ))}
            </Dock>
          </div>
        </div>

        {/* sh4 hash game */}
        <div 
        id="game"
        className="relative z-10 my-1 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-16 bg-white overflow-hidden">
            {/* Localized background effect (dark variant for light bg) */}
            <ul className="background-dark">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              HASH
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
                THE ULTIMATE HASH GAME
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                ARE YOU ON?
              </h2>

              {/* Play Button */}
              <div>
                <div className="flex  justify-center pt-8">
                  <button
                    onClick={() => setShowGame(true)}
                    className="bg-[#f9b84f] cursor-pointer hover:bg-[#e3a63f] text-gray-700 hover:text-gray-900 font-semibold px-6 py-3 rounded-2xl transition-all flex items-center gap-2"
                  >
                    Press Play <GrGamepad className="animate-bounce text-2xl" />
                  </button>
                </div>

                <p className="text-base text-center pt-1 pb-8 ">
                  <i>How well do you know the hash? Press Play to find out</i>
                </p>

                {/* Game Modal */}
                {showGame && (
                  <div className="fixed inset-0 z-50 mt-24 flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="relative w-[90%] md:w-[500px] max-h-[85vh] overflow-y-auto bg-gray-900 text-white rounded-2xl p-4 shadow-xl">
                      <button
                        onClick={() => {
                          console.log("X button clicked - closing game");
                          setShowGame(false);
                        }}
                        className="absolute top-3 cursor-pointer right-4 text-gray-300 hover:text-white text-xl z-10"
                      >
                        ✖
                      </button>
                      <GuessGame onClose={() => setShowGame(false)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* swiperjs / body of Tourism section */}
          <section className="relative py-2 pt-32 bg-cover bg-green-900/80 text-gray-200 overflow-hidden">
            {/* Animated Floating Background */}
            <ul className="background">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </section>
        </div>

        {/* Play Button */}
        {/* <div className="flex  justify-center pt-8">
          <button
            onClick={() => setShowGame(true)}
            className="bg-[#f9b84f] cursor-pointer hover:bg-[#e3a63f] text-gray-700 hover:text-gray-900 font-semibold px-6 py-3 rounded-2xl transition-all flex items-center gap-2"
          >
            Press Play <GrGamepad className="animate-bounce text-2xl" />
          </button>
        </div>
        <p className="text-base text-center pt-1 pb-8 ">
          <i>How well do you know the hash? Press Play to find out</i>
        </p> */}
      </section>

      {/* Game Modal */}
      {/* {showGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="relative w-[90%] md:w-[500px] max-h-[85vh] overflow-y-auto bg-gray-900 text-white rounded-2xl p-4 shadow-xl">
          <button
              onClick={() => {
                console.log('X button clicked - closing game');
                setShowGame(false);
              }}
              className="absolute top-3 cursor-pointer right-4 text-gray-300 hover:text-white text-xl z-10"
            >
              ✖
            </button>
            <GuessGame onClose={() => setShowGame(false)} />
          </div>
        </div>
      )} */}
    </>
  );
};

export default HeroEight;
