import Hero12 from "@/components/Hero/Hero12";
import HeroEight from "@/components/Hero/HeroEight";
import HeroEleven from "@/components/Hero/HeroEleven";
import HeroFive from "@/components/Hero/HeroFive";
import HeroFour from "@/components/Hero/HeroFour";
import HeroNine from "@/components/Hero/HeroNine";
import HeroOne from "@/components/Hero/HeroOne";
import HeroSeven from "@/components/Hero/HeroSeven";
import HeroSix from "@/components/Hero/HeroSix";
import HeroTen from "@/components/Hero/HeroTen";
import HeroThree from "@/components/Hero/HeroThree";
import HeroTwo from "@/components/Hero/HeroTwo";
import React from "react";
import ChatbotModal from "@/components/Chat/ChatbotModal";
import StructuredData from "@/components/SEO/StructuredData";

export const metadata = {
  title: "Home",
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

const Home=()=>{
  return (
    <>
      <StructuredData type="SportsActivity" />
      <div 
      style={{
          
        width: "100vw",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        <main  id="top">
          <HeroOne/>
          <HeroTwo/>
          <HeroThree/>
          <HeroFour/>
          <HeroFive/>
          <HeroSix/>
          <HeroSeven/>
          <HeroEight/>
          <HeroNine/>
          <HeroTen/>
          {/* <HeroEleven/> */}
          <Hero12/>
         
        
         
      
          </main>
          {/* chatbot modal */}
          {/* <ChatbotModal /> */}
        </div>
    </>
    )



  };

  const WrappedHome = () => (
    <Home />
  );

  export default WrappedHome;