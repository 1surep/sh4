'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./animations";

const events = [
  {
    id: 1,
    image: "/event1.jpg",
    title: "August celebrants, a weekend to remember",
    date: "September 14, 2025",
    desc: "A huge thank-you to all the amazing hashers who showed up for the celebrants' weekend.",
  },
  {
    id: 2,
    image: "/event2.jpg",
    title: "SH4 1st Anniversary & Handover Run",
    date: "5 to 7 December 2025",
    desc: "Occasions Resort, Lakka. Early-bird rego open. A full weekend of trail, circle, and celebration.",
  },
  {
    id: 3,
    image: "/event3.jpg",
    title: "Sierra H4 GM's Party, the first ever",
    date: "September 14, 2025",
    desc: "A special thanks to everyone who joined the GM's first ever party. Truly memorable.",
  },
];

const EventsPreview = () => {
  return (
    <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex items-baseline justify-between gap-5 mb-10 flex-wrap"
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Our events</h2>
          <Link href="/even" className="font-bold text-sm text-sh4-ink hover:text-sh4-amber transition-colors">
            All events
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="grid md:grid-cols-3 gap-7"
        >
          {events.map((event) => (
            <motion.article
              key={event.id}
              variants={fadeUp}
              className="bg-white border border-sh4-line rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <Image src={event.image} alt={event.title} width={500} height={280} className="w-full h-[210px] object-cover" />
              <div className="p-[22px] flex flex-col gap-2.5 flex-1">
                <div className="text-xs tracking-widest uppercase text-sh4-amber font-bold">{event.date}</div>
                <h3 className="text-lg leading-snug font-semibold text-sh4-ink">{event.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-sh4-body flex-1">{event.desc}</p>
                <Link href="/even" className="font-bold text-sm text-sh4-amber hover:text-sh4-ink transition-colors">
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
