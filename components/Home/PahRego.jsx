'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "./animations";

const PahRego = () => {
  return (
    <section className="relative bg-sh4-ink text-sh4-cream overflow-hidden">
      <Image
        src="/freetown.jpg"
        alt="Freetown coastline"
        fill
        className="absolute inset-0 object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sh4-ink/90 to-sh4-ink/55" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/pahlogo.jpg"
              alt="Pan Africa Hash 2027 logo"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border-2 border-sh4-gold"
            />
            <span className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
              Hosted by Sierra H4 &middot; The Duo Kennel
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">Pan Africa Hash 2027</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-sh4-cream/85 max-w-lg text-pretty">
            Hashing in Sierra Leone is unlike anything you&apos;ve ever experienced. Africa&apos;s hash comes home to Freetown: trails, beaches, beer, and the biggest circle on the continent.
          </p>
          <div className="flex gap-6 mt-6 flex-wrap text-[15px] font-semibold">
            <span className="border-l-[3px] border-sh4-gold pl-2.5">Freetown, Sierra Leone</span>
            <span className="border-l-[3px] border-sh4-gold pl-2.5">22 to 24 October 2027</span>
            <span className="border-l-[3px] border-sh4-gold pl-2.5">Hashers from all of Africa &amp; beyond</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRight}
          className="bg-sh4-cream text-sh4-ink rounded-xl p-7"
        >
          <h3 className="font-display text-2xl uppercase">Register now</h3>
          <ol className="mt-3.5 pl-5 text-sm leading-relaxed text-sh4-body list-decimal space-y-1">
            <li>Pay your rego. Secure checkout via Monime.</li>
            <li>Fill the registration form on the PAH 2027 page.</li>
            <li>Book your hotel early. Partner rates listed.</li>
          </ol>
          <a
            href="https://pay.monime.io/069165304?amount=20600&checkout=true"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[15px] py-3.5 rounded-xl mt-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Pay rego via Monime
          </a>
          <div className="flex gap-2.5 mt-2.5">
            <Link
              href="/pan-africa-2027/hotels"
              className="flex-1 text-center border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream font-bold text-[13.5px] py-2.5 rounded-xl transition-colors"
            >
              Hotels &amp; bookings
            </Link>
            <Link
              href="/pan-africa-2027"
              className="flex-1 text-center border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream font-bold text-[13.5px] py-2.5 rounded-xl transition-colors"
            >
              Visa &amp; protocol
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PahRego;
