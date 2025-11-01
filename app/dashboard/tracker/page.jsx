// app/dashboard/tracker/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, ArrowLeft, Search } from "lucide-react"; // Re-using icons you already have
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext"; // Adjust path if necessary
import Spinner from "@/components/ui/Spinner"; // Adjust path if necessary
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const TrackerPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [trackerData, setTrackerData] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchTrackerData = async () => {
      if (user) {
        try {
          const response = await fetch("/api/tracker");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setTrackerData(data);
        } catch (err) {
          console.error("Failed to fetch tracker data:", err);
          setError("Failed to load tracker data. Please try again later.");
          toast.error("Failed to load tracker data.");
        } finally {
          setPageLoading(false);
        }
      }
    };

    if (!loading && user) {
      fetchTrackerData();
    }
  }, [loading, user]);

  // Filter tracker data by hashhandle
  const filteredTrackerData = trackerData.filter((entry) => {
    if (!searchQuery.trim()) return true;
    return entry.hashhandle?.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  if (loading || pageLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <p className="text-red-500 text-base sm:text-lg text-center max-w-md">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-3 sm:p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
            <Users className="mr-2 sm:mr-3 text-blue-600 flex-shrink-0" size={28} />
            <span className="break-words">Sierra H4 Hash Tracker</span>
          </h1>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>

        {/* Search Bar */}
        {trackerData.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by hashhandle..."
                className="block w-full pl-10 pr-3 py-2 sm:py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                {filteredTrackerData.length} {filteredTrackerData.length === 1 ? 'result' : 'results'} found
              </p>
            )}
          </div>
        )}

        {trackerData.length === 0 ? (
          <p className="text-gray-600 text-base sm:text-lg text-center py-8">No tracker entries found.</p>
        ) : filteredTrackerData.length === 0 ? (
          <p className="text-gray-600 text-base sm:text-lg text-center py-8">
            No results found for "{searchQuery}". Try a different search.
          </p>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S/N
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hashhandle
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Given Name
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Surname
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Number
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="py-3 px-4 md:px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredTrackerData.map((entry, index) => (
                      <motion.tr
                        key={entry._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {index + 1}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                          {entry.hashhandle}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {entry.givenname}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {entry.surname}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {entry.gender}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {entry.number}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600 break-all">
                          {entry.email}
                        </td>
                        <td className="py-4 px-4 md:px-6 whitespace-nowrap text-sm text-gray-600">
                          {entry.createdAt ? new Date(entry.createdAt).toLocaleString() : 'N/A'}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tablet Scrollable Table View */}
            <div className="hidden md:block lg:hidden overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-[800px] bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S/N
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hashhandle
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Number
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredTrackerData.map((entry, index) => (
                      <motion.tr
                        key={entry._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600">
                          {index + 1}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs font-medium text-gray-900">
                          {entry.hashhandle}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600">
                          {entry.givenname} {entry.surname}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600">
                          {entry.gender}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600">
                          {entry.number}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600 break-all max-w-[150px] truncate">
                          {entry.email}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap text-xs text-gray-600">
                          {entry.createdAt ? new Date(entry.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredTrackerData.map((entry, index) => (
                <motion.div
                  key={entry._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{index + 1}
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {entry.hashhandle}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {entry.givenname} {entry.surname}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2 border-t border-gray-100 pt-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-500">Gender:</span>
                      <span className="text-xs text-gray-700">{entry.gender}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-500">Number:</span>
                      <span className="text-xs text-gray-700 break-all text-right">{entry.number}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-medium text-gray-500">Email:</span>
                      <span className="text-xs text-gray-700 break-all text-right max-w-[60%]">{entry.email}</span>
                    </div>
                    {entry.createdAt && (
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-medium text-gray-500">Created:</span>
                        <span className="text-xs text-gray-700">
                          {new Date(entry.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TrackerPage;