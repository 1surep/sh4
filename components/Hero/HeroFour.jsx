import Image from "next/image";
import React from "react";
import { FiCornerRightDown } from "react-icons/fi";


const HeroFour=()=>{
    return (
      <>
        <section className="min-h-screen bg-yellow-50 flex items-center justify-between pt-12 px-[0rem] lg:px-[3rem] w-full">
          <div className="bg-gray-100 grid grid-cols-1 lg:flex items-center gap-4">
            {/* image */}
            <div className="w-full">
              <Image
                src="/hashing.jpg"
                width={1920}
                height={1080}
                alt="image-of-sh4-hashers"
                className="w-full"
                quality={100}
                priority
              />
            </div>

            {/* write up */}
            <div className="w-full px-[1rem] py-8">
                {/* Heading */}
              <section className="relative flex flex-col items-center justify-center py-16 bg-white">
                {/* Background word */}
                <h1 className="absolute text-[6rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-widest">
                  HASH
                </h1>

                {/* Foreground text */}
                <div className="relative text-center">
                  <p className="text-[#f9b84f] font-semibold text-sm mb-2 tracking-wide">
                    HASHING
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    What is Hashing ?
                  </h2>
                </div>
              </section>

              <div className="py-6">
                <p className="tracking-[1px] text-base">
                The Hash House Harriers is an international group of non-competitive social running clubs. Enthusiasts refer to themselves as “hashers” and to the activity as “hashing”. Although the parameters that each chapter sets may differ, in general, a hare sets a trail and is followed by the pack. At the run’s conclusion, hashers typically eat, drink, and socialize. The group typically gets together to humourously note on-trail misbehaviour with tongue-in-cheek drinking songs and “down downs”.
                </p>
              </div>

              {/* Button */}
              <button className="items-center flex gap-1 text-[#f9b84f] cursor-pointer font-bold">
                Read More...<FiCornerRightDown  className="animate-bounce font-bold"/>
              </button>
            </div>
          </div>
        </section>
      </>
    );



};
export default HeroFour;