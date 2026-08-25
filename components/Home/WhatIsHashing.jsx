'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "./animations";

const WhatIsHashing = () => {
  return (
    <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -top-14 -left-2 font-display text-[10rem] md:text-[11rem] leading-none text-sh4-ink/5 select-none pointer-events-none"
          >
            HASH
          </div>
          <p className="relative text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase">
            Hash House Harriers &amp; Harriettes
          </p>
          <h2 className="relative font-display text-4xl md:text-5xl uppercase leading-tight text-sh4-ink">
            What is hashing?
          </h2>
          <p className="relative mt-5 text-[17px] leading-relaxed text-sh4-body text-pretty">
            The Hash House Harriers is an international group of non-competitive social running clubs. A hare sets a trail, the pack follows, and at the run&apos;s conclusion hashers eat, drink, and socialize, noting on-trail misbehaviour with tongue-in-cheek drinking songs and &ldquo;down downs&rdquo;.
          </p>
          <div className="relative flex gap-3 mt-6 flex-wrap">
            <Link
              href="/about"
              className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              About Sierra H4
            </Link>
            <a
              href="https://www.hashhouseharriers.com/what-is-hashing/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream text-sh4-ink font-bold text-sm px-5 py-[10px] rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              More about hashing
            </a>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <Image
            src="/hashing.jpg"
            alt="Sierra H4 pack on trail in Freetown"
            width={640}
            height={480}
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsHashing;
