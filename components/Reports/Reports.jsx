"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/components/Home/animations";

const Reports = () => {
  // Reports data
  const reportsData = [
    // {
    //   id: 1,
    //   title: "SH4 Quarterly Report",
    //   file: "/reports/SH4 Quarterly March 2025.pdf",
    //   description: "SH4 Quarterly Report for March 2025",
    // },
    // {
    //   id: 2,
    //   title: "SH4 Quarterly Report",
    //   file: "/reports/SH4 Quarterly June 2025.pdf",
    //   description: "SH4 Quarterly Report for June 2025",
    // },
    // {
    //   id: 3,
    //   title: "SH4 Quarterly Report",
    //   file: "/reports/SH4 Quarterly Sept 2025.pdf",
    //   description: "SH4 Quarterly Report for September 2025",
    // },
    {
      id: 4,
      title: "SH4 Inagural Run 2025",
      file: "/reports/SH4 Inagural Run.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 5,
      title: "SH4 upcountry Financial Report",
      file: "/reports/SH4  upcountry Financial Report.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 6,
      title: "SH4 GM Party Report",
      file: "/reports/SH4  GM PARTY REPORT.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 7,
      title: "SH4 3SOME REPORT Final",
      file: "/reports/SH4  3SOME REPORT Final.pdf",
      description: "SH4 Event Report",
    },
    // {
    //   id: 8,
    //   title: "Report 8",
    //   file: "/reports/8.pdf",
    //   description: "SH4 Event Report",
    // },
  ];

  return (
    <div>
      {/* HEADING */}
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-16 md:py-[72px]">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase mb-3"
          >
            Sierra H4 events
          </motion.p>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="font-display text-[44px] md:text-[72px] lg:text-[84px] leading-[1] uppercase mb-4"
          >
            Event reports
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-lg text-sh4-cream/85 max-w-xl"
          >
            Official write-ups and financial reports from Sierra H4 events. Transparency, hash style.
          </motion.p>
        </div>
      </header>

      {/* Reports List Section */}
      <section className="bg-sh4-cream px-6 md:px-10 py-16 md:py-[88px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
          className="max-w-[860px] mx-auto flex flex-col gap-3.5"
        >
          {reportsData.map((report) => (
            <motion.div
              key={report.id}
              variants={fadeUp}
              className="flex items-center gap-5 bg-white border border-sh4-line rounded-xl px-5 py-[22px] md:px-[26px]"
            >
              <div className="font-display text-[13px] tracking-[0.08em] bg-sh4-ink text-sh4-gold rounded-lg px-3 py-2.5 shrink-0">
                PDF
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[16.5px] text-sh4-ink">
                  {report.title}
                </div>
                <div className="text-[13.5px] text-sh4-muted">
                  {report.description}
                </div>
              </div>
              <div className="flex gap-2.5 shrink-0">
                <a
                  href={report.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-sh4-ink text-sh4-ink font-bold text-[13px] px-4 py-2 rounded-xl hover:bg-sh4-ink hover:text-sh4-cream transition-colors duration-300"
                >
                  View
                </a>
                <a
                  href={report.file}
                  download
                  className="bg-sh4-gold text-sh4-ink font-bold text-[13px] px-4 py-2.5 rounded-xl hover:bg-sh4-amber transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            </motion.div>
          ))}
          <p className="text-[13.5px] text-sh4-muted mt-3">
            Report PDFs are hosted on the live site.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Reports;
