import About from "@/components/About/About";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "Learn about Sierra H4 - Sierra Hash House Harriers & Harriettes. Discover our history, mission, and the vibrant hashing community in Freetown, Sierra Leone. Join Freetown's favorite drinking club with a running problem.",
  keywords: [
    "Sierra H4 history",
    "Hash House Harriers Freetown",
    "About Sierra H4",
    "Hashing community Sierra Leone",
    "Hash House Harriers mission"
  ],
  openGraph: {
    title: "About Sierra H4 - Hash House Harriers & Harriettes",
    description: "Learn about Sierra H4 - Freetown's favorite drinking club with a running problem. Discover our history and vibrant hashing community.",
    url: "https://sierrah4.com/about",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "About Sierra H4",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/about",
  },
};

const AboutPage=()=>{
    return (
        <div>
            <About/>
        </div>
    )



};
export default AboutPage;