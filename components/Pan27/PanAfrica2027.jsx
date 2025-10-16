"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Award, Star } from 'lucide-react';
import PanAfricaNavbar from "./PanAfricaNavbar";
import Footer from "../Footer";
import Image from "next/image";

// Helper function to calculate countdown
const calculateTimeLeft = () => {
  const targetDate = new Date("2027-07-26T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

export default function PanAfricaPage() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [count1, setCount1] = useState(1247);
  const welcomeRef = useRef(null);
  const [balloonBurstId, setBalloonBurstId] = useState(0);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Observe the welcome heading section to trigger balloons when in view
  useEffect(() => {
    if (!welcomeRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // increment id to retrigger animation
            // Generate randomized beers on each trigger
            setBeers(() => {
              const count = 14; // increased by 6
              const arr = Array.from({ length: count }).map((_, i) => {
                const left = Math.floor(8 + Math.random() * 84); // 8% - 92%
                const size = Math.random();
                const clsSize = size < 0.35 ? 'sm' : size > 0.75 ? 'lg' : '';
                const delay = (Math.random() * 0.6).toFixed(2); // 0 - 0.6s
                const duration = (3 + Math.random() * 1.2).toFixed(2); // 3 - 4.2s
                return {
                  key: `${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`,
                  left: `${left}%`,
                  cls: `beer ${clsSize}`.trim(),
                  style: { animationDelay: `${delay}s`, animationDuration: `${duration}s` }
                };
              });
              return arr;
            });
            setBalloonBurstId((id) => id + 1);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(welcomeRef.current);
    return () => observer.disconnect();
  }, []);



  

  return (
    <>
      {/* Navbar PAN 2027 */}
      <PanAfricaNavbar />

      {/* main body of PAN 2027 */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen pt-32 bg-cover relative overflow-hidden bg-green-900/80 text-gray-200 ">
        {/* Animated Floating Background */}
        <ul className="background">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text & count down write up */}
        <div className="px-[1rem] lg:px-[3rem] z-10 relative">
          <div>
            <h1 className="text-center text-gray-100 font-black text-3xl uppercase">
              Count Down to{" "}
            </h1>
            <h1 className="text-center text-gray-100 font-black text-3xl uppercase">
              PAN Africa Hash 2027
            </h1>
          </div>

          {/* count down */}
          <div className="flex items-center px-[1rem] lg:px-[3rem] gap-3 justify-center mt-8  lg:gap-12">
             {/* Localized floating background for dark section */}
          <ul className="background">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
            {/* Days */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 mb-1 sm:mb-2">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 mb-1 sm:mb-2">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-600 mb-1 sm:mb-2">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 mb-1 sm:mb-2">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Seconds
              </div>
            </div>
          </div>
        </div>

        {/* widget section */}
        <div className="relative z-10 px-[1rem] lg:px-[3rem] my-10 overflow-hidden">
          {/* Localized floating background for dark section */}
          <ul className="background">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* 1. Pay your rego & show numbers of rego hasher +5 */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    1. Pay your rego
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Secure your spot for PAN Africa 2027.
                  </p>
                </div>
                <Award className="text-amber-500" size={28} />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-black text-green-700">+540</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Rego Hashers
                </div>
              </div>
              <button className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-lg py-2">
                Pay now
              </button>
            </motion.div>

            {/* 2. Fill Google form & upload receipt */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    2. Fill the Google form
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Provide details and upload your payment receipt.
                  </p>
                </div>
                <Users className="text-blue-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Make sure your name matches your receipt.
              </div>
              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg py-2">
                Open form
              </button>
            </motion.div>

            {/* 3. Wait for admin approval & check who is coming */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    Approval & Attendees
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Wait for admin confirmation, then view the who is coming
                    list.
                  </p>
                </div>
                <Clock className="text-yellow-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                We’ll update the list as approvals roll in.
              </div>
              <button className="mt-5 w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                Who is coming
              </button>
            </motion.div>

            {/* 4. Accommodation details */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">
                    Accommodation
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Find stay options and room distance from the Main venue.
                  </p>
                </div>
                <Star className="text-rose-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Official hotels and nearby budget choices.
              </div>
              <button className="mt-5 w-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg py-2">
                View details
              </button>
            </motion.div>
          </div>
        </div>

        {/* welcome section */}
        <div ref={welcomeRef} className="relative z-10 px-[1rem] lg:px-[3rem] my-10 mt-20 overflow-hidden">
          {/* Localized floating background for dark section */}
          <ul className="background">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
          {/* Floating balloons overlay (appears when section enters view) */}
          {balloonBurstId > 0 && (
            <div key={balloonBurstId} className="beers">
              {beers.map((b) => (
                <div key={b.key} className={b.cls} style={{ left: b.left, ...b.style }} />
              ))}
            </div>
          )}
          <h2 className="text-center text-gray-100 font-black  text-3xl lg:text-5xl uppercase">
            Welcome to PAN Africa Hash 2027
          </h2>

          {balloonBurstId > 0 && (
            <div className="foot-images">
              <div className="foot-img foot-left" />
              <div className="foot-img foot-right" />
            </div>
          )}

          <div className="lg:flex grid grid-cols-1 items-center gap-4 py-10 w-full">
            <Image
              src="/misma/gm.png"
              width={100}
              height={100}
              alt="image of hasher"
              className="w-full h-full rounded-[12px]"
              priority
              unoptimized={false}
            />

            <div className="w-full">
              <h1 className="text-4xl font-black text-center text-yellow-400">
                GM Dr. Kondo Belleh
              </h1>
              <p className="tracking-[1px] py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur cumque officia vitae culpa, nisi sed provident eos
                magnam reprehenderit mollitia. Soluta, provident cum! Illum
                vitae sint ea omnis impedit saepe officia eius quisquam laborum
                pariatur minus dolore cum quasi, repellendus, deserunt
                distinctio quidem? Excepturi cumque beatae nam qui at vero,
                voluptates eius dolore, expedita accusantium illum voluptatibus
                error laboriosam repudiandae ducimus alias nihil explicabo
                delectus iure ad dolorem quo rerum sapiente facere. Impedit esse
                laborum voluptatum cupiditate, repellendus maxime non voluptatem
                pariatur voluptate incidunt quae inventore consectetur quam
                sequi explicabo ea similique eveniet, libero totam alias quia
                magnam nobis minus.
              </p>
            </div>
          </div>
        </div>

        {/* Event details friday - Sunday */}
        <div className="relative z-10 my-10 mt-20">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-16 bg-white overflow-hidden">
            {/* Localized background effect (dark variant for light bg) */}
            <ul className="background-dark">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              PAN 
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
                AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                EVENT DASHBOARD
              </h2>
            </div>
          </section>


          {/* Body of event dashboard */}
          <div className="relative py-12 gap-5 z-10 px-[1rem] lg:px-[3rem] text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:flex items-center lg:justify-between justify-center">

            {/* Friday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image src='/event1.jpg' width={120} height={120} alt='Friday run image' className='rounded-[8px] w-full'/>
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Friday Run 10/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit itaque voluptatum aspernatur corporis eaque atque provident repellat deserunt nemo perspiciatis quasi distinctio recusandae iste! Dolore, voluptatum! Optio cumque numquam aspernatur, nisi asperiores similique.</p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>



            {/* Saturday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image src='/event2.jpg' width={120} height={120} alt='Friday run image' className='rounded-[8px] w-full'/>
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Saturday Run 11/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit itaque voluptatum aspernatur corporis eaque atque provident repellat deserunt nemo perspiciatis quasi distinctio recusandae iste! Dolore, voluptatum! Optio cumque numquam aspernatur, nisi asperiores similique.</p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>



            {/* Sunday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image src='/event3.jpg' width={120} height={120} alt='Friday run image' className='rounded-[8px] w-full'/>
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Sunday Run 12/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit itaque voluptatum aspernatur corporis eaque atque provident repellat deserunt nemo perspiciatis quasi distinctio recusandae iste! Dolore, voluptatum! Optio cumque numquam aspernatur, nisi asperiores similique.</p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>
          </div>









        </div>


        {/* Tourism */}
        <div className="relative z-10 my-10 mt-20">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-16 bg-white overflow-hidden">
            {/* Localized background effect (dark variant for light bg) */}
            <ul className="background-dark">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              PAN 
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
                AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
               TOURISM
              </h2>
            </div>
          </section>




        </div>







      </motion.div>

      {/* Footer PAN 2027 */}
      <Footer />
    </>
  );
}