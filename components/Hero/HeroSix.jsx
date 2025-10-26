'use client'

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSix = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // Changed amount to 0.5

    return (
      <div>
        {/* Section 1 HEADING */}
        <section className="relative flex flex-col items-center justify-center py-16 bg-white">
          {/* Background word */}
          <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
            HASH
          </h1>

          {/* Foreground text */}
          <div className="relative text-center">
            <p className="text-[#f9b84f] font-semibold text-2xl mb-2 tracking-[1px]">
              HASHING
            </p>
            <h2 className="text-4xl md:text-5xl tracking-[1px] font-bold text-gray-800">
              Why Do We Hash ?
            </h2>
          </div>
        </section>

        {/* section 2 body */}
        <section className="min-h-screen bg-yellow-50 relative overflow-hidden">
          {/* Background Runner Image */}
          <div ref={ref} className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="/onon.png"
              alt="Runner"
              className="h-full w-auto object-cover opacity-90"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: isInView ? 0 : 100, opacity: isInView ? 0.9 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>


           {/* Why we hash info */}
           <div className="absolute inset-0 z-20 p-8 md:p-16">



             {/* Mobile: Grid layout */}
             <div className="md:hidden grid grid-cols-1 gap-8 h-full overflow-y-auto">
               
               {/* Dark overlay for mobile */}
               <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/40 to-gray-900/60 z-[1]" aria-hidden="true"></div>

                {/* 01. Be Healthy */}
               <div className="max-w-xs mx-auto relative z-10">
                 <div className="text-gray-50 text-6xl font-bold mb-2 z-10">01.</div>
                 <div className="text-[#f9b84f] text-2xl font-semibold italic mb-3">Be Healthy</div>
                 <div className="w-16 h-0.5 bg-gray-50 mb-4"></div>
                 <p className="text-gray-50 text-sm leading-relaxed">
                    To promote physical fitness amongst it's members.
                 </p>
               </div>

               {/* 02. Be One of Us */}
               <div className="max-w-xs mx-auto relative z-10">
                 <div className="text-gray-50 text-6xl font-bold mb-2">02.</div>
                 <div className="text-[#f9b84f] text-2xl font-semibold italic mb-3">Be Strong</div>
                 <div className="w-16 h-0.5 bg-gray-50 mb-4"></div>
                 <p className="text-gray-50 text-sm leading-relaxed">
                   To get rid of weekends hangoversssssssssssssssssssss.
                 </p>
               </div>

               {/* 03. Be Strong */}
               <div className="max-w-xs mx-auto relative z-10">
                 <div className="text-gray-50 text-6xl font-bold mb-2">03.</div>
                 <div className="text-[#f9b84f] text-2xl font-semibold italic mb-3">Beer It</div>
                 <div className="w-16 h-0.5 bg-gray-50 mb-4"></div>
                 <p className="text-gray-50 text-sm leading-relaxed">
                    To acquire a good thirst and to satisfy it with beer.
                 </p>
               </div>

               {/* 04. Be Fast */}
               <div className="max-w-xs mx-auto relative z-10">
                 <div className="text-gray-50 text-6xl font-bold mb-2">04.</div>
                 <div className="text-[#f9b84f] text-2xl font-semibold italic mb-3">Be Fast</div>
                 <div className="w-16 h-0.5 bg-gray-50 mb-4"></div>
                 <p className="text-gray-50 text-sm leading-relaxed">
                    To persuade the older members that they are not as old as they feel.
                 </p>
               </div>
             </div>

             {/* Desktop: Absolute positioned layout */}
             <div className="hidden md:block">
       

               {/* Top Left - 01. Be Healthy */}
               <div className="absolute top-16 left-16 max-w-xs z-10 hvr-skew">
                 <div className="text-gray-700 text-7xl font-bold mb-2">01.</div>
                 <div className="text-[#f9b84f] text-3xl font-semibold italic mb- ">Be Healthy</div>
                 {/* <div className="w-16 h-0.5 text-gray-600 mb-4 z-10"></div> */}
                 <p className="text-base leading-relaxed text-gray-700 z-10">
                    To promote physical fitness amongst it's members.
                 </p>
               </div>

               {/* Bottom Left - 02. Be One of Us */}
               <div className="absolute bottom-16 left-16 max-w-xs z-10 hvr-skew">
                 <div className="text-gray-700 text-7xl font-bold mb-2">02.</div>
                 <div className="text-[#f9b84f] text-3xl font-semibold italic mb-">Be Strong</div>
                 {/* <div className="w-16 h-0.5 bg-gray-50 mb-4"></div> */}
                 <p className="text-base leading-relaxed text-gray-700 z-10">
                    To get rid of weekend hangovers.
                 </p>
               </div>

               {/* Top Right - 03. Be Strong */}
               <div className="absolute top-16 right-16 max-w-xs text-right z-10 hvr-skew">
                 <div className="text-gray-700 text-7xl font-bold mb-2">03.</div>
                 <div className="text-[#f9b84f] text-3xl font-semibold italic mb-3">Beer It</div>
                 {/* <div className="w-16 h-0.5 bg-gray-50 mb-4 ml-auto "></div> */}
                 <p className="text-base leading-relaxed text-gray-700 z-10">
                    To acquire a good thirst and to satisfy it with beer.
                 </p>
               </div>

               {/* Bottom Right - 04. Be Fast */}
               <div className="absolute bottom-16 right-16 max-w-xs text-right z-10 hvr-skew">
                 <div className="text-gray-700 text-7xl font-bold mb-2">04.</div>
                 <div className="text-[#f9b84f] text-3xl font-semibold italic mb-3">Be Fast</div>
                 {/* <div className="w-16 h-0.5 bg-gray-50 mb-4 ml-auto"></div> */}
                 <p className="text-base leading-relaxed text-gray-700 z-10">
                    To persuade the older members that they are not as old as they feel.
                 </p>
               </div>
             </div>
           </div>
        </section>
      </div>
    );
};

export default HeroSix;