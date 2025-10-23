"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShoppingBag, TrendingUp, DollarSign, Home, LogOut, Plus, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

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

  return (
    <>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gray-100 py-12">

        {/* Logo */}
        <div className="flex justify-center items-center rounded-full">
          <Image src="/logo.jpg" alt="logo" width={100} height={100} className="rounded-full"/>
        </div>




        {/* Header Section */}
        <div className="px-[1rem] lg:px-[3rem] mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">SH4 Dashboard</h1>
              {user && (
                <p className="text-gray-600 mt-1">
                  Welcome back, <span className="font-semibold text-gray-800">{user.name}</span>!
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Happy Customers Card */}
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
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Total Number of Rego Hashers</h3>
                <div className="text-3xl font-bold text-gray-800">66k</div>
              </div>
            </motion.div>

            {/* Daily Orders Card */}
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
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Click to add PAN 2027 Rego Hasher</h3>
                <div className="text-4xl font-bold text-gray-800">+</div>
              </div>
            </motion.div>

            {/* Total Sales Card */}
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
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Total Hasher in SH4</h3>
                <div className="text-3xl font-bold text-gray-800">420k</div>
              </div>
            </motion.div>

            {/* Total Revenue Card */}
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
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Click to add to Sierra H4 database </h3>
                <div className="text-4xl font-bold text-gray-800">+</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;