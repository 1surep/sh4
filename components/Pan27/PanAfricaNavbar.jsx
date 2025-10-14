'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PanAfricaNavbar = () => {
  return (
    <nav className="px-[1rem] lg:px-[3rem] font-semibold items-center justify-between py-4 w-full bg-gradient-to-r from-blue-600 to-green-600 shadow-lg fixed z-50">
      {/* Logo */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src='/logo.jpg'
          width={60}
          height={60}
          alt="sierrah4_logo"
          className="rounded-full"
          priority
          unoptimized={false}
        />
        <div className="text-center">
          <p className="text-white font-bold">PAN Africa 2027</p>
          <p className="text-sm text-blue-100">Sierra H4 Vision</p>
        </div>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link 
          href="/" 
          className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
        >
          Back to Home
        </Link>
        <Link 
          href="/about" 
          className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
        >
          About Us
        </Link>
        <Link 
          href="/events" 
          className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
        >
          Events
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default PanAfricaNavbar;
