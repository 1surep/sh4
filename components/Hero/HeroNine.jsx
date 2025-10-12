"use client";

import Image from "next/image";
import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    image: "/event1.jpg",
    title: "August celebrants, a weekend to remember",
    desc: "Sierra H4 August Celebrants says a HUGE THANK YOU to all our amazing hashers who showed...",
    date: "September 14, 2025",
    author: "Sierrah4-Harries",
  },
  {
    id: 2,
    image: "/event2.jpg",
    title: "SH4 1st Anniversary & Handover Run 2025",
    desc: "Occasions Resort, Lakka 📅 5th – 7th December 2025. Rego Link: https://forms.gle/44daJa2kMJ1JGMEs6 ✨ Rego: 🔹 Early Bird: 6th Sept...",
    date: "September 14, 2025",
    author: "Sierrah4-Harries",
  },
  {
    id: 3,
    image: "/event3.jpg",
    title: "Sierrah H4 GM's Party (First Ever)",
    desc: "A special thanks to everyone who joined the GM’s first ever party — it was truly memorable!",
    date: "September 14, 2025",
    author: "Sierrah4-Harries",
  },
];

const HeroNine = () => {
  return (
    <>
      <section className="px-[1rem] lg:px-[3rem]">
        {/* HEADING */}
        <section className="relative flex flex-col items-center justify-center pt-6 pb-16 bg-white overflow-hidden">
          <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
            HASH
          </h1>

          <div className="relative text-center">
            <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
              HASHING
            </p>
            <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
              Our Events
            </h2>
          </div>
        </section>

        {/* BODY OF SECTION */}
        <section className="py-12 min-h-screen bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    width={500}
                    height={300}
                    alt="event-image"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* TEXT */}
                <div className="bg-gray-100 p-8 flex flex-col gap-3 flex-grow justify-between">
                  <h3 className="uppercase font-bold text-gray-700 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {event.desc}
                  </p>

                  <div className="text-gray-600 text-sm border-t pt-3 flex flex-col gap-1">
                    <span>{event.date}</span>
                    <i>by {event.author}</i>
                  </div>

                  <button className="mt-4 flex items-center border-2 border-[#f9b84f] px-4 py-2 rounded-lg hover:bg-[#f9b84f] hover:text-white transition-all duration-500 ease-in-out gap-2 text-[#f9b84f] cursor-pointer font-bold w-fit">
                    Read More...
                    <FiCornerRightDown className="animate-bounce font-bold" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroNine;