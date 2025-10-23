"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Award, Star } from "lucide-react";
import PanAfricaNavbar from "./PanAfricaNavbar";
import Footer from "../Footer";
import Image from "next/image";
import ChatbotModal from "../Chat/ChatbotModal";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";

// game
import { Dock, DockIcon } from "@/components/ui/dock";
import GuessGame from "@/components/GuessGame";
import { GrGamepad } from "react-icons/gr";

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
  const [showGame, setShowGame] = useState(false);

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
                const clsSize = size < 0.35 ? "sm" : size > 0.75 ? "lg" : "";
                const delay = (Math.random() * 0.6).toFixed(2); // 0 - 0.6s
                const duration = (3 + Math.random() * 1.2).toFixed(2); // 3 - 4.2s
                return {
                  key: `${Date.now()}-${i}-${Math.random()
                    .toString(36)
                    .slice(2)}`,
                  left: `${left}%`,
                  cls: `beer ${clsSize}`.trim(),
                  style: {
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  },
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

  // Function to handle navbar visibility
  const shouldShowNavbar = !showGame;

  return (
    <>
      {/* Navbar PAN 2027 */}
      {shouldShowNavbar && <PanAfricaNavbar />}

      {/* main body of PAN 2027 */}
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen pt-32 bg-cover relative overflow-hidden bg-green-900/80 text-gray-200 "
      >
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
          <div className="flex gap-2 items-center justify-center mx-auto w-full">
            <h1 className="text-center gap-2  justify-center text-gray-100 font-black text-3xl uppercase flex items-center">
              COUNT DOWN
              <span>
                <Image
                  src="/flag.png"
                  width={30}
                  height={30}
                  alt="image-of country-flag"
                  className="rounded-full"
                />
              </span>
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

        {/* GM SH4 welcome section */}
        <div
          ref={welcomeRef}
          className="relative z-10 px-[1rem] lg:px-[3rem] my-10 mt-20 overflow-hidden"
        >
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
                <div
                  key={b.key}
                  className={b.cls}
                  style={{ left: b.left, ...b.style }}
                />
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
              width={400}
              height={400}
              alt="image of hasher"
              className="w-full h-full rounded-[12px]"
              priority
              unoptimized={false}
            />

            <div className="w-full">
              <h1 className="text-2xl font-black text-center text-yellow-400">
                A Message from the Sierra H4 Grand Master: On-On to PAH 2027!
              </h1>
              <div className="tracking-[1px] py-2 space-y-2">
                <p>
                  Distinguished Hashers, esteemed partners, fellow citizens of
                  Sierra Leone, and friends across the Pan-African Hash
                  community,
                </p>

                <p>
                  It is with immense pride and excitement that I address you
                  today. Our successful bid to host the Pan African Hash (PAH)
                  2027 in Accra, Ghana, secured with the invaluable endorsement
                  of Sierra Leone's Ministry of Tourism and Cultural Affairs,
                  was more than a win for SierraH4; it was a historic triumph
                  for our entire nation. Sierra Leone is ready to welcome the
                  world.
                </p>

                <p>
                  Forging Partnerships for a Progressive Sierra Leone: Sierra
                  Hash House Harriers and Harriettes (SierraH4) is more than a
                  running club; we are a catalyst for eco-tourism and community
                  development. Our vision, strongly supported by the Government
                  of Sierra Leone through a strategic Memorandum of
                  Understanding (MOU) with the Ministry of Tourism, is to
                  leverage the global Hash movement to showcase the unspoiled
                  beauty and vast potential of our homeland.
                </p>

                <p>
                  Join the Fastest-Growing Movement in West Africa: As the
                  youngest and fastest-growing kennel in West Africa, our energy
                  is a testament to our members' enthusiasm and the vibrancy of
                  our community. We celebrate a powerful spirit of unity with
                  the wider hashing family, including our strong bond with our
                  brother kennel, the Freetown Hash House Harriers (FH3).
                </p>

                <p>
                  To every citizen of Sierra Leone, I extend a heartfelt
                  invitation: Join SierraH4! Whether you seek fitness,
                  fellowship, or a meaningful way to contribute to our nation's
                  story, the Hash trail awaits. We need your energy, passion,
                  and pride to make PAH 2027 the most memorable event in
                  Pan-African Hash history.
                </p>

                <p className="space-y-1">
                  <p>On-On! 👣🍺</p>

                  <p>GM Dr. Kondo Belleh</p>
                  <p>
                    <b> Sierra Hash House Harriers & Harriettes (SH4)</b>
                  </p>
                </p>
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
                <div className="text-xl font-black text-green-700">+540</div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Rego Hashers
                </div>
              </div>
              {/* Pay rego button */}
              <button
                className="mt-5 w-full bg-green-700 cursor-pointer hover:bg-green-800 text-white text-sm font-semibold rounded-lg py-2"
                onClick={() =>
                  window.open("https://pay.monime.io/069165304", "_blank")
                }
              >
                Pay Rego
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

              <button
                className="mt-5 w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-sm font-semibold rounded-lg py-2"
                onClick={() =>
                  window.open("https://forms.gle/rPVHFYS7b2Hqyuzk8", "_blank")
                }
              >
                Fill Registration Form
              </button>
            </motion.div>

            {/* 3. Accommodation details */}
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

            {/* 4. Wait for admin approval & check who is coming */}
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
                Who is coming ?
              </button>
            </motion.div>
          </div>
        </div>

        {/* Visa/AIR PORT PICK-UP section*/}
        <div className="relative z-10 my-1 ">
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
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                VISA DASHBOARD / AIR PORT PICK-UP
              </h2>
            </div>
          </section>
        </div>

        {/* Our Sponsor */}
        <div className="relative z-10 my-1 ">
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
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                MEET OUR SPONSORS
              </h2>
            </div>
          </section>
        </div>

        {/* Tourism */}
        <div className="relative z-10 my-1 ">
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
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                TOURISM
              </h2>

              {/* button to take a tour */}
              <a
                href="https://tourismsierraleone.com/where-to-go/freetown"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center border-2 border-[#f9b84f] px-4 py-2 rounded-lg bg-[#f9b84f] text-white transition-all duration-500 ease-in-out gap-2 cursor-pointer font-bold w-fit mx-auto"
              >
                Take a Tour
              </a>
            </div>
          </section>

          {/* swiperjs / body of Tourism section */}
          <section className="relative py-2 pt-12 bg-cover bg-green-900/80 text-gray-200 overflow-hidden">
            {/* Animated Floating Background */}
            <ul className="background">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* swipers */}
            <div
              id="section4"
              className="relative z-10 md:px-[3rem] overflow-hidden font-arvo px-[1rem] pb-[2rem]"
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                // pagination={{
                // clickable: true,
                // }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t1.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                     src="/tourism/t2.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t3.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t4.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t5.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t6.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t7.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t8.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t9.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t10.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t11.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t12.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t13.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t14.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t15.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t16.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t17.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t18.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t19.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t20.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t21.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t22.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t23.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t24.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t25.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t26.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t27.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t28.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t29.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t30.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" overflow-hidden relative w-full h-48">
                    <Image
                      src="/tourism/t31.jpg"
                      fill
                      alt="image"
                      className="rounded-[12px] object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </SwiperSlide>

                



              </Swiper>
            </div>
          </section>
        </div>

        {/* sh4 hash game */}
        <div className="relative z-10 my-1 ">
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

                <p className="text-base text-gray-700 text-center pt-1 pb-8 ">
                  <i>How well do you know the hash? Press Play to find out</i>
                </p>

                {/* Game Modal */}
                {showGame && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
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

        {/* Gallery section*/}
        <div id="gallery" className="relative z-10 my-1 ">
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
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                GALLERY
              </h2>
            </div>
          </section>

          {/* gallery section */}
        </div>

        {/* Event details friday - Sunday */}
        <div className="relative z-10 my-1 ">
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
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                EVENT DASHBOARD
              </h2>
            </div>
          </section>

          {/* Body of event dashboard */}
          <div className="relative py-12 mb-12 gap-5 z-10 px-[1rem] lg:px-[3rem] text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:flex items-center lg:justify-between justify-center">
            {/* Friday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image
                  src="/event1.jpg"
                  width={120}
                  height={120}
                  alt="Friday run image"
                  className="rounded-[8px] w-full"
                />
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Friday Run 10/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit
                  itaque voluptatum aspernatur corporis eaque atque provident
                  repellat deserunt nemo perspiciatis quasi distinctio
                  recusandae iste! Dolore, voluptatum! Optio cumque numquam
                  aspernatur, nisi asperiores similique.
                </p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>

            {/* Saturday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image
                  src="/event2.jpg"
                  width={120}
                  height={120}
                  alt="Friday run image"
                  className="rounded-[8px] w-full"
                />
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Saturday Run 11/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit
                  itaque voluptatum aspernatur corporis eaque atque provident
                  repellat deserunt nemo perspiciatis quasi distinctio
                  recusandae iste! Dolore, voluptatum! Optio cumque numquam
                  aspernatur, nisi asperiores similique.
                </p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>

            {/* Sunday Run */}
            <div className="flex flex-col relative z-10 items-center gap-4 w-full border-2 border-white rounded-xl p-3">
              <div className="w-full">
                <Image
                  src="/event3.jpg"
                  width={120}
                  height={120}
                  alt="Friday run image"
                  className="rounded-[8px] w-full"
                />
              </div>

              <div className="w-full text-gray-200">
                <h3 className="font-semibold">Sunday Run 12/10/2027</h3>
                <p className="text-sm opacity-80 tracking-[1px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa odit
                  itaque voluptatum aspernatur corporis eaque atque provident
                  repellat deserunt nemo perspiciatis quasi distinctio
                  recusandae iste! Dolore, voluptatum! Optio cumque numquam
                  aspernatur, nisi asperiores similique.
                </p>
                <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Horizontal Divider */}
      <hr  className="w-full h-[1px] bg-gray-300" />

     

      {/* Footer PAN 2027 */}
      <Footer />

      {/* Chatbot Modal */}
      <ChatbotModal />
    </>
  );
}
