import React from "react";


const HeroTen=()=>{
    return (
      <>
        <section>
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center pt-6 pb-16 bg-white overflow-hidden">
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              HASH
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] font-semibold text-sm mb-2">
                HOUSE
              </p>
              <h2 className="text-4xl tracking-[1px]  md:text-5xl font-bold text-gray-800">
                Harriers & Harriettes
              </h2>
            </div>
          </section>

          {/* Body section */}
          <section className="bg-yellow-50 min-h-screen py-12 px-[1rem] lg:px-[3rem]">
            <div className=" bg-gray-100 min-h-screen">
              <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                  src="/s13.jpg"
                  alt="Running"
                  className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

                <div
                  className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <div
                  className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                  <div className="mx-auto max-w-2xl flex flex-col items-center">
                    <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2 text-center">
                      Get in Touch
                    </p>
                    <h2 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl text-center bg-gradient-to-r from-[#2a9b59] via-[#3da7d4] to-[#d9c938] bg-clip-text text-transparent">
                      Hashing in Sierra Leone is unlike anything you've ever experienced...
                      presence!
                    </h2>

                    <div className="mt-4 flex justify-center">
                      <div className="h-1 w-24 bg-yellow-400 rounded"></div>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-200 tracking-[1px] text-center">
                    Lace up and hit the trail — the Sierra H4 adventure begins where the road ends. Every run is a story, every hill a challenge, and every circle a celebration. Come chase the fun, the laughter, and the mischief… because hashing isn’t just a run, it’s a lifestyle!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="#"
                        className=" bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-300 focus-visible:outline rounded-[12px] focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                      >
                        JOIN NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    );


};
export default HeroTen;