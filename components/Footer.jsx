'use client';
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaUserShield } from "react-icons/fa";

const quickLinks = [
  { label: "About us", href: "/about" },
  { label: "Events", href: "/even" },
  { label: "PAH 2027", href: "/pan-africa-2027" },
  { label: "Hotels & bookings", href: "/pan-africa-2027/hotels" },
  { label: "Who is coming", href: "/whoiscoming" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reports", href: "/reports" },
  { label: "Contact us", href: "/contact" },
];

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.footer
      className="bg-sh4-ink text-sh4-cream/80 px-6 md:px-10 pt-16 pb-10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" width={48} height={48} alt="Sierra H4 logo" className="rounded-full object-cover" />
              <div>
                <div className="font-display text-lg tracking-wide text-sh4-cream">SIERRA H4</div>
                <div className="text-[11px] uppercase tracking-widest">The Duo Kennel</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              A drinking club with a running problem. Join us for adventure, fun, and beer.
            </p>
            <div className="flex gap-5 mt-4 text-sm font-semibold">
              <a href="https://x.com/sierra_h4" target="_blank" rel="noopener noreferrer" className="relative text-sh4-gold hover:text-sh4-cream transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sh4-cream after:transition-all after:duration-300 hover:after:w-full">X</a>
              <a href="https://www.instagram.com/sierra_h4" target="_blank" rel="noopener noreferrer" className="relative text-sh4-gold hover:text-sh4-cream transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sh4-cream after:transition-all after:duration-300 hover:after:w-full">Instagram</a>
              <a href="https://facebook.com/sierrah4" target="_blank" rel="noopener noreferrer" className="relative text-sh4-gold hover:text-sh4-cream transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sh4-cream after:transition-all after:duration-300 hover:after:w-full">Facebook</a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="text-[13px] uppercase tracking-widest text-sh4-gold font-bold mb-4">Quick links</div>
            <div className="flex flex-col gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-sh4-gold transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/signin" className="hover:text-sh4-gold transition-colors flex items-center gap-2">
                Mismanagement sign in <FaUserShield />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="text-[13px] uppercase tracking-widest text-sh4-gold font-bold mb-4">Pan Africa 2027</div>
            <p className="text-sm leading-relaxed mb-4">
              After paying, complete the registration form on the PAH 2027 page.
            </p>
            <a
              href="https://pay.monime.io/069165304?amount=20600&checkout=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.04] active:scale-[0.96]"
            >
              Pay rego
            </a>
            <div className="mt-6 text-sm space-y-1">
              <p>Freetown, Sierra Leone</p>
              <a href="mailto:h4sierra@gmail.com" className="block hover:text-sh4-gold transition-colors">h4sierra@gmail.com</a>
              <p>+232 80 668 590</p>
              <a href="https://wa.me/23273928927" target="_blank" rel="noopener noreferrer" className="block hover:text-sh4-gold transition-colors">
                WhatsApp: +232 73 928 927
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-sh4-cream/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          variants={itemVariants}
        >
          <span>&copy; {new Date().getFullYear()} Sierra H4. All rights reserved.</span>
          <span className="flex items-center gap-2 text-sh4-gold">
            Designed &amp; developed by XGM 1SurePlayer
            <Image src="/me.jpg" width={24} height={24} alt="developer" className="rounded-full ring-2 ring-sh4-gold" />
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
