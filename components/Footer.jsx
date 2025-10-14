'use client';
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      className="bg-green-900/80 text-gray-200 pt-12 pb-8"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
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
                <h2 className="text-xl font-bold text-cyan-400 text-center">Sierra H4</h2>
                <p className="text-sm text-green-400 text-center">The Duo Kennel</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm">
              A drinking club with a running problem. Join us for adventure, fun, and beer!
            </p>

            <ul className="pt-6 text-gray-200">
                <li className="flex items-center gap-2"><MdLocationOn /> Freetown, Sierra Leone</li>
                <li className="flex items-center gap-2"><MdEmail /> h4sierra@gmail.com</li>
                <li className="flex items-center gap-2"><BsFillTelephoneInboundFill /> +232-80-668590</li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-yellow-400 transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* PAN 2027 */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">PAN Africa 2027</h3>
            <p className="text-gray-200 text-sm mb-4">
              Gearing up for the ultimate hashing event in Africa.
            </p>
            <Link href="/pan2027" className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300">
              Pay Rego
            </Link>
          </motion.div>

          {/* Shop with US*/}
          <motion.div className="col-span-1" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Shop with SH4</h3>
            <p className="text-gray-200 text-sm mb-4">
                We offer a variety of services at our SH4 Shop.
            </p>
            <Link href="/sh4" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Shop Now
            </Link>
          </motion.div>
        </div>
        

        {/* Social Media and Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="flex space-x-6 mb-4 md:mb-0 ">
            <motion.a href="#" className="text-2xl hover:text-blue-500" variants={socialIconVariants} whileHover="hover"><FaFacebook /></motion.a>
            <motion.a href="#" className="text-2xl hover:text-blue-400" variants={socialIconVariants} whileHover="hover"><FaTwitter /></motion.a>
            <motion.a href="#" className="text-2xl hover:text-pink-500" variants={socialIconVariants} whileHover="hover"><FaInstagram /></motion.a>
            <motion.a href="#" className="text-2xl hover:text-blue-700" variants={socialIconVariants} whileHover="hover"><FaLinkedin /></motion.a>
          </div>
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Sierra H4. All Rights Reserved. Designed & Developed by info@loukama.com
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;