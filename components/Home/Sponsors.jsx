'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./animations";

const sponsors = [
  { href: "https://www.facebook.com/share/1LcvFmZSD7/?mibextid=wwXIfr", src: "/sponsor/amstel.jpg", alt: "Amstel Lager", name: "Amstel Lager" },
  { href: "https://npgroup-ltd.com/sierraleone/", src: "/sponsor/np.jpg", alt: "National Petroleum", name: "National Petroleum" },
  { href: "https://www.orange.sl/en/orange-money.html", src: "/sponsor/orange.jpg", alt: "Orange Money", name: "Orange Money" },
  { href: "https://tourism.gov.sl/", src: "/sponsor/tourism.jpg", alt: "Ministry of Tourism and Cultural Affairs", name: "Ministry of Tourism" },
  { href: "https://www.rokelbank.sl/", src: "/sponsor/rokel.png", alt: "Rokel Commercial Bank", name: "Rokel Commercial Bank" },
  { href: "https://monime.io/", src: "/sponsor/monime.svg", alt: "Monime", name: "Monime" },
];

const Sponsors = () => {
  return (
    <section className="bg-sh4-gold border-y-2 border-sh4-ink px-6 md:px-10 py-16 md:py-[72px]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <div className="flex items-baseline justify-between gap-5 flex-wrap">
            <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">Our sponsors</h2>
            <Link href="/contact" className="font-bold text-sm text-sh4-ink underline hover:no-underline">
              Become a sponsor
            </Link>
          </div>
          <p className="mt-2.5 text-[15.5px] text-sh4-ink/75 max-w-lg">
            Backed by the brands that keep Sierra Leone running. And drinking.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.07)}
          className="grid gap-3.5 mt-[30px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}
        >
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              variants={fadeUp}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-sh4-ink rounded-xl px-3.5 py-[22px] flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image src={sponsor.src} alt={sponsor.alt} width={140} height={54} className="h-[54px] max-w-full object-contain" />
              <span className="text-[12.5px] font-semibold text-sh4-ink text-center">{sponsor.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
