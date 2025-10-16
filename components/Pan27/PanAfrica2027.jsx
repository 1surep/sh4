"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Award, Star } from 'lucide-react';
import PanAfricaNavbar from "./PanAfricaNavbar";
import Footer from "../Footer";

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

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
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
        className="min-h-screen pt-32 bg-cover relative overflow-hidden bg-green-900/80 text-gray-200 bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/pan/pan2027.png)" }}
      >
        {/* Animated Floating Background */}
        <ul className="background">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

       
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
        <div className="relative z-10 px-[1rem] lg:px-[3rem] mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* 1. Pay your rego & show numbers of rego hasher +5 */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">Pay your rego</h3>
                  <p className="text-gray-600 text-sm mt-1">Secure your spot for PAN Africa 2027.</p>
                </div>
                <Award className="text-amber-500" size={28} />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-black text-green-700">
                  {count1 + 5}
                  <span className="ml-2 align-middle inline-block text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">+5</span>
                </div>
                <div className="text-xs uppercase tracking-wide text-gray-500">Registered Hashers</div>
              </div>
              <button className="mt-5 w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold rounded-lg py-2">Pay now</button>
            </motion.div>

            {/* 2. Fill Google form & upload receipt */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">Fill the Google form</h3>
                  <p className="text-gray-600 text-sm mt-1">Provide details and upload your payment receipt.</p>
                </div>
                <Users className="text-blue-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">Make sure your name matches your receipt.</div>
              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg py-2">Open form</button>
            </motion.div>

            {/* 3. Wait for admin approval & check who is coming */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">Approval & attendees</h3>
                  <p className="text-gray-600 text-sm mt-1">Wait for admin confirmation, then view the list.</p>
                </div>
                <Clock className="text-purple-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">We’ll update the list as approvals roll in.</div>
              <button className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg py-2">Who is coming</button>
            </motion.div>

            {/* 4. Accommodation details */}
            <motion.div
              variants={itemVariants}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg p-5 border border-white/40 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-900 font-extrabold text-lg">Accommodation</h3>
                  <p className="text-gray-600 text-sm mt-1">Find stay options, distances and room sharing.</p>
                </div>
                <Star className="text-rose-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">Official hotels and nearby budget choices.</div>
              <button className="mt-5 w-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg py-2">View details</button>
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      {/* Footer PAN 2027 */}
      <Footer />
    </>
  );
}