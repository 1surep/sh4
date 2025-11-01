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
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

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

// Helper function to generate beers array (only called on client)
const generateBeers = () => {
  const count = 14;
  const arr = Array.from({ length: count }).map((_, i) => {
    const left = Math.floor(8 + Math.random() * 84); // 8% - 92%
    const size = Math.random();
    const clsSize = size < 0.35 ? "sm" : size > 0.75 ? "lg" : "";
    const delay = (Math.random() * 0.6).toFixed(2); // 0 - 0.6s
    const duration = (3 + Math.random() * 1.2).toFixed(2); // 3 - 4.2s
    return {
      key: `beer-${i}-${Math.random().toString(36).slice(2)}`,
      left: `${left}%`,
      cls: `beer ${clsSize}`.trim(),
      style: {
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      },
    };
  });
  return arr;
};

export default function PanAfricaPage() {
  const [showGame, setShowGame] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Our sponsors
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

  // Effect to set mounted flag and initialize countdown
  useEffect(() => {
    setMounted(true);
    
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
            // Generate randomized beers only on client (inside useEffect)
            setBeers(generateBeers());
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
                {mounted ? timeLeft.days.toString().padStart(2, "0") : "00"}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Days
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-600 mb-1 sm:mb-2">
                {mounted ? timeLeft.hours.toString().padStart(2, "0") : "00"}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Hours
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-orange-600 mb-1 sm:mb-2">
                {mounted ? timeLeft.minutes.toString().padStart(2, "0") : "00"}
              </div>
              <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 font-semibold uppercase tracking-wide">
                Minutes
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-600 mb-1 sm:mb-2">
                {mounted ? timeLeft.seconds.toString().padStart(2, "0") : "00"}
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

          <div
            id="about"
            className="lg:flex grid grid-cols-1 items-center gap-4 py-10 w-full"
          >
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

                <div className="space-y-1">
                  <p>On-On! 👣🍺</p>

                  <p>GM Dr. Kondo Belleh</p>
                  <p>
                    <b> Sierra Hash House Harriers & Harriettes (SH4)</b>
                  </p>
                </div>
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
                    Secure your spot for PAN Africa Hash 2027.
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
                    Provide details by uploading your payment receipt.
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
                    Hotels & Bookings
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Find stay options and room distance from the Main venue.
                  </p>
                </div>
                <Star className="text-rose-600" size={28} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Main Venue | 2<sup>nd</sup> Venue | 3<sup>rd</sup> Venue 
                <br /> Contact: +232-80-668590
              </div>
              <Link href="/pan-africa-2027/hotels">
              <button className="mt-5 w-full cursor-pointer bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg py-2">
                View details
              </button>
              </Link>
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
                We'll update the list as approvals roll in.
              </div>
              
              {/* Who is coming button */}
              <Link href={'/whoiscoming'}>
                <button className="mt-5 w-full bg-yellow-600 cursor-pointer  hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                  Who is coming
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Visa/PROTOCOL section*/}
        <div id="visa" className="relative z-10 my-12 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                VISA / PROTOCOL
              </h2>
            </div>
          </section>

          {/* body of visa message */}
          <div
            className="min-h-screen bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/freetown.jpg')" }}
          >
            {/* body of visa message */}
            <div className="relative py-12 bg-cover bg-green-900/80 text-gray-200 overflow-hidden">
              {/* Animated Floating Background */}
              <ul className="background">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li key={i}></li>
                ))}
              </ul>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 px-[1rem] lg:px-[3rem] max-w-4xl mx-auto">
                {/* Introduction Text */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8 border border-white/20 mb-8"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4 text-center">
                    Visa Information
                  </h3>
                  <p className="text-gray-200 text-base tracking-[1px] lg:text-lg leading-relaxed mb-6 text-center">
                    International participants planning to attend Pan Africa
                    Hash 2027 in Sierra Leone may need to apply for a visa.
                    Please use the official link below to begin your visa
                    application process.
                  </p>

                  {/* Visa Application Button */}
                  <div className="flex justify-center mb-6">
                    <button
                      className="bg-[#f9b84f] cursor-pointer hover:bg-[#e3a63f] text-gray-900 text-base lg:text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() =>
                        window.open("https://www.visitsierraleone.org/online-visa/", "_blank")
                      }
                    >
                      Apply for Visa
                    </button>
                  </div>
                </motion.div>

                {/* Protocol Lead Contact Information */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8 border border-white/20"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-6 text-center">
                    Protocol Lead
                  </h3>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                      <Image
                        src="/loc/yapyap.jpg"
                        width={128}
                        height={128}
                        alt="Yap Yap Network"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl lg:text-2xl font-bold text-yellow-400 mb-2">
                        Yap Yap Network
                      </h4>
                      <p className="text-gray-300 text-base lg:text-lg font-semibold mb-4">
                        International Coordinator/Protocol Lead
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 w-full max-w-md space-y-3">
                      <div className="flex items-center gap-3 text-gray-200">
                        <svg
                          className="w-5 h-5 text-cyan-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a
                          href="mailto:contactyapyapnetwork@gmail.com"
                          className="hover:text-cyan-400 transition-colors break-all"
                        >
                          contactyapyapnetwork@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center gap-3 text-gray-200">
                        <svg
                          className="w-5 h-5 text-yellow-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <a
                          href="tel:+23273928927"
                          className="hover:text-yellow-400 flex items-center gap-2 transition-colors"
                        >
                          +232 73 928 92
                        </a>
                      </div>

                      {/* whatapp */}
                      <p
                        onClick={() =>
                          window.open("https://wa.me/2327392892", "_blank")
                        }
                        className="flex items-center hover:text-green-500 gap-2 cursor-pointer"
                      >
                        <BsWhatsapp className="text-xl text-green-500" /> +232
                        73 928 92
                      </p>
                    </div>

                    <p className="text-center text-gray-300 text-sm mt-4 max-w-lg">
                      For all visa and protocol-related inquiries, please
                      contact Yap Yap Network directly. We're here to assist you
                      with your travel arrangements to Sierra Leone.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Sponsor */}
        <div id="sponsor" className="relative z-10 my-1 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                MEET OUR SPONSORS
              </h2>
            </div>
          </section>

          {/* Our Sponsors body section */}
          <div className=" relative  pt-12 bg-cover  text-gray-200 overflow-hidden flex items-center justify-center py-12 px-[1rem] lg:px-[3rem] w-full">
            <div className=" grid grid-cols-1 lg:flex items-center gap-4 justify-center">
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
        </div>

        {/*  LOC & Advisory Council*/}
        <div id="loc" className="relative z-10 my-1 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] uppercase md:text-5xl font-bold text-gray-800">
                LOC & Advisory Council
              </h2>
            </div>
          </section>

          {/* LOC & Advisory Council */}
          {/* LOC & Advisory Council */}
          <div
            id="loc"
            className="relative py-12 bg-cover bg-green-900/80 text-gray-200 overflow-hidden"
          >
            {/* Animated Floating Background */}
            <ul className="background">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 px-[1rem] lg:px-[3rem]">
              {/* LOC Members Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center uppercase mb-8 text-yellow-400">
                  Local Organizing Committee (LOC)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* LOC Members */}
                  {[
                    {
                      name: "Dr. Kondo Belleh",
                      position: "Chairman",
                      image: "/gm.jpg",
                    },
                    {
                      name: "Fuckimbo",
                      position: "Vice Chairman",
                      image: "/tourism/t2.jpg",
                    },
                    {
                      name: "Pucci Ing",
                      position: "Head of Communications",
                      image: "/tourism/t3.jpg",
                    },
                    {
                      name: "Yap Yap Network",
                      position: "International Coordinator/ Head of Protocol",
                      image: "/loc/yapyap.jpg",
                    },
                    {
                      name: "I Don't Want To",
                      position: "Head of Finance",
                      image: "/tourism/t5.jpg",
                    },
                    {
                      name: "Neneh Korraw",
                      position: "Head of Logistics",
                      image: "/tourism/t6.jpg",
                    },
                    {
                      name: "Presidential Virus",
                      position: "Head of Transport",
                      image: "/tourism/t7.jpg",
                    },
                    {
                      name: "Little Fox & Put It In the Hole",
                      position: "Sponsorship Leads",
                      image: "/tourism/t8.jpg",
                    },
                    {
                      name: "Cork Wine",
                      position: "Head of Welfare",
                      image: "/tourism/t9.jpg",
                    },
                    {
                      name: "Toto Specialist",
                      position: "Security Coordinator",
                      image: "/tourism/t10.jpg",
                    },
                    {
                      name: "Just Capt. Gladis",
                      position: "Head of Medic",
                      image: "/tourism/t11.jpg",
                    },
                    {
                      name: "Sniper",
                      position: "Hash Cash",
                      image: "/tourism/t12.jpg",
                    },
                    {
                      name: "Sorry My Lord",
                      position: "Liaison Officer",
                      image: "/tourism/t13.jpg",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="w-40 h-40 mx-auto mb-3 rounded-full overflow-hidden border-2 border-yellow-400">
                          <Image
                            src={member.image}
                            width={100}
                            height={100}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-sm mb-1 text-yellow-400">
                          {member.name}
                        </h4>
                        <p className="text-xs text-gray-300">
                          {member.position}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Advisory Council Section */}
              <div className="pb-12">
                <h3 className="text-3xl uppercase font-bold text-center mb-8 text-yellow-400">
                  Advisory Council
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Advisory Council Members */}
                  {[
                    {
                      name: "Muff Mask",
                      location: "Accra H3 Ghana",
                      image: "/tourism/t14.jpg",
                    },
                    {
                      name: "Bushy",
                      location: "Malawi",
                      image: "/tourism/t15.jpg",
                    },
                    {
                      name: "Short Cutter",
                      location: "Akwa Ibom (Nigeria)",
                      image: "/tourism/t16.jpg",
                    },
                    {
                      name: "Artur-De- Lion Killer",
                      location: "Kenya",
                      image: "/tourism/t17.jpg",
                    },
                    {
                      name: "Honey Tumba",
                      location: "Sierra Leone",
                      image: "/tourism/t18.jpg",
                    },
                    {
                      name: "Slippery Cummer",
                      location: "London H3",
                      image: "/tourism/t19.jpg",
                    },
                    {
                      name: "Sir KOP",
                      location: "Lagos H3",
                      image: "/tourism/t20.jpg",
                    },
                    {
                      name: "Sir DLS",
                      location: "Apapa H3 (Nigeria)",
                      image: "/tourism/t21.jpg",
                    },
                    {
                      name: "Mama Sarama",
                      location: "Bamako H3 - Mali",
                      image: "/tourism/t22.jpg",
                    },
                    {
                      name: "Mother Theresa",
                      location: "Ebonyi H3 Nigeria",
                      image: "/tourism/t23.jpg",
                    },
                    {
                      name: "Hazukashii",
                      location: "USA",
                      image: "/tourism/t24.jpg",
                    },
                  ].map((member, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="w-40 h-40 mx-auto mb-3 rounded-full overflow-hidden border-2 border-yellow-400">
                          <Image
                            src={member.image}
                            width={100}
                            height={100}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-sm mb-1 text-yellow-400">
                          {member.name}
                        </h4>
                        <p className="text-xs text-gray-300">
                          {member.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tourism */}
        <div id="tourism" className="relative z-10 my-12 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
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
                className="mt-4 flex items-center border-2 border-[#f9b84f] px-5 py-3 rounded-lg bg-[#f9b84f] text-black transition-all duration-500 ease-in-out gap-2 cursor-pointer font-bold w-fit mx-auto hover:bg-yellow-500"
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
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {Array.from({ length: 31 }).map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className=" overflow-hidden relative w-full h-48">
                      <Image
                        src={`/tourism/t${i + 1}.jpg`}
                        fill
                        alt={`Tourism image ${i + 1}`}
                        className="rounded-[12px] object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>

        {/* sh4 hash game */}
        <div 
        id='game'
        className="relative z-10 my-1 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
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
                    className="bg-[#f9b84f] cursor-pointer hover:bg-[#e3a63f] text-black hover:text-gray-900 font-bold px-5 py-3 rounded-lg transition-all flex items-center gap-2"
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
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                GALLERY
              </h2>
            </div>
          </section>

          {/* gallery section */}
          <div className="relative py-12 px-[1rem] lg:px-[3rem] bg-gray-50">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Image 1 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/d2.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 2 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/d3.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 3 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/d4.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 4 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/D5.png"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 5 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20250928-WA0067.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 6 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0044.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 7 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0046.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 8 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0061.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 9 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0069.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 10 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0070.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 11 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0078.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Image 12 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/pan/IMG-20251011-WA0105.jpg"
                  width={400}
                  height={300}
                  alt="Pan Africa Hash 2027 Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event details friday - Sunday */}
        <div 
        id='event'
        className="relative z-10 my-1 ">
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
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
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
                PAN AFRICA HASH 2027
              </p>
              <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
                EVENT DASHBOARD
              </h2>
            </div>
          </section>

          {/* Body of event dashboard */}
          <div className="relative py-12 bg-cover bg-green-900/80 text-gray-200 overflow-hidden">
            {/* Animated Floating Background */}
            <ul className="background">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 px-[1rem] lg:px-[3rem] gap-5 grid grid-cols-1 md:grid-cols-2 lg:flex items-center lg:justify-between justify-center">
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
                    Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa
                    odit itaque voluptatum aspernatur corporis eaque atque
                    provident repellat deserunt nemo perspiciatis quasi
                    distinctio recusandae iste! Dolore, voluptatum! Optio cumque
                    numquam aspernatur, nisi asperiores similique.
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
                    Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa
                    odit itaque voluptatum aspernatur corporis eaque atque
                    provident repellat deserunt nemo perspiciatis quasi
                    distinctio recusandae iste! Dolore, voluptatum! Optio cumque
                    numquam aspernatur, nisi asperiores similique.
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
                    Nesciunt, cupiditate, aperiam delectus incidunt rem ipsa
                    odit itaque voluptatum aspernatur corporis eaque atque
                    provident repellat deserunt nemo perspiciatis quasi
                    distinctio recusandae iste! Dolore, voluptatum! Optio cumque
                    numquam aspernatur, nisi asperiores similique.
                  </p>
                  <button className="mt-3 w-fit px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </motion.div>

      {/* Horizontal Divider */}
      <hr className="w-full h-[1px] bg-gray-300" />

      {/* Footer PAN 2027 */}
      <Footer />

      {/* Chatbot Modal */}
      {/* <ChatbotModal /> */}
    </>
  );
}