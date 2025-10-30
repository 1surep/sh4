'use client';

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Hero12=()=>{
    const [hashhandle, setHashhandle] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!hashhandle || !email || !message) {
            toast.error("Hash handle, email and message are required.");
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ hashhandle, email, subject, message }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.message || "Failed to send message");
            }

            toast.success(data?.message || "Message sent successfully.");
            setHashhandle("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };
    return (
      <>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
        <section>
          {/* HEADING */}
          <section className="relative flex flex-col items-center justify-center pt-6 lg:pt-16 pb-16 bg-white overflow-hidden">
            <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
              HASH
            </h1>

            <div className="relative text-center">
              <p className="text-[#f9b84f] tracking-[1px] uppercase font-semibold text-2xl mb-2">
                Sierra Hash House Harriers & Harriettes
              </p>
              <h2 className="text-4xl tracking-[1px]  md:text-5xl font-bold text-gray-800">
                Contact Us
              </h2>
            </div>
          </section>

          {/* BODY SECTION */}
          <section className="pb-16 bg-yellow-50 px-[1rem] lg:px-[3rem]">

            <div className="flex flex-col items-center justify-center py-3">
              <h1 className="text-gray-700 font-bold text-3xl">Questions? Suggestions?</h1>
              <p className="py-1 text-gray-600">Drop us a message - we'll respond as soon as possible.</p>
              {/* <h1 className="text-gray-700 font-bold text-3xl">Contact Us</h1> */}
            </div>


            {/* form div */}
            <div className="flex flex-col items-center ">
              <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                {/* name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Hash Handle:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Hash Handle"
                    value={hashhandle}
                    onChange={(e) => setHashhandle(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {/* button */}
                <button
                  type="submit"
                  className=" bg-yellow-400 cursor-pointer px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-300 focus-visible:outline rounded-[12px] mx-auto flex focus-visible:outline-offset-2 focus-visible:outline-yellow-400 disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>
        </section>
      </>
    );



};
export default Hero12;