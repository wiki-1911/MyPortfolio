import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">

      {/* Nội dung chính */}
      <main className="flex-1 min-h-screen bg-gray-50 flex justify-center items-center pl-60">
        {children}
      </main>
    </div>
  );
}
