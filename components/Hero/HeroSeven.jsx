'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSeven=()=>{
    return (
      <>
        <section>
          {/* Section 1 HEADING */}
          <section className="relative flex flex-col items-center justify-center py-16 bg-white">
            {/* Background word */}
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              HASH
            </h1>

            {/* Foreground text */}
            <div className="relative text-center">
              <p className="text-[#f9b84f] font-semibold text-2xl mb-2 tracking-[1px]">
                MISMANAGEMENT
              </p>
              <h2 className="text-4xl md:text-5xl tracking-[1px] font-bold text-gray-800">
                Meet Our Mismanagers
              </h2>
            </div>
          </section>

          <div className="bg-yellow-50 flex flex-col gap-6 min-h-screen items-center justify-center py-12 px-[1rem] lg:px-[3rem] w-full">
            {/* FIRST 4 misma */}
            <motion.div
              className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 justify-center p-8 rounded-2xl shadow-lg" //
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* A */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/gm26.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Grand Master
                  </p>
                  <p className="text-gray-600">Fuckimbo</p>
                </div>
              </div>

              {/* b */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/mom.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Religious Advisor
                  </p>
                  <p className="text-gray-600">Neneh Korraw</p>
                </div>
              </div>

              {/* c */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/warden.svg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Circle Warden
                  </p>
                  <p className="text-gray-600">Leftover</p>
                </div>
              </div>

              {/* d */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/smooth.svg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                  Master of Music
                  </p>
                  <p className="text-gray-600">Smooth Operator </p>
                </div>
              </div>
            </motion.div>

            {/* SECOND 4 misma */}
            <motion.div
              className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 justify-center p-8 rounded-2xl shadow-lg" //
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* A */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/flash.jpg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Cash
                  </p>
                  <p className="text-gray-600">Sleeping Pucci</p>
                </div>
              </div>

              {/* b */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/borbor.svg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Beer
                  </p>
                  <p className="text-gray-600">Borbor Tumba</p>
                </div>
              </div>

              {/* c */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/haberdasher.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Haberdasher
                  </p>
                  <p className="text-gray-600">Hash Kush</p>
                </div>
              </div>

              {/* d */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
                <Image
                  src="/misma/discipline.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Discipline
                  </p>
                  <p className="text-gray-600">Presidential Virus</p>
                </div>
              </div>
            </motion.div>

            {/* THIRD 4 misma */}
            <motion.div
              className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 justify-center p-8 rounded-2xl shadow-lg" //
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* A */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/holee.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">On-Sec</p>
                  <p className="text-gray-600">Put It In The Hole</p>
                </div>
              </div>

              {/* b */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/registrar.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Registrar
                  </p>
                  <p className="text-gray-600">Rasta Plasta</p>
                </div>
              </div>

              {/* c */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/welfare.png"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Welfare 
                  </p>
                  <p className="text-gray-600">Little Fox</p>
                </div>
              </div>

              {/* d */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/dick-flash.svg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Flash
                  </p>
                  <p className="text-gray-600">Dick Rental</p>
                </div>
              </div>
            </motion.div>


            {/* THIRD 4 misma */}
            <motion.div
              className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 justify-center p-8 rounded-2xl shadow-lg" //
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* A */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/ftf.jpg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">Trail Master</p>
                  <p className="text-gray-600">Fuck The Teacher</p>
                </div>
              </div>

              {/* b */}
              <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/web-master.svg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Web Master
                  </p>
                  <p className="text-gray-600">Pucci Engineer</p>
                </div>
              </div>

              {/* c */}
              {/* <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    -
                  </p>
                  <p className="text-gray-600"></p>
                </div>
              </div> */}

              {/* d */}
              {/* <div className="flex flex-col h-full w-full items-center text-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <Image
                  src="/misma/flash.jpg"
                  width={100}
                  height={100}
                  alt="image of hasher"
                  className=" h-full w-full rounded-[12px] mb-4"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Hash Flash
                  </p>
                  <p className="text-gray-600">Sleeping Pucci</p>
                </div>
              </div> */}
            </motion.div>

          </div>
        </section>
      </>
    );


};
export default HeroSeven;