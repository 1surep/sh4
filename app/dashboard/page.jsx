"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, ShoppingBag, TrendingUp, DollarSign, Home, LogOut, Plus, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TfiEye } from "react-icons/tfi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/components/ui/Spinner";
import Link from "next/link";

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [hashhandle, setHashhandle] = useState("");
  const [kennel, setKennel] = useState("");
  const [country, setCountry] = useState("");
  const [shirt, setShirt] = useState("");
  const [runType, setRunType] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [regoList, setRegoList] = useState([]);
  const [editing, setEditing] = useState(null); // holds document _id when editing
  const [editValues, setEditValues] = useState({ hashhandle: "", kennel: "", country: "", shirt: "", run: "", payment: "Not Paid" });
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // --- 1. Add state for SH4 modal at the top with other useStates ---
  const [sh4Hashhandle, setSh4Hashhandle] = useState("");
  const [sh4Givenname, setSh4Givenname] = useState("");
  const [sh4Surname, setSh4Surname] = useState("");
  const [sh4Gender, setSh4Gender] = useState("");
  const [sh4Number, setSh4Number] = useState("");
  const [sh4Email, setSh4Email] = useState("");
  const [submittingSH4, setSubmittingSH4] = useState(false);
  const [trackerCount, setTrackerCount] = useState(0);

  // Protect the dashboard - redirect to signin if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!loading && user) {
      fetchRegoList();
      fetchTrackerCount();
    }
  }, [loading, user]);

  const fetchRegoList = async () => {
    try {
      const res = await fetch('/api/regolist', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to load');
      setRegoList(data || []);
    } catch (err) {
      toast.error(err.message || 'Failed to load');
    }
  };

  const fetchTrackerCount = async () => {
    try {
      const res = await fetch('/api/tracker', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to load');
      setTrackerCount(Array.isArray(data) ? data.length : 0);
    } catch (err) {
      console.error('Failed to fetch tracker count:', err);
      setTrackerCount(0);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const handleLogout = () => {
    logout();
    router.push('/signin');
  };

  const handleAddHasherSubmit = async (e) => {
    e.preventDefault();
    if (!hashhandle || !kennel || !country || !shirt || !runType) {
      toast.error("Please complete all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/regolist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hashhandle, kennel, country, shirt, run: runType, payment: "Not Paid" })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to save');
      // reset
      setHashhandle("");
      setKennel("");
      setCountry("");
      setShirt("");
      setRunType("");
      document.getElementById("my_modal_5")?.close();
      toast.success(data?.message || "Saved successfully");
      fetchRegoList();
    } catch (err) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this entry?')) return;
    try {
      const res = await fetch(`/api/regolist/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to delete');
      toast.success('Deleted successfully');
      fetchRegoList();
    } catch (err) {
      toast.error(err.message || 'Delete failed');
    }
  };

  const openEditModal = (item) => {
    setEditing(item._id);
    setEditValues({
      hashhandle: item.hashhandle || "",
      kennel: item.kennel || "",
      country: item.country || "",
      shirt: item.shirt || "",
      run: item.run || "",
      payment: item.payment || "Not Paid",
    });
    document.getElementById('edit_modal')?.showModal();
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/regolist/${editing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editValues)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to update');
      toast.success('Updated successfully');
      document.getElementById('edit_modal')?.close();
      setEditing(null);
      fetchRegoList();
    } catch (err) {
      toast.error(err.message || 'Update failed');
    }
  };

  // --- 2. Declare a submission handler ---
  const handleSH4AddSubmit = async (e) => {
    e.preventDefault();
    if (!sh4Hashhandle || !sh4Givenname || !sh4Surname || !sh4Gender || !sh4Number || !sh4Email) {
      toast.error("Please complete all required fields.");
      return;
    }
    setSubmittingSH4(true);
    try {
      const res = await fetch("/api/tracker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hashhandle: sh4Hashhandle,
          givenname: sh4Givenname,
          surname: sh4Surname,
          gender: sh4Gender,
          number: sh4Number,
          email: sh4Email
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to save");
      // Reset fields
      setSh4Hashhandle("");
      setSh4Givenname("");
      setSh4Surname("");
      setSh4Gender("");
      setSh4Number("");
      setSh4Email("");
      document.getElementById("my_modal_6")?.close();
      toast.success(data?.message || "Saved successfully");
      fetchTrackerCount(); // Refresh tracker count after adding new entry
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setSubmittingSH4(false);
    }
  };

  // Filtering and pagination derived data
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

  const totalPages = Math.max(1, Math.ceil(filteredRegoList.length / Number(pageSize || 10)));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * Number(pageSize || 10);
  const paginatedRegoList = filteredRegoList.slice(startIndex, startIndex + Number(pageSize || 10));

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (!user) {
    return null;
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gray-100 py-12"
      >
        {/* Logo */}
        <div className="flex justify-center items-center rounded-full">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Header Section */}
        <div className="px-[1rem] lg:px-[3rem] mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="lg:text-4xl text-2xl font-bold text-gray-800">
                SH4 - Dashboard
              </h1>
              {user && (
                <p className="text-gray-600 mt-1">
                  Welcome back, <br />{" "}
                  <span className="font-semibold text-gray-800">
                    {user.name}
                  </span>
                  !
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div className=" items-center hidden lg:flex gap-2 text-gray-600">
                <Home size={16} />
                <span className="text-sm">Dashboard || Mismanagement</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area - Information Cards */}
        <div className="px-[1rem] lg:px-[3rem]">
          {/* 4 DIV CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative corner shapes */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-100 rounded-tl-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Users className="text-blue-500" size={24} />
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">
                  Total Number of Rego Hashers
                </h3>
                <div className="text-3xl font-bold text-gray-800">{regoList.length}</div>
              </div>
            </motion.div>

            {/* CARD 2*/}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative corner shapes */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-100 rounded-tl-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <ShoppingBag className="text-blue-500" size={24} />
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">
                  Add Hasher to PAN 2027 RegoList
                </h3>

                <div className="flex items-center gap-2">
                  <h1 className="text-base font-semibold text-gray-800 bg-yellow-300 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer rounded-lg">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="bt cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      + Click to add
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      {/* ADD HASHER FORM + */}
                      <div className="modal-box max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <UserPlus className="text-blue-600" size={20} />
                          </div>
                          <h3 className="font-bold text-xl text-gray-800">
                            Add New Hasher PAH 2027 Rego List
                          </h3>
                        </div>

                        <div className="py-4">
                          <form className="space-y-6" onSubmit={handleAddHasherSubmit}>
                            {/* Form Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Hash Handle */}
                              <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                  Hash Handle{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter Hash Handle"
                                  className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                  required
                                  value={hashhandle}
                                  onChange={(e) => setHashhandle(e.target.value)}
                                />
                              </div>

                              {/* Kennel */}
                              <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                  Kennel <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter kennel name"
                                  className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                  required
                                  value={kennel}
                                  onChange={(e) => setKennel(e.target.value)}
                                />
                              </div>

                              {/* Country */}
                              <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                  Country{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter Country"
                                  className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                  required
                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)}
                                />
                              </div>

                              {/* Shirt Size */}
                              <div className="space-y-2">
                                <label className="block text-sm font-semibold text-gray-700">
                                  Shirt Size{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                  required
                                  value={shirt}
                                  onChange={(e) => setShirt(e.target.value)}
                                >
                                  <option value="">Select Size</option>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="XXL">XXL</option>
                                  <option value="3XL">3XL</option>
                                  <option value="4XL">4XL</option>
                                  <option value="5XL">5XL</option>
                                </select>
                              </div>
                            </div>

                            {/* Run Type - Full Width */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Run Type <span className="text-red-500">*</span>
                              </label>

                              <div className="flex items-center justify-between gap-1">
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input
                                    type="radio"
                                    name="runType"
                                    value="Walker"
                                    className="mr-2 text-blue-600"
                                    checked={runType === 'Walker'}
                                    onChange={(e) => setRunType(e.target.value)}
                                  />
                                  <span className="text-sm font-medium">
                                    Walker
                                  </span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input
                                    type="radio"
                                    name="runType"
                                    value="Short"
                                    className="mr-2 text-blue-600"
                                    checked={runType === 'Short'}
                                    onChange={(e) => setRunType(e.target.value)}
                                  />
                                  <span className="text-sm font-medium">
                                    Short{" "}
                                  </span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input
                                    type="radio"
                                    name="runType"
                                    value="Long"
                                    className="mr-2 text-blue-600"
                                    checked={runType === 'Long'}
                                    onChange={(e) => setRunType(e.target.value)}
                                  />
                                  <span className="text-sm font-medium">
                                    Long
                                  </span>
                                </label>
                                
                              </div>
                            </div>

                            {/* Payment */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Payment
                              </label>
                              <select
                                className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                value="Not Paid"
                                disabled
                              >
                                <option value="Not Paid">Not Paid (Default)</option>
                              </select>
                            </div>

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                              <button
                                type="submit"
                                className="flex-1 text-base bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                disabled={submitting}
                              >
                                <UserPlus size={18} />
                                {submitting ? 'Saving...' : 'Add'}
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  document.getElementById("my_modal_5").close()
                                }
                                className="flex-1 bg-gray-200 text-base cursor-pointer hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* CARD 3*/}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative corner shapes */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-100 rounded-tl-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="text-blue-500" size={24} />
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">
                  Total Hasher in SH4
                </h3>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-800">+{trackerCount}</div>

                  <div className="flex items-center gap-2">
                  <button
                    className="text-base font-semibold text-gray-800 bg-yellow-300 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer rounded-lg"
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    + Add
                  </button>
                  </div>
                </div>
               
              </div>
            </motion.div>

            {/* CARD 4*/}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Decorative corner shapes */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-3xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-100 rounded-tl-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <UserPlus className="text-blue-500" size={24} />
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">
                  Sierra H4  Hash Tracker{" "}
                </h3>

                <div className="flex items-center gap-2">
                <h1 className="text-base font-semibold text-gray-800 bg-yellow-300 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer rounded-lg">
                    <button
                      className="bt cursor-pointer"
                      onClick={() => router.push('/dashboard/inbox')}
                    >
                      Inbox
                    </button>
                  </h1>



                  <dialog
                    id="my_modal_6"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    {/* ADD HASHER FORM + */}
                    <div className="modal-box max-w-2xl">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <UserPlus className="text-blue-600" size={20} />
                        </div>
                        <h3 className="font-bold text-xl text-gray-800">
                          Add Hasher to SH4 Database
                        </h3>
                      </div>

                      <div className="py-4">
                        {/* form */}
                        <form className="space-y-6" onSubmit={handleSH4AddSubmit}>
                          {/* Form Grid Layout */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Hash Handle */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Hash Handle{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Hash handle"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Hashhandle}
                                onChange={e => setSh4Hashhandle(e.target.value)}
                              />
                            </div>

                            {/* Given Name */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Given Name{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Given Name"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Givenname}
                                onChange={e => setSh4Givenname(e.target.value)}
                              />
                            </div>

                            {/* Surname */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Surname <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Surname"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Surname}
                                onChange={e => setSh4Surname(e.target.value)}
                              />
                            </div>

                            {/* Gender */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Gender <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter gender"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Gender}
                                onChange={e => setSh4Gender(e.target.value)}
                              />
                            </div>

                            {/* Mobile number */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Mobile Number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter mobile number"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Number}
                                onChange={e => setSh4Number(e.target.value)}
                              />
                            </div>

                            {/* email */}
                            <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter email"
                                className="w-full py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                required
                                value={sh4Email}
                                onChange={e => setSh4Email(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Form Actions */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <button
                              type="submit"
                              className="flex-1 text-base bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                              disabled={submittingSH4} // Disable button when submitting
                            >
                              {submittingSH4 ? "Adding..." : "Add"} {/* Conditional text */}
                              {submittingSH4 && <Spinner />} {/* Optional: Add a spinner component */}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                document.getElementById("my_modal_6").close()
                              }
                              className="flex-1 bg-gray-200 text-base hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer duration-200"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  <Link href={'/dashboard/tracker'} className="text-base font-semibold ml-auto text-gray-700 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer bg-yellow-300 rounded-lg flex items-center gap-2">
                    View <TfiEye className="text-lg" />
                  </Link>
                </div>
              </div>
            </motion.div>
            </div>
        </div>

        {/* TABLE SECTION */}
        <div className="px-[1rem] lg:px-[3rem]">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center py-8">
            PAN AFRICA HASH 2027 REGISTRATION LIST
          </h1>

          {/* Controls: Search + Page size */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder="Search by Hash Handle, Kennel, Country, Shirt Size, Run Type"
                className="w-full max-w-xl py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700">Rows per page</label>
              <select
                className="py-2 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white"
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
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
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRegoList.length === 0 ? (
                <tr>
                  <td className="border border-gray-300 p-4 text-center text-gray-500" colSpan={8}>No entries yet</td>
                </tr>
              ) : (
                paginatedRegoList.map((item, idx) => {
                  const getPaymentBgColor = (payment) => {
                    if (payment === "Fully Paid") return "bg-green-600";
                    if (payment === "Part Paid") return "bg-orange-600";
                    return "bg-red-600";
                  };
                  return (
                    <tr className="text-left" key={item._id}>
                      <td className="border border-gray-300 p-2">{startIndex + idx + 1}</td>
                      <td className="border border-gray-300 p-2">{item.hashhandle}</td>
                      <td className="border border-gray-300 p-2">{item.kennel}</td>
                      <td className="border border-gray-300 p-2">{item.country}</td>
                      <td className="border border-gray-300 p-2">{item.shirt}</td>
                      <td className="border border-gray-300 p-2">{item.run}</td>
                      <td className="border border-gray-300 p-2">
                        <select
                          value={item.payment || "Not Paid"}
                          onChange={async (e) => {
                            const newPayment = e.target.value;
                            // Optimistic update - immediately update the UI
                            setRegoList(prevList => 
                              prevList.map(prevItem => 
                                prevItem._id === item._id 
                                  ? { ...prevItem, payment: newPayment }
                                  : prevItem
                              )
                            );
                            try {
                              const res = await fetch(`/api/regolist/${item._id}`, {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  hashhandle: item.hashhandle,
                                  kennel: item.kennel,
                                  country: item.country,
                                  shirt: item.shirt,
                                  run: item.run,
                                  payment: newPayment
                                })
                              });
                              const data = await res.json();
                              if (!res.ok) throw new Error(data?.message || 'Failed to update');
                              
                              // Update state with the response from server to ensure consistency
                              if (data.item) {
                                setRegoList(prevList => 
                                  prevList.map(prevItem => 
                                    prevItem._id === item._id 
                                      ? { ...prevItem, payment: data.item.payment || newPayment }
                                      : prevItem
                                  )
                                );
                              }
                              
                              toast.success('Payment status updated');
                            } catch (err) {
                              // Revert on error
                              setRegoList(prevList => 
                                prevList.map(prevItem => 
                                  prevItem._id === item._id 
                                    ? { ...prevItem, payment: item.payment || "Not Paid" }
                                    : prevItem
                                )
                              );
                              toast.error(err.message || 'Update failed');
                            }
                          }}
                          className={`w-full py-1 px-2 text-sm text-white rounded cursor-pointer ${getPaymentBgColor(item.payment || "Not Paid")} border-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="Fully Paid" className="bg-green-600">Fully Paid</option>
                          <option value="Part Paid" className="bg-orange-600">Part Paid</option>
                          <option value="Not Paid" className="bg-red-600">Not Paid</option>
                        </select>
                      </td>
                      <td className="border border-gray-300 p-2">
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm cursor-pointer" onClick={() => openEditModal(item)}>Edit</button>
                          <button className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm cursor-pointer" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
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
      </motion.div>
      {/* Edit Modal */}
      <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <UserPlus className="text-blue-600" size={20} />
            </div>
            <h3 className="font-bold text-xl text-gray-800">Edit Hasher</h3>
          </div>
          <div className="py-4">
            <form className="space-y-6" onSubmit={handleEditSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Hash Handle <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white" required value={editValues.hashhandle} onChange={(e) => setEditValues({ ...editValues, hashhandle: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Kennel <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white" required value={editValues.kennel} onChange={(e) => setEditValues({ ...editValues, kennel: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Country <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white" required value={editValues.country} onChange={(e) => setEditValues({ ...editValues, country: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Shirt Size <span className="text-red-500">*</span></label>
                  <select className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white" required value={editValues.shirt} onChange={(e) => setEditValues({ ...editValues, shirt: e.target.value })}>
                    <option value="">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="3XL">3XL</option>
                    <option value="4XL">4XL</option>
                    <option value="5XL">5XL</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Run Type <span className="text-red-500">*</span></label>
                <div className="flex items-center justify-between gap-1">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                    <input type="radio" name="editRunType" value="Walker" className="mr-2 text-blue-600" checked={editValues.run === 'Walker'} onChange={(e) => setEditValues({ ...editValues, run: e.target.value })} />
                    <span className="text-sm font-medium">Walker</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                    <input type="radio" name="editRunType" value="Short" className="mr-2 text-blue-600" checked={editValues.run === 'Short'} onChange={(e) => setEditValues({ ...editValues, run: e.target.value })} />
                    <span className="text-sm font-medium">Short</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                    <input type="radio" name="editRunType" value="Long" className="mr-2 text-blue-600" checked={editValues.run === 'Long'} onChange={(e) => setEditValues({ ...editValues, run: e.target.value })} />
                    <span className="text-sm font-medium">Long</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Payment</label>
                <select className="w-full py-2 px-3 text-base  border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white" value={editValues.payment} onChange={(e) => setEditValues({ ...editValues, payment: e.target.value })}>
                  <option value="Fully Paid">Fully Paid</option>
                  <option value="Part Paid">Part Paid</option>
                  <option value="Not Paid">Not Paid</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button type="submit" className="flex-1 text-base bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer duration-200">Save</button>
                <button type="button" onClick={() => { document.getElementById('edit_modal')?.close(); setEditing(null); }} className="flex-1 bg-gray-200 text-base cursor-pointer hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Dashboard;