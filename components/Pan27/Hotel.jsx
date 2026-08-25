"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../Home/animations";
import ChatbotModal from "../Chat/ChatbotModal";

const hotels = [
  {
    name: "Bintumani Hotel",
    badge: "Luxury · Main venue",
    image: "/tourism/t27.jpg",
    rating: 5,
    amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Pool"],
  },
  {
    name: "Radisson Blu Mammy Yoko Hotel",
    badge: "Mid-range · 3 km",
    image: "/tourism/t22.jpg",
    rating: 4,
    amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Gym"],
  },
  {
    name: "The Lead Hotel",
    badge: "Budget · 2 km",
    image: "/tourism/t15.jpg",
    rating: 3,
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
];

const bookingInfo = [
  "All hotel bookings should be made directly with the hotel.",
  'Mention "Pan Africa Hash 2027" when booking to get special rates.',
  "Early booking is recommended. Hotels fill up quickly during the event.",
  "Transportation will be arranged from all official hotels to the main venue.",
];

const Hotel = () => {
  return (
    <div className="pt-28">
      {/* Header */}
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-16 md:py-[72px]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase mb-3">
            Pan Africa Hash 2027
          </p>
          <h1 className="font-display text-[44px] md:text-[64px] lg:text-[84px] leading-[1] uppercase mb-5">
            Hotels &amp; bookings
          </h1>
          <p className="text-lg text-sh4-cream/85 max-w-xl">
            Find the perfect place to stay during Pan Africa Hash 2027. Transportation runs from all official hotels to the main venue.
          </p>
        </div>
      </header>

      {/* Hotels */}
      <section className="bg-sh4-cream px-6 md:px-10 py-16 md:py-[88px]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="grid md:grid-cols-3 gap-7"
          >
            {hotels.map((hotel) => (
              <motion.article
                key={hotel.name}
                variants={fadeUp}
                className="bg-white border border-sh4-line rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-[210px] w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-sh4-ink text-sh4-cream text-xs font-bold px-3 py-1.5 rounded-full">
                    {hotel.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-semibold text-sh4-ink">
                    {hotel.name}
                  </h3>

                  <div className="text-sh4-gold text-sm tracking-wider" aria-label={`${hotel.rating} out of 5 stars`}>
                    {"★".repeat(hotel.rating)}
                    <span className="text-sh4-line">
                      {"★".repeat(5 - hotel.rating)}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="bg-sh4-cream border border-sh4-line text-sh4-body text-xs px-2.5 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-sh4-muted">
                    Rate per night: to be announced
                  </div>

                  <Link
                    href="/contact"
                    className="mt-2 block text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold py-3 rounded-xl transition-colors duration-300"
                  >
                    Ask about booking
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-6xl mx-auto mt-10 bg-white border border-sh4-line rounded-xl p-7 md:p-8"
          >
            <h2 className="font-display text-2xl uppercase text-sh4-ink mb-4">
              Booking information
            </h2>
            <ul className="space-y-2.5 text-sh4-body">
              {bookingInfo.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-sh4-gold font-bold">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <ChatbotModal />
    </div>
  );
};

export default Hotel;
