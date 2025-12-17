"use client";

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotModal from "@/components/Chat/ChatbotModal";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { AuthProvider } from "./context/AuthContext";
import Spinner from "@/components/ui/Spinner";
import { useState, useEffect } from "react";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function RootLayout({ children }) {
  const pathname = usePathname();
  const isPanAfricaPage = pathname === "/pan-africa-2027";
  const isDashboardPage = pathname === "/dashboard";
  const isDashboardInboxPage = pathname === "/dashboard/inbox";

  // Spinner logic
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en" data-theme="light">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-31P4QPST27"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31P4QPST27');
          `}
        </Script>

        {loading && <Spinner />}
        <AuthProvider>
          {!isPanAfricaPage && !isDashboardPage && !isDashboardInboxPage && <Navbar />}
          {children}
          {!isPanAfricaPage && !isDashboardPage && <Footer />}

          {/* Back to Top Button */}
          <Link href="#top">
            <div className="w-[5px] rounded-full px-6 py-4 bg-green-900/80 hover:bg-green-900/100 items-center justify-center ring-8 hover:ring-yellow-500/70 z-50 flex fixed left-8 bottom-5 transition-all duration-500 ease-in-out">
              <span className="font-bold text-gray-200">
                <FaArrowUp />
              </span>
            </div>
          </Link>

          {/* Chatbot Modal - renders on all pages */}
          <ChatbotModal />
        </AuthProvider>
      </body>
    </html>
  );
}

// Wrapped export pattern (same as your page.jsx)
const WrappedRootLayout = (props) => <RootLayout {...props} />;

export default WrappedRootLayout;