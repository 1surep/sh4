'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "@/components/Home/animations";

const traditions = [
  "Down Downs to be drunk with the left hand.",
  "No headgear worn at Down Downs. Includes spectacles and sunglasses.",
  "Permission required to exit or enter the Circle. Put your mug on your head and signal whoever is in charge.",
  "At a Down Down, finish ALL your drink and place your mug upside down on your head.",
  "Never point. Bend your arm and direct your elbow towards the person.",
  "Do not talk in the Circle unless called upon to do so.",
  "Never refuse to sit on the ice when punished, regardless of your believed innocence.",
  "A hasher wearing new shoes is obliged to drink from one of them or surrender it to the shoe stomper.",
];

const objectives = [
  "To promote physical fitness amongst its members.",
  "To get rid of weekend hangovers.",
  "To acquire a good thirst and satisfy it in beer.",
  "To persuade the older members that they are not as old as they feel.",
];

const rules = [
  "There ARE no rules, but the Grand Master (GM) is always right.",
  "If the Grand Master is wrong, refer to Rule 1.",
  "All other rules do not exist and are therefore null and void.",
];

const guidelines = [
  "The Religious Adviser (RA) usually becomes Grand Master at the end of his or her tenure unless Mismanagement rules otherwise.",
  "The tenure of a Mismanagement Team is one year.",
  "The Hare is responsible for laying the trail or accompanying the hasher laying it.",
  "A new hasher turning up after a run without taking part cannot be introduced as a Virgin in the Circle.",
  "To earn a Hash Handle, a hasher should have run or walked at least 10 times. Any decision to name a hasher is at the GM's discretion.",
  "Sierra H4 will not rename a hasher previously named by any other kennel worldwide, and expects the same courtesy in return.",
  "Hashers risk being iced, or worse, if not properly dressed in hash attire. No sandals, slippers or crocs. Badges and patches only in the circle by visitors or virgins.",
  "All Sierra H4 hashers are subject to the discipline of the kennel they are visiting.",
  "No hasher should conduct private business at a Sierra H4 venue or use the Sierra H4 logo for private business.",
  "Each new Mismanagement Team should review this document within the first quarter of their tenure. These guidelines are non-binding. If in doubt, refer to Rule 1.",
];

const whatWeDo = [
  {
    title: "We run",
    desc: "Every week a hare sets a trail with flour or chalk and the hounds chase it through Freetown's streets, beaches, and hills. Part treasure hunt, part workout, all fun.",
  },
  {
    title: "We drink",
    desc: "After the run comes the circle: laughs, questionable songs, and cold beverages. It's where friendships are forged and memories are made.",
  },
  {
    title: "We connect",
    desc: "From birthday runs to the Red Dress Run, from anniversary celebrations to international hash events, we create experiences that bring people together.",
  },
];

const ruOn = [
  { title: "No experience needed", desc: "First time? Perfect. We'll show you the ropes." },
  { title: "All are welcome", desc: "Locals, expats, visitors. Everyone's family here." },
  { title: "Global connection", desc: "Join a worldwide community of hashers in 180+ countries." },
];

