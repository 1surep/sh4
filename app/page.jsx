import React from "react";
import StructuredData from "@/components/SEO/StructuredData";
import Hero from "@/components/Home/Hero";
import ContactStrip from "@/components/Home/ContactStrip";
import WhatIsHashing from "@/components/Home/WhatIsHashing";
import WhyWeHash from "@/components/Home/WhyWeHash";
import PahRego from "@/components/Home/PahRego";
import EventsPreview from "@/components/Home/EventsPreview";
import Mismanagement from "@/components/Home/Mismanagement";
import GalleryPreview from "@/components/Home/GalleryPreview";
import Sponsors from "@/components/Home/Sponsors";
import ContactSection from "@/components/Home/ContactSection";

export const metadata = {
  title: "Sierrah4",
  description: "Welcome to Sierra H4 - Freetown's favorite drinking club with a running problem. Join us for weekly trail runs, social events, and the 2027 Pan Africa Hash. Experience the best of hashing in Sierra Leone.",
  openGraph: {
    title: "Sierra H4 - Hash House Harriers & Harriettes",
    description: "Freetown's favorite drinking club with a running problem. Join us for weekly runs and social events.",
    url: "https://sierrah4.com",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 - Home",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com",
  },
};

const Home = () => {
  return (
    <>
      <StructuredData type="SportsActivity" />
      <main id="top" className="bg-sh4-cream">
        <Hero />
        <ContactStrip />
        <WhatIsHashing />
        <WhyWeHash />
        <PahRego />
        <EventsPreview />
        <Mismanagement />
        <GalleryPreview />
        <Sponsors />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
