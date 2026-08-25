'use client'

import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaUserShield } from "react-icons/fa";

const menuItems = [
    { label: "About", href: "/about" },
    { label: "Events", href: "/even" },
    { label: "PAH 2027", href: "/pan-africa-2027" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reports", href: "/reports" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.06, delayChildren: 0.1 },
        },
    };

    const menuItemVariants = {
        closed: { opacity: 0, x: 50, transition: { duration: 0.2 } },
        open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    };

    const hamburgerVariants = {
        closed: { rotate: 0, transition: { duration: 0.3 } },
        open: { rotate: 90, transition: { duration: 0.3 } },
    };

    return (
        <div>
            <motion.nav
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex items-center justify-between gap-6 px-10 py-3 w-full bg-sh4-cream border-b-2 border-sh4-ink fixed top-0 z-50"
            >
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.jpg"
                        width={48}
                        height={48}
                        alt="Sierra H4 logo"
                        className="w-12 h-12 rounded-full object-cover"
                        priority
                    />
                    <span>
                        <span className="block font-display text-lg tracking-wide text-sh4-ink">SIERRA H4</span>
                        <span className="block text-[11px] text-sh4-muted uppercase tracking-widest">The Duo Kennel</span>
                    </span>
                </Link>

                <ul className="flex items-center gap-6 text-sm font-semibold text-sh4-ink">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="relative py-1 hover:text-sh4-amber transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-sh4-amber after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/signin" className="text-sh4-amber hover:text-sh4-ink transition-colors">
                            Misma
                        </Link>
                    </li>
                </ul>

                <a
                    href="https://pay.monime.io/069165304?amount=20600&checkout=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.04] active:scale-[0.96]"
                >
                    Rego PAH 2027
                </a>
            </motion.nav>

            {/* Mobile Navbar */}
            <nav className="lg:hidden px-4 py-3 w-full bg-sh4-cream border-b-2 border-sh4-ink fixed top-0 z-50 flex items-center justify-between">
                <AnimatePresence>
                    {!isMobileMenuOpen && (
                        <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/logo.jpg"
                                    width={40}
                                    height={40}
                                    alt="Sierra H4 logo"
                                    className="w-10 h-10 rounded-full object-cover"
                                    priority
                                />
                                <div>
                                    <p className="text-sh4-ink font-display text-sm tracking-wide">SIERRA H4</p>
                                    <p className="text-[10px] text-sh4-muted uppercase tracking-widest">The Duo Kennel</p>
                                </div>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg bg-sh4-ink/5 hover:bg-sh4-ink/10 transition-colors"
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
                                <HiX className="text-2xl text-sh4-ink" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <HiMenuAlt3 className="text-2xl text-sh4-ink" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-sh4-ink/50 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={toggleMobileMenu}
                        />

                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-sh4-cream shadow-2xl z-50 lg:hidden"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-sh4-line">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/logo.jpg"
                                        width={40}
                                        height={40}
                                        alt="Sierra H4 logo"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sh4-ink font-display text-sm tracking-wide">SIERRA H4</p>
                                        <p className="text-[10px] text-sh4-muted uppercase tracking-widest">The Duo Kennel</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <motion.ul className="space-y-1">
                                    {menuItems.map((item) => (
                                        <motion.li
                                            key={item.href}
                                            variants={menuItemVariants}
                                            className="text-lg font-semibold text-sh4-ink py-2 px-3 rounded-lg hover:bg-sh4-ink/5 transition-colors"
                                            whileTap={{ scale: 0.98 }}
                                            onClick={toggleMobileMenu}
                                        >
                                            <Link href={item.href}>{item.label}</Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.div className="mt-6 pt-4 border-t border-sh4-line space-y-3" variants={menuItemVariants}>
                                    <Link href="/signin" onClick={toggleMobileMenu}>
                                        <div className="flex items-center gap-3 text-lg font-bold text-sh4-ink py-2 px-3 rounded-lg hover:bg-sh4-ink/5 transition-colors">
                                            <FaUserShield className="text-xl text-sh4-amber" />
                                            <span>Misma</span>
                                        </div>
                                    </Link>
                                    <a
                                        href="https://pay.monime.io/069165304?amount=20600&checkout=true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={toggleMobileMenu}
                                        className="block text-center bg-sh4-gold hover:bg-sh4-gold-dark text-sh4-ink font-bold py-3 rounded-xl transition-colors"
                                    >
                                        Rego PAH 2027
                                    </a>
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
