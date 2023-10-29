import { CommandLineIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-14 flex justify-between">
        <span>
          <CommandLineIcon className="w-10 hover:scale-110 transition-all duration-300 cursor-pointer" />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
