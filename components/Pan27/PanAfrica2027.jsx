"use client";

import React, { useState, useEffect } from "react";
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
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  } else {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
};

export default function PanAfricaPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Update every second
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
      <div className="min-h-screen pt-32 bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(/pan/pan2027a.png)'}}>
        {/* count down */},
        <div className="px-[1rem] lg:px-[3rem]">
          
          <div>
                <h1 className="text-center font-black text-3xl uppercase">Count Down to </h1>
                <h1 className="text-center font-black text-3xl uppercase">PAN Africa Hash 2027</h1>
          </div>

          <div className="flex items-center gap-12">
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




      </div>





     

      {/* Footer PAN 2027 */}
      {/* <Footer /> */}
    </>
  );
}
