'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextTransition,  { presets } from 'react-text-transition';
// import {  Cursor } from "react-simple-typewriter";


const TEXTS = ['water', 'water', 'water', 'water'];


const Hero1=()=>{
    const [index, setIndex] = useState("");

    // text typo
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    

    return (
      <>
        <section
          id="section1"
          className="px-[1rem] lg:px-[3rem] bg-cover kenburns-top bg-no-repeat min-h-screen pt-32 lg:pt-40 "
          style={{ backgroundImage: "url('/d1.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

          <div className="z-10 relative tracking-[1px] text-gray-100 text-3xl lg:text-5xl space-y-5">
            <h1 className="uppercase relative  font-black  text-center z-10 ">
              welcome to
            </h1>
            <h1 className="uppercase relative  font-black  text-center z-10 bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
              sierra Hash house harriers & harriettes
            </h1>

            <div className="text-center text-3xl text-gray-100 z-10 ">
              <h1>We are a drinking club with a running problem.</h1>
              <h1>
                We drink beer to save
                <span>
                  <TextTransition
                    springConfig={presets.soft}>
                    {" "}
                    {TEXTS[index % TEXTS.length]} 
                  </TextTransition>{" "}
                </span>
              </h1>
            </div>
          </div>
        </section>
      </>
    );


};
export default Hero1;