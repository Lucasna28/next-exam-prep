"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "./icons/ChevronRight";

interface DropdownProps {
  section: string;
  items: {
    title: string;
    path: string;
  }[];
}

const Dropdown = ({ section, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-2
                   text-sm font-medium
                   bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800
                   text-slate-600 dark:text-slate-300
                   hover:text-slate-900 dark:hover:text-white
                   rounded-lg transition-all duration-200
                   group"
      >
        <span className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full 
                         bg-slate-400 dark:bg-slate-500
                         group-hover:bg-blue-500 dark:group-hover:bg-blue-400
                         transition-colors"
          />
          {section}
        </span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-300 ease-in-out
                     text-slate-400 group-hover:text-slate-600
                     dark:text-slate-500 dark:group-hover:text-slate-300
                     ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      <ul
        className={`overflow-hidden transition-all duration-300 ease-in-out
                   ${isOpen ? "mt-1 mb-3" : "mt-0 mb-0"}`}
        style={{
          maxHeight: isOpen ? items.length * 40 + "px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {items.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.path} className="px-2">
              <Link
                href={item.path}
                className={`block py-2 px-4 text-sm rounded-md
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
              >
                <span className="flex items-center gap-2">
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                  )}
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
