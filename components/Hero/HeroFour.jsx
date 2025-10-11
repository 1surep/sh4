import Image from "next/image";
import React from "react";


const HeroFour=()=>{
    return (
      <>
        <section className="min-h-screen bg-yellow-50 flex items-center justify-between  px-[0rem] lg:px-[3rem] w-full">
            
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
              <div>
                <h1>WHAT IS HASHING ?</h1>
                {/* <h1>Hash House Harriers</h1> */}
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Temporibus molestiae nihil voluptas consequatur dolorum quia!
                  Praesentium nobis expedita deserunt unde corrupti dolore! Nemo
                  earum temporibus ipsum culpa nostrum sequi vel odit amet.
                  Eligendi ratione provident quis commodi aliquam vero
                  cupiditate aspernatur odio excepturi? Iure placeat,
                  necessitatibus nobis ab tempore a?
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );



};
export default HeroFour;