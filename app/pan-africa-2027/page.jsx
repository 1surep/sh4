import React from "react";
import PanAfrica2027 from "../../components/Pan27/PanAfrica2027";
import StructuredData from "@/components/SEO/StructuredData";

export const metadata = {
  title: "Pan Africa Hash 2027",
  description: "Join Sierra H4 for Pan Africa Hash 2027 in Freetown, Sierra Leone! The biggest hashing event in Africa. Experience incredible trails, amazing hospitality, and connect with hashers from across the continent. ON ON!",
  keywords: [
    "Pan Africa Hash 2027",
    "PAH 2027",
    "Pan Africa Hash Freetown",
    "Sierra H4 PAH 2027",
    "Hash House Harriers Africa",
    "Pan Africa Hash Sierra Leone"
  ],
  openGraph: {
    title: "Pan Africa Hash 2027 - Hosted by Sierra H4",
    description: "Join Sierra H4 for Pan Africa Hash 2027 in Freetown, Sierra Leone! The biggest hashing event in Africa. Experience incredible trails and amazing hospitality.",
    url: "https://sierrah4.com/pan-africa-2027",
    images: [
      {
        url: "/pan2027a.png",
        width: 1200,
        height: 630,
        alt: "Pan Africa Hash 2027",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/pan-africa-2027",
  },
};

const Page = () => {
  return (
    <>
      <StructuredData type="Event" />
      <div>
        <PanAfrica2027 />
      </div>
    </>
  );
};

export default Page;