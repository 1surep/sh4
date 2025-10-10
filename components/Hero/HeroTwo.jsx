"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const HeroTwo = () => {
  const images = ["/d4.jpg", "/D6.png", "/D7.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Refs for scroll-triggered animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const runInfoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="section1"
        className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-screen pt-20 pb-8 md:pb-12"
      >
        {/* Sliding background with Next.js Image */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt="Hero background"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <motion.div
          className="z-10 text-white relative h-full flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ICON DIV - Responsive social icons */}
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            {/* WhatsApp */}
            <motion.div variants={socialIconVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <SocialIcon
                href="https://www.whatsapp.com"
                url="https://www.whatsapp.com"
                style={{ height: 35, width: 35 }}
                className="sm:!h-10 sm:!w-10"
              />
            </motion.div>

            {/* TikTok */}
            <motion.div variants={socialIconVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <SocialIcon
                href="https://www.tiktok.com"
                url="https://www.tiktok.com"
                style={{ height: 35, width: 35 }}
                className="sm:!h-10 sm:!w-10"
              />
            </motion.div>

            {/* Instagram */}
            <motion.div variants={socialIconVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <SocialIcon
                href="https://www.instagram.com"
                url="https://www.instagram.com"
                style={{ height: 35, width: 35 }}
                className="sm:!h-10 sm:!w-10"
              />
            </motion.div>

            {/* Facebook */}
            <motion.div variants={socialIconVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <SocialIcon
                href="https://www.facebook.com"
                url="https://www.facebook.com"
                style={{ height: 35, width: 35 }}
                className="sm:!h-10 sm:!w-10"
              />
            </motion.div>
          </motion.div>

          {/* MIDDLE DIV - Responsive hero text */}
          <motion.div
            className="flex flex-col items-center text-center px-2 sm:px-4 mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            variants={itemVariants}
          >
            <motion.h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 mb-3 sm:mb-4 md:mb-6"
              variants={itemVariants}
            >
              We are a Running Club with a Drinking Problem...
            </motion.h1>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-[#2aa9e8] to-[#1FAE53] bg-clip-text text-transparent uppercase leading-tight"
              variants={itemVariants}
            >
              We Drink Beer to Save Water
            </motion.h1>
          </motion.div>

          {/* RUN INFO DIV - Responsive positioning */}
          <motion.div
            className="relative lg:absolute lg:right-8 xl:right-16 lg:top-[12rem] xl:top-[14rem] text-gray-100 mx-auto lg:mx-0 max-w-md lg:max-w-sm xl:max-w-md"
            variants={runInfoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="bg-black/40 w-full rounded-t-xl overflow-hidden">
              <h1 className="text-yellow-300 font-black p-3 sm:p-4 text-center text-base sm:text-lg backdrop-blur-lg border border-white/20 shadow-lg">
                Weekly Run Update!
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 bg-black/40 rounded-b-xl backdrop-blur-lg border border-white/20 shadow-lg p-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <Image
                  src="/runpic.png"
                  width={150}
                  height={150}
                  alt="sh4 weekly run information"
                  className="w-full max-w-[200px] sm:max-w-none h-auto object-contain rounded-lg"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-center px-2 gap-2 py-2 sm:py-3">
                <h1 className="font-black text-yellow-300 text-center sm:text-left text-base sm:text-lg">
                  Run No:. 90900
                </h1>

                <ul className="space-y-1 text-sm sm:text-base text-center sm:text-left">
                  <li className="font-medium">March 20, 2022</li>
                  <li>OnOn Out 06:00 PM</li>
                  <li>Rego: SL 10</li>
                  <li className="text-sm">Bajra Sandhi Renon, Denpasar</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroTwo;