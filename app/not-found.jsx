'use client';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-400 to-[#333] overflow-hidden px-4 py-8">
      <div className="container relative w-full max-w-[700px] h-[200px] sm:h-[250px] md:h-[300px] flex justify-center">
        <div className="keg absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60px] h-[120px] sm:w-[75px] sm:h-[150px] md:w-[90px] md:h-[200px] bg-gradient-to-r from-[#777] to-[#555]">
          <span className="handle absolute"></span>
          <span className="pipe absolute"></span>
        </div>

        <div className="glass absolute bottom-0 w-[50px] h-[70px] sm:w-[60px] sm:h-[85px] md:w-[70px] md:h-[100px] text-white/30 bg-current rounded-md">
          <span className="beer absolute bottom-[10px] left-[3px] w-[44px] sm:bottom-[12px] sm:left-[4px] sm:w-[52px] md:bottom-[15px] md:left-[5px] md:w-[60px] bg-[rgba(255,206,84,0.8)] rounded-b-md border-t border-[rgba(255,206,84,0.8)]"></span>
        </div>
      </div>

      <div className="text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 sm:mt-8 md:mt-10 leading-tight">
          404: Under-Construction 🚧
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mt-2 sm:mt-3">Beer It 🍺</p>
      </div>

      <a
        href="/"
        className="mt-6 sm:mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-2xl hover:bg-yellow-400 transition-all text-sm sm:text-base"
      >
        Go Back Home
      </a>
    </div>
  );
}