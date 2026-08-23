'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./animations";

const team = [
  { img: "/misma/mom.png", role: "Religious Advisor", name: "Neneh Korraw" },
  { img: "/misma/warden.svg", role: "Circle Warden", name: "Leftover" },
  { img: "/misma/smooth.svg", role: "Master of Music", name: "Smooth Operator" },
  { img: "/misma/flash.jpg", role: "Hash Cash", name: "Sleeping Pucci" },
  { img: "/misma/borbor.svg", role: "Hash Beer", name: "Borbor Tumba" },
  { img: "/misma/haberdasher.png", role: "Haberdasher", name: "Hash Kush" },
  { img: "/misma/discipline.png", role: "Hash Discipline", name: "Presidential Virus" },
  { img: "/misma/holee.png", role: "On-Sec", name: "Put It In The Hole" },
  { img: "/misma/registrar.png", role: "Hash Registrar", name: "Rasta Plasta" },
  { img: "/misma/welfare.png", role: "Hash Welfare", name: "Little Fox" },
  { img: "/misma/dick-flash.svg", role: "Hash Flash", name: "Dick Rental" },
  { img: "/misma/ftf.jpg", role: "Trail Master", name: "Fuck The Teacher" },
  { img: "/misma/web-master.svg", role: "Web Master", name: "Pucci Engineer" },
  { img: "/misma/yap.png", role: "Int'l Coordinator", name: "Yap Yap Network" },
];

const Mismanagement = () => {
  return (
    <section className="bg-white border-t-2 border-sh4-ink px-6 md:px-10 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <p className="text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase mb-2">Mismanagement</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Meet our mismanagers</h2>
          <p className="mt-3.5 text-base leading-relaxed text-sh4-body max-w-xl">
            The crew that keeps the chaos organised. Rule 1: the GM is always right. Rule 2: if the GM is wrong, see Rule 1.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex items-center gap-8 bg-sh4-ink text-sh4-cream rounded-xl px-9 py-[30px] mt-9 mb-[22px] flex-wrap"
        >
          <Image
            src="/misma/gm26.png"
            alt="Grand Master Fuckimbo"
            width={132}
            height={132}
            className="rounded-full object-cover border-[3px] border-sh4-gold bg-sh4-cream"
          />
          <div className="flex-1 min-w-[240px]">
            <div className="text-xs tracking-widest uppercase text-sh4-gold font-bold">Grand Master</div>
            <div className="font-display text-4xl uppercase mt-1">Fuckimbo</div>
            <p className="mt-2 text-[14.5px] text-sh4-cream/75">Holder of Rule 1. Always right, even when wrong.</p>
          </div>
          <Link
            href="/about"
            className="border-2 border-sh4-gold hover:bg-sh4-gold hover:text-sh4-ink text-sh4-gold font-bold text-[13.5px] px-[18px] py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            Rules &amp; traditions
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger(0.035)}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="bg-sh4-cream border border-sh4-line hover:border-sh4-gold rounded-xl px-3.5 py-[22px] text-center transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={84}
                height={84}
                className="rounded-full object-cover bg-white mx-auto"
              />
              <div className="text-[11px] tracking-widest uppercase text-sh4-amber font-bold mt-3">{member.role}</div>
              <div className="font-bold text-[15px] mt-0.5 text-sh4-ink">{member.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mismanagement;
