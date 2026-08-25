"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotModal from "@/components/Chat/ChatbotModal";
import { AuthProvider } from "@/app/context/AuthContext";
import Spinner from "@/components/ui/Spinner";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isPanAfricaPage = pathname === "/pan-africa-2027";
  const isDashboardPage = pathname === "/dashboard";
  const isDashboardInboxPage = pathname === "/dashboard/inbox";
  // The offline page must stand alone - navbar, footer and chatbot all look
  // broken without a connection.
  const isOfflinePage = pathname === "/offline";

  // Spinner logic
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W6W3NNK2');
        `}
      </Script>

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

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6W3NNK2"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {loading && <Spinner />}
      <AuthProvider>
        {!isPanAfricaPage && !isDashboardPage && !isDashboardInboxPage && !isOfflinePage && <Navbar />}
        {children}
        {!isPanAfricaPage && !isDashboardPage && !isOfflinePage && <Footer />}

        {/* Back to Top Button */}
        {!isOfflinePage && (
        <Link href="#top">
          <div className="w-[5px] rounded-full px-6 py-4 bg-green-900/80 hover:bg-green-900/100 items-center justify-center ring-8 hover:ring-yellow-500/70 z-50 flex fixed left-8 bottom-5 transition-all duration-500 ease-in-out">
            <span className="font-bold text-gray-200">
              <FaArrowUp />
            </span>
          </div>
        </Link>
        )}

        {/* Chatbot Modal - renders on all pages */}
        {!isOfflinePage && <ChatbotModal />}
      </AuthProvider>
    </>
  );
}

