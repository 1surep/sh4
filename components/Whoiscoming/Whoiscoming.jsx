'use client'

import React, { useEffect, useState } from "react";

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

  return (
    <div className="px-[1rem] lg:px-[3rem] py-32 bg-yellow-50 uppercase">
      <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center py-8">
        PAN AFRICA HASH 2027 REGISTRATION LIST
      </h1>
      {/* Controls: Search + Page size */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
        <div className="flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by Hash Handle, Kennel, Country, Shirt Size, Run Type"
            className="w-full max-w-xl py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700">Rows per page</label>
          <select
            className="py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white"
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
      </div>
      <div className="w-full overflow-x-auto lg:overflow-visible">
        <table className="w-full min-w-[800px] lg:min-w-0 border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="border border-gray-300 p-2">S/N</th>
              <th className="border border-gray-300 p-2">Hash Handle</th>
              <th className="border border-gray-300 p-2">Kennel</th>
              <th className="border border-gray-300 p-2">Country</th>
              <th className="border border-gray-300 p-2">Shirt Size</th>
              <th className="border border-gray-300 p-2">Run Type</th>
              <th className="border border-gray-300 p-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRegoList.length === 0 ? (
              <tr>
                <td className="border border-gray-300 p-4 text-center text-gray-500" colSpan={7}>
                  No entries yet
                </td>
              </tr>
            ) : (
              paginatedRegoList.map((item, idx) => {
                const getPaymentBgColor = (payment) => {
                  if (payment === "Fully Paid") return "bg-green-600";
                  if (payment === "Part Paid") return "bg-orange-600";
                  return "bg-red-600";
                };
                const paymentStatus = item.payment || "Not Paid";
                return (
                  <tr className="text-left" key={item._id}>
                    <td className="border border-gray-300 p-2">{item.sn ?? (startIndex + idx + 1)}</td>
                    <td className="border border-gray-300 p-2">{item.hashhandle}</td>
                    <td className="border border-gray-300 p-2">{item.kennel}</td>
                    <td className="border border-gray-300 p-2">{item.country}</td>
                    <td className="border border-gray-300 p-2">{item.shirt}</td>
                    <td className="border border-gray-300 p-2">{item.run}</td>
                    <td className="border border-gray-300 p-2">
                      <span className={`px-3 py-1 rounded text-white text-sm ${getPaymentBgColor(paymentStatus)}`}>
                        {paymentStatus}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
        <p className="text-sm text-gray-600">
          Showing {filteredRegoList.length === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + Number(pageSize || 10), filteredRegoList.length)} of {filteredRegoList.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={safeCurrentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </button>
          <span className="text-sm text-gray-700">Page {safeCurrentPage} of {totalPages}</span>
          <button
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={safeCurrentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whoiscoming;
