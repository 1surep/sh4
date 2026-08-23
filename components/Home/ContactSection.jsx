'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewportOnce } from "./animations";

const ContactSection = () => {
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
    <section className="bg-sh4-cream px-6 md:px-10 py-20 md:py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <p className="text-sh4-amber font-bold text-sm tracking-[0.18em] uppercase mb-2">Contact us</p>
          <h2 className="font-display text-4xl md:text-[44px] leading-tight uppercase text-sh4-ink">
            Questions? Suggestions?
          </h2>
          <p className="mt-[18px] text-base leading-relaxed text-sh4-body">
            Drop us a message and we&apos;ll respond as soon as possible. Or just show up on Wednesday. On on!
          </p>
          <div className="flex flex-col gap-3 mt-7 text-[15px] font-semibold text-sh4-ink">
            <span>Freetown, Sierra Leone</span>
            <a href="mailto:h4sierra@gmail.com" className="hover:text-sh4-amber transition-colors">h4sierra@gmail.com</a>
            <span>+232 80 668 590</span>
            <a href="https://wa.me/23273928927" target="_blank" rel="noopener noreferrer" className="hover:text-sh4-amber transition-colors">
              WhatsApp: +232 73 928 927
            </a>
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
              rows={5}
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
  );
};

export default ContactSection;
