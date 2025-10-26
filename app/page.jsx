
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


const Home=()=>{
  return (
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
        <HeroEleven/>
        <Hero12/>
       
      
       
    
        </main>
        {/* chatbot modal */}
        {/* <ChatbotModal /> */}
      </div>
    )



  };

  const WrappedHome = () => (
    <Home />
  );

  export default WrappedHome;