'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

const stats = [
  { label: "Runs", value: "Every Wednesday & 1st Saturday" },
  { label: "Time", value: "6:00 PM, on on" },
  { label: "Run rego", value: "NLe 30 · NLe 250" },
  { label: "Next big one", value: "Pan Africa Hash · October 2027" },
];

const Hero = () => {
  return (
    <header className="relative bg-sh4-ink text-sh4-cream overflow-hidden pt-28">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/beer.jpg"
          alt="Sierra H4 hashers on trail"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-sh4-ink/20 to-sh4-ink/85" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger(0.12, 0.1)}
        className="relative max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-16"
      >
        <motion.p variants={fadeUp} className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
          A drinking club with a running problem &middot; Freetown
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 font-display text-[15vw] leading-[0.98] sm:text-7xl md:text-8xl lg:text-[7.5rem] uppercase max-w-4xl"
        >
          We drink beer<br />to save water
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-sh4-cream/85 max-w-lg text-pretty">
          Experts in running, drinking, and making excuses for being late. Every trail ends in beer, songs, and a circle. R U on?
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-3 mt-8 flex-wrap">
          <a
            href="https://pay.monime.io/069165304?amount=20600&checkout=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Rego PAH 2027
          </a>
          <Link
            href="/even"
            className="border-2 border-sh4-cream/60 hover:border-sh4-gold hover:text-sh4-gold text-sh4-cream font-bold text-[15px] px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            This week&apos;s run
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap mt-14 border-t border-sh4-cream/25">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 min-w-[160px] py-5 pr-6 first:pl-0 pl-6 border-l border-sh4-cream/25 first:border-l-0">
              <div className="text-xs tracking-widest uppercase text-sh4-gold font-bold">{stat.label}</div>
              <div className="text-base font-semibold mt-1.5">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
