'use client';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-400 to-[#333] overflow-hidden">
      <div className="container relative w-[700px] h-[300px]">
        <div className="keg absolute bottom-0 left-[310px] w-[90px] h-[200px] bg-gradient-to-r from-[#777] to-[#555]">
          <span className="handle absolute"></span>
          <span className="pipe absolute"></span>
        </div>

        <div className="glass absolute bottom-0 w-[70px] h-[100px] text-white/30 bg-current rounded-md">
          <span className="beer absolute bottom-[15px] left-[5px] w-[60px] bg-[rgba(255,206,84,0.8)] rounded-b-md border-t border-[rgba(255,206,84,0.8)]"></span>
        </div>
      </div>

      <h1 className="text-white text-6xl font-bold mt-10">404: Under-Construction 🚧</h1>
      <p className="text-gray-300 text-lg mt-2">Beer It 🍺</p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-2xl hover:bg-yellow-400 transition-all"
      >
        Go Back Home
      </a>
    </div>
  );
}