'use client';

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./animations";

const reasons = [
  { n: "01", title: "Be healthy", desc: "To promote physical fitness amongst its members." },
  { n: "02", title: "Be strong", desc: "To get rid of weekend hangovers." },
  { n: "03", title: "Beer it", desc: "To acquire a good thirst and to satisfy it with beer." },
  { n: "04", title: "Be fast", desc: "To persuade the older members that they are not as old as they feel." },
];

const WhyWeHash = () => {
  return (
    <section className="bg-white border-y-2 border-sh4-ink px-6 md:px-10 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger(0.1)}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl uppercase text-sh4-ink mb-11">
          Why do we hash?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason) => (
            <motion.div key={reason.n} variants={fadeUp}>
              <div className="font-display text-5xl text-sh4-gold leading-none">{reason.n}</div>
              <div className="font-bold text-lg mt-2.5 text-sh4-ink">{reason.title}</div>
              <p className="mt-2 text-[15px] leading-relaxed text-sh4-body">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyWeHash;
