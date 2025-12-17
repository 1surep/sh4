import Contact from "@/components/Contact/Contact";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Sierra H4 - Hash House Harriers & Harriettes. Contact us for information about weekly runs, events, membership, or the 2027 Pan Africa Hash. We'd love to hear from you!",
  keywords: [
    "Contact Sierra H4",
    "Hash House Harriers contact",
    "Join Sierra H4",
    "Sierra H4 membership",
    "Hash House Harriers Freetown contact"
  ],
  openGraph: {
    title: "Contact Sierra H4 - Hash House Harriers & Harriettes",
    description: "Get in touch with Sierra H4. Contact us for information about weekly runs, events, and membership.",
    url: "https://sierrah4.com/contact",
    images: [
      {
        url: "/contactus.svg",
        width: 1200,
        height: 630,
        alt: "Contact Sierra H4",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/contact",
  },
};

const ContactPage=()=>{
    return (
        <div>
            <Contact/>
        </div>
    )


};
export default ContactPage;
