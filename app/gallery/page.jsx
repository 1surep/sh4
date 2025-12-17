import Gallery from "@/components/Gallery/Gallery";
import React from "react";

export const metadata = {
  title: "Gallery",
  description: "Browse photos from Sierra H4 events, weekly runs, and hashing adventures in Freetown, Sierra Leone. See our community in action and experience the spirit of hashing.",
  keywords: [
    "Sierra H4 photos",
    "Hash House Harriers gallery",
    "Hashing photos Freetown",
    "Sierra H4 events",
    "Hash House Harriers pictures"
  ],
  openGraph: {
    title: "Gallery - Sierra H4 Hash House Harriers & Harriettes",
    description: "Browse photos from Sierra H4 events, weekly runs, and hashing adventures in Freetown.",
    url: "https://sierrah4.com/gallery",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/gallery",
  },
};

const GalleryPage=()=>{
    return (
        <div>
            <Gallery/>
        </div>
    )



};
export default GalleryPage;