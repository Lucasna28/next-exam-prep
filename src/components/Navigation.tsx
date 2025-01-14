"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topics = [
    {
      section: "Next.js Grundlæggende",
      items: [
        {
          title: "Dynamic Routing",
          path: "/topics/next/general/dynamic-routing",
        },
        {
          title: "Static Site Generation (SSG)",
          path: "/topics/next/general/ssg",
        },
        {
          title: "Incremental Static Regeneration",
          path: "/topics/next/general/isr",
        },
        {
          title: "Server vs Client Components",
          path: "/topics/next/general/server-client-components",
        },
        { title: "API Routes", path: "/topics/next/general/api-routes" },
        { title: "Middleware", path: "/topics/next/general/middleware" },
        {
          title: "Image Optimization",
          path: "/topics/next/general/image-optimization",
        },
      ],
    },
    {
      section: "Next.js Avanceret",
      items: [
        { title: "next.config.js", path: "/topics/next-config" },
        { title: "Data Fetching", path: "/topics/data-fetching" },
        { title: "Link & Head Components", path: "/topics/link-head" },
        { title: "App vs Pages Router", path: "/topics/routing-comparison" },
        { title: "Rendering Strategier", path: "/topics/rendering-strategies" },
      ],
    },
    {
      section: "React Koncepter",
      items: [
        { title: "Props", path: "/topics/react/props" },
        { title: "State", path: "/topics/react/state" },
        {
          title: "Controlled Components",
          path: "/topics/react/controlled-components",
        },
        { title: "Custom Hooks", path: "/topics/react/custom-hooks" },
        { title: "Context API", path: "/topics/react/context-api" },
        { title: "Portals", path: "/topics/react/portals" },
        { title: "State Management", path: "/topics/react/state-management" },
        { title: "Performance Optimering", path: "/topics/react/performance" },
      ],
    },
    {
      section: "TypeScript",
      items: [
        { title: "Types vs Interfaces", path: "/topics/types-interfaces" },
        { title: "Generics", path: "/topics/generics" },
        { title: "Type Manipulation", path: "/topics/type-manipulation" },
        { title: "Advanced Types", path: "/topics/advanced-types" },
        { title: "Utility Types", path: "/topics/utility-types" },
      ],
    },
    {
      section: "JavaScript",
      items: [
        { title: "Async Programming", path: "/topics/async-programming" },
        { title: "Event Handling", path: "/topics/event-handling" },
        { title: "Core Concepts", path: "/topics/js-core-concepts" },
        { title: "Modern Features", path: "/topics/modern-js" },
        {
          title: "Array & Object Methods",
          path: "/topics/array-object-methods",
        },
      ],
    },
    {
      section: "Styling & UI",
      items: [
        { title: "CSS Modules", path: "/topics/css-modules" },
        { title: "Styled Components", path: "/topics/styled-components" },
        { title: "Tailwind CSS", path: "/topics/tailwind" },
        { title: "SASS/SCSS", path: "/topics/sass" },
        { title: "Animationer", path: "/topics/animations" },
      ],
    },
    {
      section: "Performance",
      items: [
        { title: "Lazy Loading", path: "/topics/lazy-loading" },
        { title: "Code Splitting", path: "/topics/code-splitting" },
        { title: "Caching", path: "/topics/caching" },
        { title: "Edge Rendering", path: "/topics/edge-rendering" },
      ],
    },
    {
      section: "API & Data",
      items: [
        { title: "REST API", path: "/topics/rest-api" },
        { title: "GraphQL", path: "/topics/graphql" },
        { title: "Error Handling", path: "/topics/error-handling" },
        { title: "CORS & Security", path: "/topics/cors-security" },
      ],
    },
    {
      section: "Testing",
      items: [
        { title: "Jest", path: "/topics/jest" },
        { title: "React Testing Library", path: "/topics/rtl" },
        { title: "E2E Testing", path: "/topics/e2e-testing" },
        { title: "Mocking", path: "/topics/mocking" },
      ],
    },
    {
      section: "Diverse",
      items: [
        { title: "Environment Variables", path: "/topics/env-vars" },
        { title: "SEO", path: "/topics/seo" },
        { title: "Internationalization", path: "/topics/i18n" },
        { title: "Accessibility", path: "/topics/a11y" },
        { title: "Debugging", path: "/topics/debugging" },
      ],
    },
  ];

  // Filtrer emner baseret på søgeord
  const filteredTopics = topics
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.section.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50">
      <div className="sticky top-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 p-4">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Next.js Exam Prep
          </Link>
          <ThemeToggle />
        </div>

        <div className="relative group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Søg emner..."
            className="w-full py-2 px-4 pr-10
                     bg-slate-100/50 dark:bg-slate-800/50
                     text-slate-900 dark:text-slate-100
                     placeholder-slate-400 dark:placeholder-slate-500
                     rounded-xl
                     border border-slate-200/50 dark:border-slate-700/50
                     backdrop-blur-sm
                     focus:border-indigo-500 dark:focus:border-indigo-400
                     focus:ring-2 focus:ring-indigo-500/20
                     outline-none
                     transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-10 top-1/2 -translate-y-1/2 
                       text-slate-400 hover:text-slate-600
                       dark:text-slate-500 dark:hover:text-slate-300
                       transition-colors duration-200"
            >
              ✕
            </button>
          )}
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 
                        text-slate-400 dark:text-slate-500
                        group-hover:text-indigo-500 dark:group-hover:text-indigo-400
                        transition-colors duration-200"
          >
            🔍
          </span>
        </div>
      </div>

      <nav
        className="h-[calc(100vh-116px)] overflow-y-auto px-4 py-2
                    scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700
                    scrollbar-track-transparent"
      >
        {searchQuery && filteredTopics.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400 p-2">
            Ingen resultater fundet for &quot;{searchQuery}&quot;
          </p>
        ) : (
          filteredTopics.map((section) => (
            <Dropdown
              key={section.section}
              section={section.section}
              items={section.items}
              isSearching={searchQuery.length > 0}
            />
          ))
        )}
      </nav>
    </aside>
  );
};

export default Navigation;
