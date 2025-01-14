"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownProps {
  section: string;
  items: {
    title: string;
    path: string;
    subItems?: {
      title: string;
      path: string;
    }[];
  }[];
  isSearching: boolean;
}

const Dropdown = ({ section, items, isSearching }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  // Åbn dropdown når der søges
  useEffect(() => {
    if (isSearching) {
      setIsOpen(true);
      // Åbn alle items der har match
      const matchingPaths = items
        .filter((item) =>
          item.subItems?.some((subItem) =>
            subItem.title
              .toLowerCase()
              .includes(isSearching.toString().toLowerCase())
          )
        )
        .map((item) => item.path);
      setExpandedItems(matchingPaths);
    } else {
      setIsOpen(false);
      setExpandedItems([]);
    }
  }, [isSearching, items]);

  // Toggle et specifikt item
  const toggleItem = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  return (
    <div className="relative mb-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-3
                 text-sm font-medium
                 rounded-xl
                 group
                 hover:bg-slate-50 dark:hover:bg-slate-700/50
                 transition-all duration-200"
      >
        <div className="flex items-center gap-3 flex-1">
          <span
            className={`h-2 w-2 rounded-full transition-colors duration-200
                     ${
                       isOpen
                         ? "bg-indigo-500 dark:bg-indigo-400 scale-110"
                         : "bg-slate-300 dark:bg-slate-600"
                     }`}
          />
          <span className="text-slate-700 dark:text-slate-200">{section}</span>
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ease-spring
                   text-slate-400 dark:text-slate-500
                   group-hover:text-slate-600 dark:group-hover:text-slate-300
                   ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-spring
                   ${
                     isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                   }`}
      >
        <div className="p-2 space-y-0.5">
          {items.map((item) => {
            const isActive = pathname === item.path;
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedItems.includes(item.path);
            const isParentOfActive = item.subItems?.some(
              (subItem) => pathname === subItem.path
            );

            return (
              <div
                key={item.path}
                className={`rounded-lg transition-colors duration-200
                           ${
                             (isActive || isParentOfActive) &&
                             "bg-indigo-50/50 dark:bg-indigo-900/20"
                           }`}
              >
                <div className="relative">
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg
                             relative z-10
                             transition-all duration-200
                             ${
                               isActive || isParentOfActive
                                 ? "text-indigo-600 dark:text-indigo-400"
                                 : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                             }`}
                  >
                    <span className="flex-1">{item.title}</span>
                    {hasSubItems && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleItem(item.path);
                        }}
                        className={`p-1 rounded-md
                                transition-transform duration-300 ease-spring
                                hover:bg-slate-100 dark:hover:bg-slate-700
                                ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </Link>
                </div>

                {hasSubItems && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-spring
                      ${
                        isExpanded
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="ml-4 pl-4 py-1 space-y-1 
                                  border-l-2 border-slate-200 dark:border-slate-600"
                    >
                      {item.subItems?.map((subItem) => {
                        const isSubItemActive = pathname === subItem.path;

                        return (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={`
                              flex items-center gap-3 px-4 py-2 
                              rounded-lg
                              transition-all duration-200
                              ${
                                isSubItemActive
                                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                              }
                            `}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
