"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownProps {
  section: string;
  items: {
    title: string;
    path: string;
  }[];
  isSearching: boolean;
}

const Dropdown = ({ section, items, isSearching }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isSearching]);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2
                 text-sm font-medium
                 rounded-lg
                 group
                 hover:bg-slate-100 dark:hover:bg-slate-800/50
                 transition-all duration-200"
      >
        <span className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full
                         transition-colors duration-200
                         ${
                           isOpen
                             ? "bg-indigo-500 dark:bg-indigo-400"
                             : "bg-slate-300 dark:bg-slate-600"
                         }`}
          />
          {section}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200
                   text-slate-400 dark:text-slate-500
                   group-hover:text-slate-600 dark:group-hover:text-slate-300
                   ${isOpen ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out
                   ${
                     isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                   }`}
      >
        <div className="pt-1 pb-2">
          {items.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 text-sm rounded-lg
                         transition-all duration-200
                         ${
                           isActive
                             ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                             : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30"
                         }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
