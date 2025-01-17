"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
      setIsVisible(scrolled > 200);

      // Find aktuel sektion baseret på scroll position
      const sections = document.querySelectorAll("h1, h2");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          setCurrentSection(section.textContent || "");
        }
      }
    };

    window.addEventListener("scroll", calculateProgress);
    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  // Find parent og sibling sider
  const getNavigationLinks = () => {
    const pathParts = pathname.split("/");
    const parentPath = pathParts.slice(0, -1).join("/");
    const parentTitle = pathParts[pathParts.length - 2]?.replace(/-/g, " ");

    return {
      parent:
        parentPath !== ""
          ? {
              path: parentPath,
              title: parentTitle,
            }
          : null,
    };
  };

  const { parent } = getNavigationLinks();

  return (
    <>
      {/* Progress bar i toppen */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Smart navigation panel */}
      {isVisible && (
        <div className="fixed bottom-6 right-28 flex flex-col gap-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
            title="Tilbage til toppen"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
