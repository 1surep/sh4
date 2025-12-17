import Reports from "@/components/Reports/Reports";
import React from "react";

export const metadata = {
  title: "Reports",
  description: "Read hash reports and trail stories from Sierra H4 runs. Get the latest updates, trail descriptions, and hashing adventures from Freetown's favorite drinking club with a running problem.",
  keywords: [
    "Sierra H4 reports",
    "Hash House Harriers reports",
    "Hash trail reports",
    "Sierra H4 stories",
    "Hashing reports Freetown"
  ],
  openGraph: {
    title: "Reports - Sierra H4 Hash House Harriers & Harriettes",
    description: "Read hash reports and trail stories from Sierra H4 runs. Get the latest updates and hashing adventures.",
    url: "https://sierrah4.com/reports",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 Reports",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/reports",
  },
};

const ReportsPage=()=>{
    return (
        <div>
            <Reports/>
        </div>
    )


};
export default ReportsPage;