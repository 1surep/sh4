'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "@/components/Home/animations";

const Contact = () => {
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
      if (!res.ok) throw new Error(data?.message || "Failed to send message");

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
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-16 md:py-[72px]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase mb-3">
            Sierra Hash House Harriers &amp; Harriettes
          </p>
          <h1 className="font-display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[1] uppercase">
            Contact us
          </h1>
          <p className="mt-5 text-lg text-sh4-cream/85 max-w-[560px]">
            Questions? Suggestions? Complaints go through the 72-hour rule. Everything else, right here.
          </p>
        </div>
      </header>

      <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-[88px]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
            <h2 className="font-display text-4xl uppercase text-sh4-ink">Find us</h2>
            <div className="flex flex-col gap-5 mt-7">
              <div>
                <div className="text-xs tracking-[0.14em] uppercase text-sh4-amber font-bold">Address</div>
                <div className="text-base font-semibold text-sh4-ink">Freetown, Sierra Leone</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.14em] uppercase text-sh4-amber font-bold">Email</div>
                <div className="text-base font-semibold text-sh4-ink flex flex-col gap-1">
                  <a href="mailto:h4sierra@gmail.com" className="hover:text-sh4-amber transition-colors">
                    h4sierra@gmail.com
                  </a>
                  <a href="mailto:info@sierrah4.com" className="hover:text-sh4-amber transition-colors">
                    info@sierrah4.com
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs tracking-[0.14em] uppercase text-sh4-amber font-bold">Phone</div>
                <div className="text-base font-semibold text-sh4-ink">+232 80 668 590</div>
              </div>
              <div>
                <div className="text-xs tracking-[0.14em] uppercase text-sh4-amber font-bold">WhatsApp</div>
                <a
                  href="https://wa.me/23273928927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-sh4-ink hover:text-sh4-amber transition-colors"
                >
                  +232 73 928 927
                </a>
              </div>
              <div>
                <div className="text-xs tracking-[0.14em] uppercase text-sh4-amber font-bold">Runs</div>
                <div className="text-base font-semibold text-sh4-ink">
                  Every Wednesday &amp; 1st Saturday, 6:00 PM
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            onSubmit={handleSubmit}
            className="bg-white border border-sh4-line rounded-xl p-8 flex flex-col gap-[18px]"
          >
            <h2 className="font-display text-2xl uppercase text-sh4-ink">Send a message</h2>
            <div className="grid sm:grid-cols-2 gap-[18px]">
              <label className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
                Hash handle
                <input
                  type="text"
                  placeholder="Your hash handle"
                  value={hashhandle}
                  onChange={(e) => setHashhandle(e.target.value)}
                  className="border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-sh4-cream focus:outline-none focus:border-sh4-amber"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-sh4-cream focus:outline-none focus:border-sh4-amber"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
              Subject
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-sh4-cream focus:outline-none focus:border-sh4-amber"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold text-sh4-ink">
              Message
              <textarea
                rows={6}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-[#D8CFBB] rounded-lg px-3 py-2.5 text-[15px] font-normal bg-sh4-cream resize-y focus:outline-none focus:border-sh4-amber"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="bg-sh4-gold hover:bg-sh4-gold-dark disabled:opacity-60 text-sh4-ink font-bold text-[15px] py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] disabled:hover:scale-100"
            >
              {submitting ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
