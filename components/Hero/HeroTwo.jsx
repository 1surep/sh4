"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";

const HeroTwo = () => {
  const images = ["/D4.png", "/D.png", "/D7.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRUOn, setShowRUOn] = useState(false);

  // Refs for scroll-triggered animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Scroll detection for navbar intersection
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const navbarHeight = 80; // Approximate navbar height
        
        // Trigger when HeroTwo section hits the navbar
        if (sectionRect.top <= navbarHeight) {
          setShowRUOn(true);
        } else {
          setShowRUOn(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants - smoother and more natural
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.8
      },
    },
  };

  const runInfoVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4
      },
    },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Slower transition for better UX
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <section
        ref={sectionRef}
        id="section1"
        className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-screen pt-16 pb-12 md:pb-16"
        aria-label="Hero section with weekly run information"
      >
        {/* Seamless crossfade background */}
        <div className="absolute inset-0" aria-hidden="true">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Running club background image ${currentIndex + 1}`}
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced gradient overlay for better readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/40 to-gray-900/60 z-[1]"
          aria-hidden="true"
        />

        <motion.div
          className="z-10 text-white relative h-full flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>

          {/* Social Icons - Enhanced with better accessibility */}
          <motion.nav
            className="flex items-center justify-center sm:justify-start gap-4 mb-8 sm:mb-10"
            variants={itemVariants}
            aria-label="Social media links">
            {/* WhatsApp */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://www.whatsapp.com"
                url="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on WhatsApp"
                style={{ height: 40, width: 40 }}
                className="sm:!h-12 sm:!w-12 transition-shadow hover:shadow-lg hover:shadow-green-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>

            {/* TikTok */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://www.tiktok.com"
                url="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                style={{ height: 40, width: 40 }}
                className="sm:!h-12 sm:!w-12 transition-shadow hover:shadow-lg hover:shadow-pink-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>

            {/* Instagram */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://www.instagram.com"
                url="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                style={{ height: 40, width: 40 }}
                className="sm:!h-12 sm:!w-12 transition-shadow hover:shadow-lg hover:shadow-purple-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>

            {/* Facebook */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <SocialIcon
                href="https://www.facebook.com"
                url="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                style={{ height: 40, width: 40 }}
                className="sm:!h-12 sm:!w-12 transition-shadow hover:shadow-lg hover:shadow-blue-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>
          </motion.nav>

         <div className="grid grid-cols-1 lg:flex items-center justify-between">
           {/* Hero Content - Enhanced typography and hierarchy */}
           <motion.div
            className="flex flex-col  px-2 max-w-5xl "
            variants={itemVariants}>
            {/* Tagline */}
            <motion.p
              className="text-2xl  font-medium text-yellow-300/90 mb-6 max-w-3xl leading-relaxed drop-shadow-lg"
              variants={itemVariants}>
              We are experts in running, drinking, and making excuses for being late...
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl leading-11  font-extrabold text-gray-200  mb-8 drop-shadow-2xl"
              variants={itemVariants}
            >
              We Drink Beer to <br className="hidden sm:block" />
              Save Water
            </motion.h1>

            {/* Call to Action with navbar-triggered animation */}
            <motion.div
              className="mt-4 sm:mt-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={showRUOn ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-black text-yellow-300 tracking-wide drop-shadow-[0_0_25px_rgba(253,224,71,0.5)]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                R U ON?
              </motion.h2>

              {/* <motion.button
                className="mt-4 px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                aria-label="Join the next run"
              >
                Join the Next Run
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Run Info Card - Enhanced design and spacing */}
          <motion.aside
            className="relative lg:absolute lg:right-4 xl:right-8 lg:top-[1rem] xl:top-[12rem] text-gray-100 mx-auto lg:mx-0 max-w-md lg:max-w-sm xl:max-w-md mt-12 lg:mt-0"
            variants={runInfoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            aria-label="Weekly run information">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-full rounded-t-2xl overflow-hidden shadow-lg">
              <h2 className="text-gray-900 font-black p-4 sm:p-5 text-center text-lg sm:text-xl tracking-tight">
                Our Weekly Run Update!
              </h2>
            </div>

            {/* Card Body */}
            <div className="flex flex-col sm:flex-row w-full gap-5 sm:gap-6 bg-black/60 rounded-b-2xl backdrop-blur-xl border-2 border-white/10 shadow-2xl p-5 sm:p-6 hover:border-white/20 transition-all duration-300">
              {/* Image Section */}
              <div className="w-full sm:w-1/2 flex justify-center items-center">
                <div className="relative group">
                  <Image
                    src="/weeklyrunpic.png"
                    width={180}
                    height={180}
                    alt="Weekly run event poster"
                    className="w-full max-w-[220px] sm:max-w-none h-auto object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full sm:w-1/2 flex flex-col justify-center gap-3 py-2">
                <h3 className="font-black text-yellow-300 text-center sm:text-left text-lg sm:text-xl mb-1">
                  Run No.: 501
                </h3>

                <ul className="space-y-2.5 text-sm sm:text-base">
                  <li className="font-medium flex items-center justify-center sm:justify-start gap-3 hover:text-yellow-300 transition-colors">
                    <BsCalendarDate className="text-yellow-400 flex-shrink-0" size={18} aria-hidden="true" />
                    <span>March 20, 2022</span>
                  </li>
                  <li className="font-medium flex items-center justify-center sm:justify-start gap-3 hover:text-yellow-300 transition-colors">
                    <MdOutlineAccessTime className="text-yellow-400 flex-shrink-0" size={20} aria-hidden="true" />
                    <span>Time 06:00 PM</span>
                  </li>
                  <li className="font-medium flex items-center justify-center sm:justify-start gap-3 hover:text-yellow-300 transition-colors">
                    <LiaMoneyBillWaveSolid className="text-yellow-400 flex-shrink-0" size={20} aria-hidden="true" />
                    <span>Rego: SL 10</span>
                  </li>
                  <li className="font-medium flex items-center justify-center sm:justify-start gap-3 hover:text-yellow-300 transition-colors">
                    <SlLocationPin className="text-yellow-400 flex-shrink-0" size={18} aria-hidden="true" />
                    <span className="text-sm">Bajra Sandhi Renon, Denpasar</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.aside>

         </div>

        </motion.div>
      </section>
    </>
  );
};

export default HeroTwo;