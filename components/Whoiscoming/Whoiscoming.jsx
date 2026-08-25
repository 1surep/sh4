'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/Home/animations";

const Whoiscoming = () => {
  const [regoList, setRegoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRegoList = async () => {
    try {
      const res = await fetch("/api/regolist", {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to load');

      // Ensure payment field exists for all items and assign original registration S/N
      const dataWithPayment = (data || []).map((item, index) => ({
        ...item,
        sn: index + 1,
        payment: item.payment || "Not Paid"
      }));

      setRegoList(dataWithPayment);
    } catch (err) {
      console.error('Failed to fetch rego list:', err);
      setRegoList([]);
    }
  };

  useEffect(() => {
    // Only fetch once on component mount
    fetchRegoList();
  }, []);

  const filteredRegoList = regoList.filter((item) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      (item.hashhandle || "").toLowerCase().includes(q) ||
      (item.kennel || "").toLowerCase().includes(q) ||
      (item.country || "").toLowerCase().includes(q) ||
      (item.shirt || "").toLowerCase().includes(q) ||
      (item.run || "").toLowerCase().includes(q)
    );
  });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredRegoList.length / Number(pageSize || 10))
  );
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * Number(pageSize || 10);
  const paginatedRegoList = filteredRegoList.slice(
    startIndex,
    startIndex + Number(pageSize || 10)
  );

  const getPaymentBgColor = (payment) => {
    if (payment === "Fully Paid") return "bg-[#DFF2E4] text-[#1E6B3A]";
    if (payment === "Part Paid") return "bg-[#FBEBCB] text-[#8A5A00]";
    return "bg-[#F8DEDA] text-[#9B2C1F]";
  };

  return (
    <div className="pt-28">
      {/* Header */}
      <header className="bg-sh4-ink text-sh4-cream px-6 md:px-10 py-16 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger(0.12, 0.1)}
          className="max-w-6xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-sh4-gold font-bold text-sm tracking-[0.18em] uppercase">
            Pan Africa Hash 2027
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-[15vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl uppercase"
          >
            Who is coming
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-sh4-cream/85 max-w-xl">
            The PAH 2027 registration list. Find your kennel, find your friends.
          </motion.p>
        </motion.div>
      </header>

      {/* List */}
      <section className="bg-sh4-cream px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Controls: Search + count */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by hash handle, kennel, or country"
              className="flex-1 min-w-[280px] sm:max-w-[480px] border border-sh4-line rounded-xl px-4 py-3 bg-white text-sh4-ink placeholder:text-sh4-muted focus:outline-none focus:ring-2 focus:ring-sh4-gold/40 focus:border-sh4-gold transition-all duration-200"
            />
            <div className="text-sm text-sh4-muted font-semibold whitespace-nowrap">
              {filteredRegoList.length} of {regoList.length} registered
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-sh4-line rounded-xl overflow-hidden">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-[56px_1.4fr_1.2fr_1fr_0.7fr_0.9fr_1fr] gap-3 px-5 py-3.5 bg-sh4-ink text-sh4-gold text-xs tracking-[0.1em] uppercase font-bold">
                  <span>S/N</span>
                  <span>Hash handle</span>
                  <span>Kennel</span>
                  <span>Country</span>
                  <span>Shirt</span>
                  <span>Run type</span>
                  <span>Payment</span>
                </div>

                {paginatedRegoList.length === 0 ? (
                  <div className="px-5 py-8 text-center text-sh4-muted text-sm">
                    No hashers match that search. Yet.
                  </div>
                ) : (
                  paginatedRegoList.map((item, idx) => {
                    const paymentStatus = item.payment || "Not Paid";
                    return (
                      <div
                        key={item._id}
                        className="grid grid-cols-[56px_1.4fr_1.2fr_1fr_0.7fr_0.9fr_1fr] gap-3 px-5 py-3.5 border-t border-[#F0EADB] text-[14.5px] text-sh4-body items-center"
                      >
                        <span>{item.sn ?? (startIndex + idx + 1)}</span>
                        <span className="font-semibold text-sh4-ink truncate">{item.hashhandle}</span>
                        <span className="truncate">{item.kennel}</span>
                        <span className="truncate">{item.country}</span>
                        <span className="truncate">{item.shirt}</span>
                        <span className="truncate">{item.run}</span>
                        <span>
                          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${getPaymentBgColor(paymentStatus)}`}>
                            {paymentStatus}
                          </span>
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          <p className="mt-4 text-[13.5px] text-sh4-muted">
            Live registration data from Pan Africa Hash 2027.
          </p>

          {/* Pagination footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="flex items-center gap-3">
              <label className="text-sm text-sh4-muted font-medium">Rows per page</label>
              <select
                className="border border-sh4-line rounded-xl px-3 py-2.5 bg-white text-sh4-ink text-sm focus:outline-none focus:ring-2 focus:ring-sh4-gold/40 focus:border-sh4-gold transition-all duration-200"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>

            <p className="text-sm text-sh4-muted">
              Showing {filteredRegoList.length === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + Number(pageSize || 10), filteredRegoList.length)} of {filteredRegoList.length}
            </p>

            <div className="flex items-center gap-2">
              <button
                className="px-4 py-2 rounded-lg border border-sh4-line hover:bg-sh4-cream text-sh4-ink text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                disabled={safeCurrentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <span className="text-sm text-sh4-muted px-1">Page {safeCurrentPage} of {totalPages}</span>
              <button
                className="px-4 py-2 rounded-lg border border-sh4-line hover:bg-sh4-cream text-sh4-ink text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                disabled={safeCurrentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoiscoming;