export default function About() {
  return (
    <div>
      {/* HERO HEADER */}
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <p className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
            Sierra Hash House Harriers &amp; Harriettes
          </p>
          <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase mt-2">
            About Sierra H4
          </h1>
          <p className="text-lg text-sh4-cream/85 max-w-xl mt-5">
            Freetown&apos;s favorite drinking club with a running problem.
          </p>
        </motion.div>
      </header>

      {/* WHO WE ARE */}
      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-sh4-ink">Who we are</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-sh4-body">
              <p>
                Welcome to <strong className="text-sh4-ink">Sierra Hash House Harriers &amp; Harriettes (Sierra H4)</strong>, where the streets of Freetown become our playground and every run is an adventure waiting to happen.
              </p>
              <p>
                We&apos;re not your typical running club. We&apos;re a vibrant community of runners, walkers, and beer enthusiasts who believe fitness should be fun, social, and maybe just a little bit ridiculous.
              </p>
              <p>
                Part of the global Hash House Harriers family since our founding, we bring the spirit of hashing to the hills, beaches, and bustling streets of Sierra Leone&apos;s capital.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="flex justify-center"
          >
            <Image
              src="/about.png"
              alt="Map of Sierra Leone"
              width={380}
              height={380}
              className="w-full max-w-[380px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* OUR ROOTS */}
      <section className="bg-white border-t-2 border-sh4-ink px-6 md:px-10 py-20 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase text-sh4-ink">Our roots</h2>
          <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-sh4-body">
            <p>
              The tradition began in 1938 in Kuala Lumpur, Malaya, when Thomson, Lee, Bennett and Gispert founded a club based on the old British game of Hare and Hounds. The name came from the &ldquo;Hash House&rdquo;, the mildly derogatory nickname of the Selangor Club Chambers, famous for its unimaginative, monotonous food.
            </p>
            <p>
              The HHH celebrated its 100th run on 15 August 1941 before World War II forced a temporary hibernation. The second chapter was founded in Singapore in 1962, Sydney followed in 1967, and the worldwide expansion exploded from there, reaching over 1,600 cities in more than 180 countries. The first true Interhash, in Hong Kong in 1978, drew around 800 hashers.
            </p>
            <p>
              Sierra H4 proudly carries this tradition forward in Freetown, adding our own West African flavor to the mix. We&apos;re putting Sierra Leone on the global hashing map, and we&apos;re just getting started.
            </p>
          </div>
          <a
            href="https://gotothehash.net/history/shakes.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-7 border-2 border-sh4-ink hover:bg-sh4-ink hover:text-sh4-cream text-sh4-ink font-bold text-sm px-5 py-[10px] rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Learn more about H3 history
          </a>
        </motion.div>
      </section>

      {/* RULES, GUIDELINES & TRADITIONS */}
      <section className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl uppercase">Rules, guidelines &amp; traditions</h2>
            <p className="mt-3 text-sh4-cream/70 max-w-2xl">
              The official doctrine of Sierra H4. Reviewed and approved by the SH4 Grand Master, DGM Promiscuous Dick and the SH4 Mismanagement Team, 2025.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="grid md:grid-cols-2 gap-12 mt-12"
          >
            {/* LEFT COLUMN */}
            <motion.div variants={fadeUp} className="space-y-10">
              <div>
                <h3 className="font-display text-2xl uppercase text-sh4-gold">The rules</h3>
                <ol className="mt-3 space-y-2 text-[15px] leading-relaxed text-sh4-cream/85 list-decimal list-outside pl-5">
                  {rules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase text-sh4-gold">Objectives</h3>
                <ol className="mt-3 space-y-2 text-[15px] leading-relaxed text-sh4-cream/85 list-decimal list-outside pl-5">
                  {objectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase text-sh4-gold">Traditions</h3>
                <ol className="mt-3 space-y-2 text-[15px] leading-relaxed text-sh4-cream/85 list-decimal list-outside pl-5">
                  {traditions.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-2xl uppercase text-sh4-gold">Guidelines</h3>
              <ol className="mt-3 space-y-2 text-[15px] leading-relaxed text-sh4-cream/85 list-decimal list-outside pl-5">
                {guidelines.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl uppercase text-sh4-ink mb-11"
          >
            What we do
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.08)}
            className="grid md:grid-cols-3 gap-6"
          >
            {whatWeDo.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white border border-sh4-line rounded-xl p-7"
              >
                <div className="font-display text-3xl uppercase text-sh4-gold">{item.title}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-sh4-body">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAKING HISTORY / PAH 2027 TEASER */}
      <section className="relative bg-sh4-ink text-sh4-cream overflow-hidden">
        <Image
          src="/freetown.jpg"
          alt="Freetown coastline"
          fill
          className="absolute inset-0 object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-sh4-ink/60" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center"
        >
          <p className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">Making history</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-tight mt-2">
            PAH 2027 comes to Freetown
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-sh4-cream/85 max-w-2xl mx-auto">
            In 2025, Sierra Leone made history by winning the bid to host the Pan Africa Hash 2027, beating other African countries. From breathtaking beach runs to lush rainforest trails, Freetown will show the continent what Sierra Leone hospitality is all about.
          </p>
          <Link
            href="/pan-africa-2027"
            className="inline-block mt-7 bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            On on to PAH 2027
          </Link>
        </motion.div>
      </section>

      {/* R U ON? */}
      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl uppercase text-sh4-ink">R U on?</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-sh4-body">
            Whether you&apos;re a seasoned hasher or have never heard of hashing before, we welcome everyone. All fitness levels, all ages, all backgrounds. If you can walk or run 5km and enjoy good company, you&apos;re in.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
          className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mt-11 text-left"
        >
          {ruOn.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-white border border-sh4-line rounded-xl p-6"
            >
              <div className="font-bold text-sh4-ink">{item.title}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-sh4-body">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-11"
        >
          <p className="font-bold text-sh4-amber max-w-xl mx-auto">
            Lace up and hit the trail. The Sierra H4 adventure begins where the road ends.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
