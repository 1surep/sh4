"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/components/Home/animations";

const events = [
  {
    image: "/event1.jpg",
    date: "September 14, 2025 · Sierrah4-Harries",
    title: "August celebrants, a weekend to remember",
    desc: "Sierra H4 August Celebrants says a huge thank you to all our amazing hashers who showed up and showed out for the celebrants' weekend.",
  },
  {
    image: "/event2.jpg",
    date: "5 to 7 December 2025 · Occasions Resort, Lakka",
    title: "SH4 1st Anniversary & Handover Run 2025",
    desc: "A full weekend of trail, circle, and celebration as Sierra H4 turns one and hands over to the new Mismanagement. Early-bird rego from 6th September.",
    regoHref: "https://forms.gle/44daJa2kMJ1JGMEs6",
  },
  {
    image: "/event3.jpg",
    date: "September 14, 2025 · Sierrah4-Harries",
    title: "Sierra H4 GM's Party, the first ever",
    desc: "A special thanks to everyone who joined the GM's first ever party. It was truly memorable.",
  },
];

const Events = () => {
  return (
    <div>
      {/* HEADER */}
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-[72px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.12, 0.1)}
          className="max-w-[1160px] mx-auto"
        >
          <motion.p variants={fadeUp} className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
            Sierra H4
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-[clamp(44px,6vw,84px)] leading-none uppercase"
          >
            Our events
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-sh4-cream/85 max-w-[560px]">
            Runs, parties, and everything in between. Every event ends in a circle.
          </motion.p>
        </motion.div>
      </header>

      {/* EVENT CARDS */}
      <section className="bg-sh4-cream px-6 md:px-10 py-[88px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="max-w-[1160px] mx-auto grid md:grid-cols-3 gap-7"
        >
          {events.map((event) => (
            <motion.article
              key={event.title}
              variants={fadeUp}
              className={`bg-white rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                event.regoHref ? "border-2 border-sh4-gold" : "border border-sh4-line"
              }`}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={230}
                className="w-full h-[230px] object-cover"
              />
              <div className="p-6 flex flex-col gap-2.5 flex-1">
                <div className="text-xs tracking-widest uppercase text-sh4-amber font-bold">{event.date}</div>
                <h3 className="text-[19px] leading-snug font-semibold text-sh4-ink">{event.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-sh4-body flex-1">{event.desc}</p>
                {event.regoHref && (
                  <a
                    href={event.regoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block w-full text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-[15px] py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Rego for this event
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* WEEKLY RUN CTA */}
      <section className="bg-sh4-gold border-t-2 border-sh4-ink px-6 md:px-10 py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap"
        >
          <div>
            <h2 className="font-display text-[34px] uppercase text-sh4-ink">
              The next run is never far away
            </h2>
            <p className="mt-1.5 text-sh4-ink/80 text-base">
              Every Wednesday and 1st Saturday, 6:00 PM. Run rego NLe 30, visitors NLe 250.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-sh4-ink text-sh4-cream font-bold text-[15px] px-[26px] py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Ask where to meet
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Events;
