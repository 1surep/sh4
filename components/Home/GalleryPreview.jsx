'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewportOnce } from "./animations";

const shots = [
  { src: "/s1.jpg", alt: "Hashers on trail", span: "col-span-2 row-span-2" },
  { src: "/s2.jpg", alt: "Circle celebration", span: "col-span-2" },
  { src: "/s3.jpg", alt: "Down downs", span: "col-span-2" },
  { src: "/s5.jpg", alt: "Trail through Freetown hills", span: "col-span-2" },
  { src: "/s7.jpg", alt: "Pack running", span: "" },
  { src: "/s13.jpg", alt: "Sierra H4 group photo", span: "" },
];

const GalleryPreview = () => {
  return (
    <section className="bg-sh4-cream border-t-2 border-sh4-ink px-6 md:px-10 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex items-baseline justify-between gap-5 mb-10 flex-wrap"
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase text-sh4-ink">On trail</h2>
          <Link href="/gallery" className="font-bold text-sm text-sh4-ink hover:text-sh4-amber transition-colors">
            Full gallery
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.07)}
          className="grid grid-cols-3 md:grid-cols-6 auto-rows-[150px] gap-3.5"
        >
          {shots.map((shot) => (
            <motion.div key={shot.src} variants={scaleIn} className={`${shot.span} w-full h-full overflow-hidden rounded-xl`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
