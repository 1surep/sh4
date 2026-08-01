'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { FaUserShield } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
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

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

    
  
  return (
    <motion.footer
      className="relative overflow-hidden bg-green-900/80 text-gray-200 pb-16"
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

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.jpg"
                width={60}
                height={60}
                alt="sierrah4_logo"
                className="rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-xl font-bold text-cyan-400 text-center">
                  Sierra H4
                </h2>
                <p className="text-sm text-green-400 text-center">
                  The Duo Kennel
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-sm">
              A drinking club with a running problem. Join us for adventure,
              fun, and beer!
            </p>

            <ul className="pt-6 text-gray-200 space-y-2">
              <li className="flex items-center gap-2">
                <MdLocationOn /> Freetown, Sierra Leone
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> h4sierra@gmail.com
              </li>

              <li className="flex items-center gap-2">
                <MdEmail /> info@sierrah4.com
              </li>

              <li className="flex items-center gap-2">
                <BsFillTelephoneInboundFill /> +232 80 668 590
              </li>

              <li className="flex items-center gap-2">
                <a 
                  href="https://wa.me/23273928927" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
                >
                  <FaWhatsapp /> +232 73 928 927
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/pan-africa-2027"
                  className="hover:text-yellow-400 transition-colors"
                >
                  PAN Africa 2027
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/pan-africa-2027#visa"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Visa / Protocol
                </Link>
              </li>

             
              

              <li>
                <Link
                  href="/pan-africa-2027/hotels"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Hotels / Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/pan-africa-2027#sponsor"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Sponsors
                </Link>
              </li>


              <li>
                <Link
                  href="/pan-africa-2027#tourism"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Tourism
                </Link>
              </li>


              <li>
                <Link
                  href="/pan-africa-2027#loc"
                  className="hover:text-yellow-400 transition-colors"
                >
                  LOC & Advisory Council
                </Link>
              </li>


              <li>
                <Link
                  href="/signin"
                  className="hover:text-yellow-400 flex items-center gap-2 transition-colors"
                >
                  Mismanagement <FaUserShield className="text-2xl"/>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* PAN 2027 */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              PAN Africa 2027
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              After making payment, proceed to PAN 2027 page to fill the Registration form.
            </p>

            {/* Pay rego button */}
            <div className="">
              <a
                href="https://pay.monime.io/069165304?amount=20600&checkout=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300"
              >
                Pay Rego
              </a>
            </div>
          </motion.div>

          {/* Shop with Us */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Shop with Sierra H4
            </h3>
            <p className="text-gray-200 text-sm mb-4">
              We offer a variety of services at our Sierra H4 Shop.
            </p>
            <button
              disabled
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Coming Soon...
            </button>
          </motion.div>
        </div>

        {/* Social Media + Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          {/* Social Icons - Smaller + Centered */}
          <motion.nav
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
            aria-label="Social media links"
          >
            

            {/* Twitter X */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://x.com/sierra_h4"
                url="https://x.com/sierra_h4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                style={{ height: 32, width: 32 }}
                className="transition-shadow hover:shadow-lg hover:shadow-pink-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>

            {/* Instagram */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://www.instagram.com/sierra_h4"
                url="https://www.instagram.com/sierra_h4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                style={{ height: 32, width: 32 }}
                className="transition-shadow hover:shadow-lg hover:shadow-purple-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>

            {/* Facebook */}
            <motion.div
              variants={socialIconVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SocialIcon
                href="https://facebook.com/sierrah4"
                url="https://facebook.com/sierrah4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                style={{ height: 32, width: 32 }}
                className="transition-shadow hover:shadow-lg hover:shadow-blue-500/50 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
            </motion.div>
          </motion.nav>

          {/* Copyright */}
          <p className="text-gray-300 text-sm text-center">
            © {new Date().getFullYear()} Sierra H4. All Rights Reserved.{" "}
            <span className="text-yellow-400 font-medium">
              Designed & Developed by <b>XGM 1SurePlayer</b>
            </span>

            <span className="flex items-center justify-center rounded-full pt-1 ">
              <Image src='/me.jpg' width={50} height={50} alt="image_developer" className="rounded-full ring ring-yellow-400 "/>
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
