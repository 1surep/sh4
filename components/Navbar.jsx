'use client'

import Image from "next/image";
import React, { useState } from "react";
import { LuUserCog } from "react-icons/lu";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        "Home",
        "About Us", 
        "Events",
        "PAN 2027",
        "Gallery",
        "SH4 Shop",
        "Contact Us"
    ];

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: 50,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    const hamburgerVariants = {
        closed: {
            rotate: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            rotate: 90,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="px-[1rem] lg:px-[3rem] font-semibold  items-center justify-between py-2 w-full bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] fixed z-50 hidden lg:flex ">
                {/* logo */}
                <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src='/logo.jpg' width={80} height={80} alt="sierrah4_logo" className="rounded-full"/>
                    <div className="text-center">
                        <p className="text-cyan-600">Sierra H4</p>
                        <p className="text-sm text-green-600 text-center">The Duo Kennel</p>
                    </div>
                </motion.div>

                {/* list */}
                <motion.ul 
                    className="flex items-center gap-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {menuItems.map((item, index) => (
                        <motion.li 
                            key={item}
                            className="hvr-underline-from-left cursor-pointer text-gray-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Admin login */}
                <motion.div 
                    className="flex items-center gap-3 font-black text-gray-700"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Misma <LuUserCog className="text-2xl text-gray-700"/>
                </motion.div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="lg:hidden px-4 py-3 w-full bg-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] fixed z-50 flex items-center justify-between">
                {/* Mobile Logo */}
                <AnimatePresence>
                    {!isMobileMenuOpen && (
                        <motion.div 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image src='/logo.jpg' width={50} height={50} alt="sierrah4_logo" className="rounded-full"/>
                            <div>
                                <p className="text-cyan-600 text-sm font-bold">Sierra H4</p>
                                <p className="text-xs text-green-600">The Duo Kennel</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200  transition-colors"
                    variants={hamburgerVariants}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiX className="text-2xl text-gray-700" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiMenuAlt3 className="text-2xl text-gray-700" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleMobileMenu}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <Image src='/logo.jpg' width={40} height={40} alt="sierrah4_logo" className="rounded-full"/>
                                    <div>
                                        <p className="text-cyan-600 font-bold">Sierra H4</p>
                                        <p className="text-xs text-green-600">The Duo Kennel</p>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="p-4">
                                <motion.ul className="space-y-4">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item}
                                            variants={menuItemVariants}
                                            className="text-lg font-semibold text-gray-700 hover:text-cyan-600 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={toggleMobileMenu}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Mobile Admin Section */}
                                <motion.div
                                    className="mt-8 pt-4 border-t border-gray-200"
                                    variants={menuItemVariants}
                                >
                                    <div className="flex items-center text-xl gap-3 font-black text-gray-700">
                                        <LuUserCog className="text-2xl"/>
                                        <span>Misma</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;