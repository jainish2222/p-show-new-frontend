"use client";
import React from "react";
import Sender from "@/components/Sender";
import Receiver from "@/components/Receiver";
// Import your CSS styles

function App() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
  <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">Share-Karo</h1>
  <div className="flex flex-wrap justify-center w-full max-w-4xl p-6 shadow-md rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
    <div className="w-full md:w-1/2 p-4">
      <Sender />
    </div>
    <div className="w-full md:w-1/2 p-4">
      <Receiver />
    </div>
  </div>
  <footer className="mt-8 text-center text-gray-600 dark:text-gray-400">
    <p>© {new Date().getFullYear()} Share-Karo. All rights reserved.</p>
  </footer>
</div>

  );
}

export default App;
