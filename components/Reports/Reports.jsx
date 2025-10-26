"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Reports = () => {
  // Reports data
  const reportsData = [
    {
      id: 1,
      title: "Report 1",
      file: "/reports/1.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 2,
      title: "Report 2",
      file: "/reports/2.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 3,
      title: "Report 3",
      file: "/reports/3.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 4,
      title: "Report 4",
      file: "/reports/4.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 5,
      title: "Report 5",
      file: "/reports/5.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 6,
      title: "Report 6",
      file: "/reports/6.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 7,
      title: "Report 7",
      file: "/reports/7.pdf",
      description: "SH4 Event Report",
    },
    {
      id: 8,
      title: "Report 8",
      file: "/reports/8.pdf",
      description: "SH4 Event Report",
    },
  ];

  return (
    <div className="pt-32 min-h-screen  bg-yellow-50">
      {/* HEADING */}
      <section className="relative flex flex-col items-center justify-center py-10 bg-white overflow-hidden">
        {/* Background effect */}
        <ul className="background-dark">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
        <h1 className="absolute text-[6.5rem] lg:text-[10rem] font-extrabold text-gray-100 select-none tracking-[1px]">
          REPORTS
        </h1>

        <div className="relative text-center">
          <p className="text-[#f9b84f] tracking-[1px] font-semibold text-2xl mb-2">
            SH4 EVENTS
          </p>
          <h2 className="text-4xl tracking-[1px] md:text-5xl font-bold text-gray-800">
            EVENT REPORTS
          </h2>
        </div>
      </section>

      {/* Reports Grid Section */}
      <div className="relative py-12 bg-yellow-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[1rem] lg:px-[3rem]">
          {reportsData.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-6"
            >
              {/* PDF Icon Container */}
              <div className="w-full h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-20 h-20 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
                  <path d="M6 8h8v2H6V8zm0 4h4v2H6v-2z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-grow justify-between">
                <h3 className="font-bold text-lg text-gray-800">
                  {report.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {report.description}
                </p>

                {/* View and Download Buttons */}
                <div className="mt-4 flex gap-3 w-full">
                  {/* View Button */}
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center border-2 border-[#f9b84f] px-3 py-2 rounded-lg hover:bg-[#f9b84f] hover:text-white transition-all duration-500 ease-in-out text-[#f9b84f] cursor-pointer font-bold text-sm"
                  >
                    👁️ View
                  </a>

                  {/* Download Button */}
                  <a
                    href={report.file}
                    download
                    className="flex-1 flex items-center justify-center border-2 border-[#f9b84f] px-3 py-2 rounded-lg hover:bg-[#f9b84f] hover:text-white transition-all duration-500 ease-in-out text-[#f9b84f] cursor-pointer font-bold text-sm"
                  >
                    📥 Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;