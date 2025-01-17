"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topics = [
    {
      section: "UI Library",
      items: [
        {
          title: "Oversigt",
          path: "/ui-library",
        },
        {
          title: "Button",
          path: "/ui-library/components/button",
        },
        {
          title: "Input",
          path: "/ui-library/components/input",
        },
        {
          title: "Card",
          path: "/ui-library/components/card",
        },
        {
          title: "Dropdown",
          path: "/ui-library/components/dropdown",
        },
      ],
    },
    {
      section: "Toolbox ",
      items: [
        {
          title: "Outline",
          path: "/toolbox/outline/",
        },
        {
          title: "Wordlist",
          path: "/toolbox/wordlist/",
        },
        {
          title: "Prep questions",
          path: "/toolbox/prep-questions/",
        },
      ],
    },
    {
      section: "Next.js Grundlæggende",
      items: [
        {
          title: "Next.js",
          path: "/topics/next/general",
        },
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
        {
          title: "Next.js",
          path: "/topics/next/advanced",
        },
        {
          title: "next.config.js",
          path: "/topics/next/advanced/next-config",
        },
        {
          title: "Data Fetching",
          path: "/topics/next/advanced/data-fetching",
          subItems: [
            {
              title: "getStaticProps",
              path: "/topics/next/advanced/data-fetching/staticprops",
            },
            {
              title: "getStaticPaths",
              path: "/topics/next/advanced/data-fetching/staticpaths",
            },
            {
              title: "getServerSideProps",
              path: "/topics/next/advanced/data-fetching/serversideprops",
            },
          ],
        },
        {
          title: "Link & Head Components",
          path: "/topics/next/advanced/link-head",
          subItems: [
            {
              title: "Link Component",
              path: "/topics/next/advanced/link-head/linkcomponent",
            },
            {
              title: "Head Component",
              path: "/topics/next/advanced/link-head/headcomponent",
            },
          ],
        },
        {
          title: "App vs Pages Router",
          path: "/topics/next/advanced/routing-comparison",
          subItems: [
            {
              title: "App Router",
              path: "/topics/next/advanced/routing-comparison/approuter",
            },
            {
              title: "Pages Router",
              path: "/topics/next/advanced/routing-comparison/pagesrouter",
            },
          ],
        },
        {
          title: "Rendering Strategier",
          path: "/topics/next/advanced/rendering-strategies",
        },
      ],
    },
    {
      section: "React Koncepter",
      items: [
        {
          title: "React",
          path: "/topics/react",
        },
        {
          title: "Context API",
          path: "/topics/react/context",
        },
        {
          title: "Controlled Components",
          path: "/topics/react/controlled-uncontrolled",
          subItems: [
            {
              title: "Controlled Components",
              path: "/topics/react/controlled-uncontrolled/controlled",
            },
            {
              title: "Uncontrolled Components",
              path: "/topics/react/controlled-uncontrolled/uncontrolled",
            },
          ],
        },
        {
          title: "Custom Hooks",
          path: "/topics/react/custom-hooks",
        },
        {
          title: "Portals",
          path: "/topics/react/portals",
        },
        {
          title: "Props",
          path: "/topics/react/props",
        },
        {
          title: "Prop Drilling",
          path: "/topics/react/prop-drilling",
        },
        {
          title: "React.lazy & Suspense",
          path: "/topics/react/react-lazy-suspense",
        },
        {
          title: "React.memo",
          path: "/topics/react/react-memo",
        },
        {
          title: "State",
          path: "/topics/react/state",
          subItems: [
            {
              title: "useState Hook",
              path: "/topics/react/state/usestate",
            },
            {
              title: "State Updates",
              path: "/topics/react/state/updates",
            },
            {
              title: "Complex State",
              path: "/topics/react/state/complex",
            },
          ],
        },
        {
          title: "State Management",
          path: "/topics/react/state-management-libraries",
        },
        {
          title: "State Lifting",
          path: "/topics/react/statelifting",
        },
      ],
    },
    {
      section: "TypeScript",
      path: "/topics/typescript",
      items: [
        {
          title: "TypeScript",
          path: "/topics/typescript",
        },
        { title: "Enum", path: "/topics/typescript/enum" },
        { title: "Generics", path: "/topics/typescript/generics" },
        {
          title: "Interfaces vs types",
          path: "/topics/typescript/interfaces-vs-types",
          subItems: [
            {
              title: "Interfaces",
              path: "/topics/typescript/interfaces-vs-types/interfaces",
            },
            {
              title: "Types",
              path: "/topics/typescript/interfaces-vs-types/types",
            },
          ],
        },
        {
          title: "Insection-types",
          path: "/topics/typescript/insection-types",
        },
        {
          title: "Literal-types",
          path: "/topics/typescript/literal-types",
        },
        {
          title: "Optional Properties",
          path: "/topics/typescript/optional-properties",
        },
        {
          title: "Type Assertions",
          path: "/topics/typescript/type-assertions",
        },
        {
          title: "type-interference",
          path: "/topics/typescript/type-interference",
        },
        {
          title: "type-narrowing",
          path: "/topics/typescript/type-narrowing",
        },
        {
          title: "Union Types",
          path: "/topics/typescript/union-types",
        },
        {
          title: "Utility Types",
          path: "/topics/typescript/utility-types",
        },
      ],
    },

    {
      section: "JavaScript",
      items: [
        {
          title: "JavaScript",
          path: "/topics/javascript",
        },
        {
          title: "Array & Object Methods",
          path: "/topics/javascript/array-object-methods",
        },
        {
          title: "Arrow Functions",
          path: "/topics/javascript/arrow-functions",
        },
        {
          title: "Callback Functions",
          path: "/topics/javascript/callback-functions",
        },
        {
          title: "Closure",
          path: "/topics/javascript/closure",
        },
        {
          title: "Debouncing & Throttling",
          path: "/topics/javascript/debouncing-throttling",
        },
        {
          title: "Destructuring",
          path: "/topics/javascript/destructuring",
        },
        {
          title: "Event Bubbling & Delegation",
          path: "/topics/javascript/event-bubbling-delegation",
        },
        {
          title: "Hoisting",
          path: "/topics/javascript/hoisting",
        },
        {
          title: "Modules & Bundling",
          path: "/topics/javascript/modules-bundling",
        },
        {
          title: "Promise, Async & Await",
          path: "/topics/javascript/promise-async-await",
        },
        {
          title: "Prototype & Prototypal Inheritance",
          path: "/topics/javascript/prototype-prototypal-inheritance",
        },
        {
          title: "Spread & Rest Operators",
          path: "/topics/javascript/spread-rest-operators",
        },
      ],
    },
    {
      section: "Styling & UI",
      items: [
        {
          title: "Styling & UI",
          path: "/topics/styling-and-ui",
        },
        {
          title: "Tailwind CSS",
          path: "/topics/styling-and-ui/tailwind-css",
          subItems: [
            {
              title: "Grundlæggende Koncepter",
              path: "/topics/styling-and-ui/tailwind-css/basics",
            },
            {
              title: "Responsive Design",
              path: "/topics/styling-and-ui/tailwind-css/responsive",
            },
            {
              title: "Custom Konfiguration",
              path: "/topics/styling-and-ui/tailwind-css/configuration",
            },
          ],
        },
        {
          title: "CSS Modules",
          path: "/topics/styling-and-ui/css-modules",
          subItems: [
            {
              title: "Lokal Scoping",
              path: "/topics/styling-and-ui/css-modules/scoping",
            },
            {
              title: "Composition",
              path: "/topics/styling-and-ui/css-modules/composition",
            },
          ],
        },
        {
          title: "Styled Components",
          path: "/topics/styling-and-ui/styled-components",
          subItems: [
            {
              title: "Dynamisk Styling",
              path: "/topics/styling-and-ui/styled-components/dynamic",
            },
            {
              title: "Theming",
              path: "/topics/styling-and-ui/styled-components/theming",
            },
          ],
        },
        {
          title: "SASS/SCSS",
          path: "/topics/styling-and-ui/sass-scss",
          subItems: [
            {
              title: "Variabler & Mixins",
              path: "/topics/styling-and-ui/sass-scss/features",
            },
            {
              title: "Nested Rules",
              path: "/topics/styling-and-ui/sass-scss/nesting",
            },
          ],
        },
        {
          title: "UI Patterns",
          path: "/topics/styling-and-ui/ui-patterns",
          subItems: [
            {
              title: "Responsive Layout",
              path: "/topics/styling-and-ui/ui-patterns/responsive",
            },
            {
              title: "Grid Systems",
              path: "/topics/styling-and-ui/ui-patterns/grid",
            },
            {
              title: "Flexbox Layout",
              path: "/topics/styling-and-ui/ui-patterns/flexbox",
            },
          ],
        },
        {
          title: "Animationer",
          path: "/topics/styling-and-ui/animations",
          subItems: [
            {
              title: "CSS Transitions",
              path: "/topics/styling-and-ui/animations/transitions",
            },
            {
              title: "Framer Motion",
              path: "/topics/styling-and-ui/animations/framer-motion",
            },
          ],
        },
        {
          title: "Dark Mode",
          path: "/topics/styling-and-ui/dark-mode",
          subItems: [
            {
              title: "Implementation",
              path: "/topics/styling-and-ui/dark-mode/implementation",
            },
            {
              title: "System Preferences",
              path: "/topics/styling-and-ui/dark-mode/system-preferences",
            },
          ],
        },
      ],
    },
    {
      section: "Performance",
      items: [
        {
          title: "Performance",
          path: "/topics/performance",
        },
        {
          title: "Bundled Analyser",
          path: "/topics/performance/bundled-analyser",
        },
        { title: "Caching", path: "/topics/performance/caching" },
        { title: "Code Splitting", path: "/topics/performance/code-splitting" },
        { title: "Edge Rendering", path: "/topics/performance/edge-rendering" },
        { title: "Lazy Loading", path: "/topics/performance/lazy-loading" },
        {
          title: "Prefetching & Preloading",
          path: "/topics/performance/prefetching-preloading",
          subItems: [
            {
              title: "Prefetching",
              path: "/topics/performance/prefetching-preloading/prefetching",
            },
            {
              title: "Preloading",
              path: "/topics/performance/prefetching-preloading/preloading",
            },
          ],
        },
        {
          title: "Three-shaking",
          path: "/topics/performance/three-shaking",
        },
      ],
    },
    {
      section: "API & Data",
      items: [
        {
          title: "API & Data",
          path: "/topics/api-and-data",
        },
        {
          title: "Abort Controller",
          path: "/topics/api-and-data/abort-controller",
        },
        { title: "Axios", path: "/topics/api-and-data/axios" },
        { title: "cors", path: "/topics/api-and-data/cors" },
        {
          title: "Error Handling",
          path: "/topics/api-and-data/error-handling",
        },
        { title: "Fetch API", path: "/topics/api-and-data/fetch-api" },
        { title: "GraphQL", path: "/topics/api-and-data/graphql" },
        { title: "Rate Limiting", path: "/topics/api-and-data/rate-limiting" },
        { title: "REST API", path: "/topics/api-and-data/rest-api" },
      ],
    },
    {
      section: "Testing",
      items: [
        {
          title: "Testing",
          path: "/topics/testing",
        },
        { title: "E2E Testing", path: "/topics/testing/e2e-testing" },
        { title: "Jest", path: "/topics/testing/jest" },
        { title: "Mocking", path: "/topics/testing/mocking" },
        { title: "React Testing Library", path: "/topics/testing/rtl" },
      ],
    },
    {
      section: "Diverse",
      items: [
        {
          title: "Diverse",
          path: "/topics/diverse",
        },
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
            Exam Prep
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
