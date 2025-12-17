import Whoiscoming from "@/components/Whoiscoming/Whoiscoming";

export const metadata = {
  title: "Who's Coming",
  description: "See who's coming to Sierra H4 events and Pan Africa Hash 2027. Check the list of registered hashers and join the community. Connect with fellow hashers from around the world.",
  keywords: [
    "Sierra H4 who's coming",
    "PAH 2027 attendees",
    "Hash House Harriers registration",
    "Pan Africa Hash attendees",
    "Sierra H4 participants"
  ],
  openGraph: {
    title: "Who's Coming - Sierra H4 Hash House Harriers & Harriettes",
    description: "See who's coming to Sierra H4 events and Pan Africa Hash 2027. Check the list of registered hashers.",
    url: "https://sierrah4.com/whoiscoming",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra H4 Who's Coming",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/whoiscoming",
  },
};

const WhoiscomingPage=()=>{
    return (
        <div>
            <Whoiscoming/>
        </div>
    )


};
export default WhoiscomingPage