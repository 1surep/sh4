import Events from "@/components/Events/Events";
import React from "react";

export const metadata = {
  title: "Events",
  description: "Discover upcoming Sierra H4 events, weekly runs, special hashes, and social gatherings in Freetown, Sierra Leone. Join us for fun, fitness, and fellowship. Check out our event calendar!",
  keywords: [
    "Sierra H4 events",
    "Hash House Harriers events",
    "Hashing events Freetown",
    "Sierra H4 calendar",
    "Hash runs Sierra Leone"
  ],
  openGraph: {
    title: "Events - Sierra H4 Hash House Harriers & Harriettes",
    description: "Discover upcoming Sierra H4 events, weekly runs, and special hashes in Freetown. Join us for fun, fitness, and fellowship.",
    url: "https://sierrah4.com/even",
    images: [
      {
        url: "/event1.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 Events",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/even",
  },
};

const EventPage=()=>{
    return (
        <div>
            <Events/>
        </div>
    )



};
export default EventPage;