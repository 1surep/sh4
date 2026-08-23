'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/Home/animations";

const Gallery = () => {
  // Gallery data - easily add or remove images here
  const galleryData = [
    // { id: 1, src: "/img1.jpg", alt: "Gallery image 1" },
    { id: 2, src: "/img2.jpg", alt: "Gallery image 2" },
    { id: 3, src: "/img3.jpg", alt: "Gallery image 3" },
    // { id: 4, src: "/img4.jpg", alt: "Gallery image 4" },
    { id: 5, src: "/img5.jpg", alt: "Gallery image 5" },
    { id: 6, src: "/img6.jpg", alt: "Gallery image 6" },
    { id: 7, src: "/img7.jpg", alt: "Gallery image 7" },
    { id: 8, src: "/img8.jpg", alt: "Gallery image 8" },
    { id: 9, src: "/img9.jpg", alt: "Gallery image 9" },
    { id: 10, src: "/img10.jpg", alt: "Gallery image 10" },
    { id: 11, src: "/img11.jpg", alt: "Gallery image 11" },
    { id: 12, src: "/img12.jpg", alt: "Gallery image 12" },
    { id: 13, src: "/img13.jpg", alt: "Gallery image 13" },
    { id: 14, src: "/img14.jpg", alt: "Gallery image 14" },
    { id: 15, src: "/img15.jpg", alt: "Gallery image 15" },
    { id: 16, src: "/img16.jpg", alt: "Gallery image 16" },
    { id: 17, src: "/img17.jpg", alt: "Gallery image 17" },
    { id: 18, src: "/img18.jpg", alt: "Gallery image 18" },
    { id: 19, src: "/img19.jpg", alt: "Gallery image 19" },
    { id: 20, src: "/img20.jpg", alt: "Gallery image 20" },
    { id: 21, src: "/img21.jpg", alt: "Gallery image 21" },
    { id: 22, src: "/img22.jpg", alt: "Gallery image 22" },
    { id: 23, src: "/img23.jpg", alt: "Gallery image 23" },
    { id: 24, src: "/img24.jpg", alt: "Gallery image 24" },
    { id: 25, src: "/img25.jpg", alt: "Gallery image 25" },
    { id: 26, src: "/img26.jpg", alt: "Gallery image 26" },
    { id: 27, src: "/img27.jpg", alt: "Gallery image 27" },
    { id: 28, src: "/img28.jpg", alt: "Gallery image 28" },
    { id: 29, src: "/img29.jpg", alt: "Gallery image 29" },
    { id: 30, src: "/img30.jpg", alt: "Gallery image 30" },
    { id: 31, src: "/img31.jpg", alt: "Gallery image 31" },
    { id: 32, src: "/img32.jpg", alt: "Gallery image 32" },
    { id: 33, src: "/img33.jpg", alt: "Gallery image 33" },
    { id: 34, src: "/img34.jpg", alt: "Gallery image 34" },
    { id: 35, src: "/img35.jpg", alt: "Gallery image 35" },
    { id: 36, src: "/img36.jpg", alt: "Gallery image 36" },
    { id: 37, src: "/img37.jpg", alt: "Gallery image 37" },
    { id: 38, src: "/img38.jpg", alt: "Gallery image 38" },
    { id: 39, src: "/img39.jpg", alt: "Gallery image 39" },
    { id: 40, src: "/img40.jpg", alt: "Gallery image 40" },
    { id: 41, src: "/img41.jpg", alt: "Gallery image 41" },
    { id: 42, src: "/img42.jpg", alt: "Gallery image 42" },
    { id: 43, src: "/img43.jpg", alt: "Gallery image 43" },
    { id: 44, src: "/img44.jpg", alt: "Gallery image 44" },
    { id: 45, src: "/img45.jpg", alt: "Gallery image 45" },
    { id: 46, src: "/img46.jpg", alt: "Gallery image 46" },
    { id: 47, src: "/img47.jpg", alt: "Gallery image 47" },
    { id: 48, src: "/img48.jpg", alt: "Gallery image 48" },
    { id: 49, src: "/img49.jpg", alt: "Gallery image 49" },
    { id: 50, src: "/img50.jpg", alt: "Gallery image 50" },
    { id: 51, src: "/img51.jpg", alt: "Gallery image 51" },
    { id: 52, src: "/img52.jpg", alt: "Gallery image 52" },
    { id: 53, src: "/img53.jpg", alt: "Gallery image 53" },
    { id: 54, src: "/img54.jpg", alt: "Gallery image 54" },
    { id: 55, src: "/img55.jpg", alt: "Gallery image 55" },
    { id: 56, src: "/img56.jpg", alt: "Gallery image 56" },
    { id: 57, src: "/img57.jpg", alt: "Gallery image 57" },
    { id: 58, src: "/img58.jpg", alt: "Gallery image 58" },
    { id: 60, src: "/img60.jpg", alt: "Gallery image 60" },
    { id: 61, src: "/img61.jpg", alt: "Gallery image 61" },
    { id: 62, src: "/img62.jpg", alt: "Gallery image 62" },
    { id: 63, src: "/img63.jpg", alt: "Gallery image 63" },
    { id: 64, src: "/img64.jpg", alt: "Gallery image 64" },
    { id: 65, src: "/img65.jpg", alt: "Gallery image 65" },
    { id: 66, src: "/img66.jpg", alt: "Gallery image 66" },
    { id: 67, src: "/img67.jpg", alt: "Gallery image 67" },
  ];

  return (
    <>
      {/* HEADING */}
      <header className="bg-sh4-ink text-sh4-cream pt-28 pb-14 md:pb-16 px-6 md:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.1, 0.05)}
          className="max-w-6xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
            Sierra H4 Gallery
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] uppercase"
          >
            Photo collection
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-sh4-cream/85 max-w-lg text-pretty">
            Trails, circles, down downs, and the occasional questionable decision. All documented by Hash Flash.
          </motion.p>
        </motion.div>
      </header>

      {/* Gallery grid section */}
      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4">
          {galleryData.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              width={400}
              height={500}
              alt={image.alt}
              className="w-full h-auto rounded-xl mb-4 block break-inside-avoid"
            />
          ))}
        </div>
        <p className="max-w-6xl mx-auto mt-6 text-sm text-sh4-muted">
          Showing the full collection &middot; {galleryData.length} photos. More on Instagram.
        </p>
      </section>
    </>
  );
};

export default Gallery;
