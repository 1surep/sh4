import React from "react";


const Hero12=()=>{
    return (
      <>
        <section>
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center pt-6 pb-16 bg-white overflow-hidden">
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              HASH
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] uppercase font-semibold text-sm mb-2">
                Sierra Hash House Harriers & Harriettes
              </p>
              <h2 className="text-4xl tracking-[1px]  md:text-5xl font-bold text-gray-800">
                Contact Us
              </h2>
            </div>
          </section>

          {/* BODY SECTION */}
          <section className="pb-16">
            {/* form div */}
            <div className="flex flex-col items-center ">
              <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                {/* name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                </div>

                {/* email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>

                {/* subject */}
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Subject"
                  />
                </div>

                {/* messsage */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                {/* button */}
                <button
                  type="submit"
                  className=" bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-300 focus-visible:outline rounded-[12px] mx-auto flex focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </section>
      </>
    );



};
export default Hero12;