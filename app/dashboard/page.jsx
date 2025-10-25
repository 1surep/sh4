"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, ShoppingBag, TrendingUp, DollarSign, Home, LogOut, Plus, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TfiEye } from "react-icons/tfi";

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  // Protect the dashboard - redirect to signin if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

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
                <div className="text-3xl font-bold text-gray-800">+540</div>
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
                            Add New Hasher
                          </h3>
                        </div>

                        <div className="py-4">
                          <form className="space-y-6">
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
                                    value="Bush"
                                    className="mr-2 text-blue-600"
                                  />
                                  <span className="text-sm font-medium">
                                    Walker
                                  </span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input
                                    type="radio"
                                    name="runType"
                                    value="Road"
                                    className="mr-2 text-blue-600"
                                  />
                                  <span className="text-sm font-medium">
                                    Short{" "}
                                  </span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input
                                    type="radio"
                                    name="runType"
                                    value="Mixed"
                                    className="mr-2 text-blue-600"
                                  />
                                  <span className="text-sm font-medium">
                                    Long
                                  </span>
                                </label>
                                {/* <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                                  <input type="radio" name="runType" value="Trail" className="mr-2 text-blue-600" />
                                  <span className="text-sm font-medium">Trail</span>
                                </label> */}
                              </div>
                            </div>

                            {/* Additional Notes */}
                            {/* <div className="space-y-2">
                              <label className="block text-sm font-semibold text-gray-700">
                                Additional Notes
                              </label>
                              <textarea 
                                placeholder="Any additional information about the hasher..."
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white resize-none"
                              />
                            </div> */}

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                              <button
                                type="submit"
                                className="flex-1 text-base bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                              >
                                <UserPlus size={18} />
                                Add
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  document.getElementById("my_modal_5").close()
                                }
                                className="flex-1 bg-gray-200 text-base hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
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
                <div className="text-3xl font-bold text-gray-800">+120</div>
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
                  Add/View Sierra H4 database{" "}
                </h3>

                <div className="flex items-center gap-2">
                  <button
                    className="text-base font-semibold text-gray-800 bg-yellow-300 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer rounded-lg"
                    onClick={() =>
                      document.getElementById("my_modal_6").showModal()
                    }
                  >
                    + Add
                  </button>

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
                        <form className="space-y-6">
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
                              />
                            </div>
                          </div>

                          {/* Form Actions */}
                          <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                              type="submit"
                              className="flex-1 text-base bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                              <UserPlus size={18} />
                              Add
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                document.getElementById("my_modal_6").close()
                              }
                              className="flex-1 bg-gray-200 text-base hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  <p className="text-base font-semibold ml-auto text-gray-700 px-3 hover:bg-yellow-400 duration-500 transition-all py-1 cursor-pointer bg-yellow-300 rounded-lg flex items-center gap-2">
                    View <TfiEye className="text-lg" />
                  </p>
                </div>
              </div>
            </motion.div>
            </div>
            </div>

        {/* TABLE SECTION */}
        <div className="px-[1rem] lg:px-[3rem]">
          <h1 className="text-2xl font-bold text-gray-800 text-center py-8">
            PAN AFRICA HASH 2027 REGISTRATION LIST
          </h1>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border border-gray-300 p-2">S/N</th>
                <th className="border border-gray-300 p-2">Hash Handle</th>
                <th className="border border-gray-300 p-2">Kennel</th>
                <th className="border border-gray-300 p-2">Country</th>
                <th className="border border-gray-300 p-2">Shirt Size</th>
                <th className="border border-gray-300 p-2">Run Type</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="border border-gray-300 p-2">1</td>
                <td className="border border-gray-300 p-2">John Doe</td>
                <td className="border border-gray-300 p-2">
                  john.doe@example.com
                </td>
                <td className="border border-gray-300 p-2">+2348123456789</td>
                <td className="border border-gray-300 p-2">Nigeria</td>
                <td className="border border-gray-300 p-2">Bush</td>
                <td className="border border-gray-300 p-2">Edit\Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;