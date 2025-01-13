import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Dropdown from "./Dropdown";

const Navigation = () => {
  const topics = [
    {
      section: "Next.js Grundlæggende",
      items: [
        { title: "Dynamic Routing", path: "/topics/next/dynamic-routing" },
        { title: "Static Site Generation (SSG)", path: "/topics/next/ssg" },
        { title: "Incremental Static Regeneration", path: "/topics/next/isr" },
        {
          title: "Server vs Client Components",
          path: "/topics/next/server-client-components",
        },
        { title: "API Routes", path: "/topics/next/api-routes" },
        { title: "Middleware", path: "/topics/next/middleware" },
        {
          title: "Image Optimization",
          path: "/topics/next/image-optimization",
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
        { title: "Props & State", path: "/topics/props-state" },
        {
          title: "Controlled Components",
          path: "/topics/controlled-components",
        },
        { title: "Custom Hooks", path: "/topics/custom-hooks" },
        { title: "Context API", path: "/topics/context-api" },
        { title: "Portals", path: "/topics/portals" },
        { title: "State Management", path: "/topics/state-management" },
        { title: "Performance Optimering", path: "/topics/react-performance" },
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

  return (
    <aside
      className="fixed left-0 top-0 w-72 h-screen 
                bg-white dark:bg-slate-900 
                border-r border-slate-200 dark:border-slate-800
                shadow-lg
                p-4 overflow-y-auto
                transition-colors duration-200"
    >
      <div className="mb-8 px-2">
        <div className="flex justify-between items-center mb-4">
          <Link
            href="/"
            className="text-xl font-bold 
                     bg-gradient-to-r from-blue-600 to-blue-400 
                     dark:from-blue-400 dark:to-blue-300
                     text-transparent bg-clip-text"
          >
            Next.js Exam Prep
          </Link>
          <ThemeToggle />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Søg emner..."
            className="w-full py-2 px-4 pr-10
                     bg-slate-100 dark:bg-slate-800
                     text-slate-900 dark:text-slate-100
                     placeholder-slate-400 dark:placeholder-slate-500
                     rounded-lg
                     border border-transparent
                     focus:border-blue-500 dark:focus:border-blue-400
                     focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                     outline-none
                     transition-all duration-200"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>
      </div>

      <nav className="space-y-1 px-2">
        {topics.map((section) => (
          <Dropdown
            key={section.section}
            section={section.section}
            items={section.items}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Navigation;
