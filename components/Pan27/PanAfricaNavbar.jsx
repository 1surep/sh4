'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardBackspace, MdMenu, MdClose } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

const PanAfricaNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: {
      rotate: 180,
      transition: { duration: 0.3 }
    }
  };



  return (
    <>
      {/* desktop view */}
      <motion.nav
        className="px-4 sm:px-6 lg:px-12 font-semibold items-center flex justify-between py-4 w-full overflow-hidden bg-green-900 text-gray-200 shadow-lg fixed z-50"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Animated Floating Background */}
        <ul className="background">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Logo Section */}
        <Link href={"/"}>
          <motion.div
            className="flex items-center gap-2 sm:gap-3 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.jpg"
              width={50}
              height={50}
              alt="sierrah4_logo"
              className="rounded-full sm:w-[60px] sm:h-[60px] relative z-30"
              priority
              unoptimized={false}
            />

            <div className="text-center z-10">
              <p className="text-white font-bold text-sm sm:text-base">
                PAN Africa 2027
              </p>
              <p className="text-xs sm:text-sm text-blue-100">
                Sierra The Duo Kennel
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 z-10">
          <Link
            href="/"
            className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium flex items-center gap-2"
          >
            <MdKeyboardBackspace className="text-2xl animate-pulse text-yellow-200" />
            <span>Home</span>
          </Link>
        </div>

        {/* Desktop PAN Nav items */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 z-10">
          {/* About */}
          <Link
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            About PAN Africa
          </Link>

          {/* Visa */}
          <Link
            href="#visa"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            Visa / Protocol
          </Link>

          {/* Sponsor */}
          <Link
            href="#sponsor"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            Sponsors
          </Link>

          {/* Tourism */}
          <Link
            href="#tourism"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            Tourism
          </Link>

          {/* Gallery */}
          <Link
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            Gallery
          </Link>

          {/* LOC & Advisory Council */}
          <Link
            href="#loc"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-yellow-200 cursor-pointer transition-colors duration-300 text-sm xl:text-base"
          >
            LOC & Advisory Council
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-20 p-2 rounded-lg hover:bg-green-800 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variants={hamburgerVariants}
          animate={isMobileMenuOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <MdClose className="text-2xl text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MdMenu className="text-2xl text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-green-900 shadow-2xl z-50 lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-green-700">
                <Link href={"/"} className="flex items-center gap-3">
                  <Image
                    src="/logo.jpg"
                    width={40}
                    height={40}
                    alt="sierrah4_logo"
                    className="rounded-full"
                    priority
                    unoptimized={false}
                  />
                  <div>
                    <p className="text-white font-bold text-sm">
                      PAN Africa 2027
                    </p>
                    <p className="text-xs text-blue-100">Sierra H4 Vision</p>
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-6 space-y-6">
                <motion.div
                  variants={mobileMenuItemVariants}
                  className="border-b border-green-700 pb-4"
                >
                  <Link
                    href="/"
                    className="text-white hover:text-yellow-200 transition-colors duration-300 font-medium flex items-center gap-3 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MdKeyboardBackspace className="text-2xl text-yellow-200" />
                    Home
                  </Link>
                </motion.div>

                {/* mobile navigation menu */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  className="space-y-4 scroll-smooth"
                >
                  <a
                    href="#about"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2 border-b border-green-800"
                  >
                    About PAN Africa
                  </a>
                  <a
                    href="#visa"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2 border-b border-green-800"
                  >
                    Visa / Protocol
                  </a>
                  <a
                    href="#sponsor"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2 border-b border-green-800"
                  >
                    Sponsors
                  </a>
                  <a
                    href="#tourism"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2 border-b border-green-800"
                  >
                    Tourism
                  </a>
                  <a
                    href="#gallery"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2 border-b border-green-800"
                  >
                    Gallery
                  </a>

                  <a
                    href="#loc"
                    className="block text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2"
                  >
                    LOC & Advisory Council
                  </a>

                  <Link href={'/signin'}
                    className=" gap-2 flex items-center text-white hover:text-yellow-200 cursor-pointer transition-colors duration-300 py-2">
                    Mismanagement <FaUserShield className='text-2xl'/>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PanAfricaNavbar;
