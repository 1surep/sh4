import React from "react";

export const metadata = {
  title: "You're Offline",
  description: "You appear to be offline. Reconnect to keep hashing with Sierra H4.",
  robots: { index: false, follow: false },
};

export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-900 to-[#0b2e1a] overflow-hidden px-4 py-8">
      <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full bg-white/10 ring-8 ring-yellow-500/40 flex items-center justify-center">
        <span className="text-5xl sm:text-6xl">📡</span>
      </div>

      <div className="text-center px-4 max-w-[600px]">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-8 leading-tight">
          You&apos;re Offline
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mt-3">
          The trail went cold — we can&apos;t reach the internet right now.
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Check your connection and try again. ON ON 👣🍺
        </p>
      </div>

      <a
        href="/"
        className="mt-6 sm:mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-2xl hover:bg-yellow-400 transition-all text-sm sm:text-base"
      >
        Try Again
      </a>
    </div>
  );
}
