import React from "react";

export default function Spinner() {
  return (
    <div className="fixed z-[9999] inset-0 bg-black/30 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-t-yellow-400 border-b-white/20" />
    </div>
  );
}
