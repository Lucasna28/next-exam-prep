"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Next.js",
    description: "Server-side rendering, routing, og moderne web udvikling",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
    links: [
      { title: "Dynamic Routing", path: "/topics/next/dynamic-routing" },
      { title: "Static Site Generation", path: "/topics/next/ssg" },
      {
        title: "Server Components",
        path: "/topics/next/server-client-components",
      },
    ],
  },
  {
    title: "React",
    description: "Komponenter, hooks, og state management",
    icon: "⚛️",
    color: "from-cyan-500 to-teal-500",
    bgColor: "hover:bg-teal-50 dark:hover:bg-teal-950/30",
    links: [
      { title: "Props & State", path: "/topics/react/props-state" },
      { title: "Custom Hooks", path: "/topics/react/custom-hooks" },
      { title: "Context API", path: "/topics/react/context-api" },
    ],
  },
  {
    title: "TypeScript",
    description: "Type-sikker JavaScript udvikling",
    icon: "📘",
    color: "from-teal-500 to-green-500",
    bgColor: "hover:bg-green-50 dark:hover:bg-green-950/30",
    links: [
      { title: "Types vs Interfaces", path: "/topics/types-interfaces" },
      { title: "Generics", path: "/topics/generics" },
      { title: "Advanced Types", path: "/topics/advanced-types" },
    ],
  },
  {
    title: "JavaScript",
    description: "Moderne JavaScript features og koncepter",
    icon: "💫",
    color: "from-green-500 to-yellow-500",
    bgColor: "hover:bg-yellow-50 dark:hover:bg-yellow-950/30",
    links: [
      { title: "Async Programming", path: "/topics/async-programming" },
      { title: "Modern Features", path: "/topics/modern-js" },
      { title: "Core Concepts", path: "/topics/js-core-concepts" },
    ],
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            Next.js Eksamensforberedelse
          </h1>
        </motion.div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Din komplette guide til moderne web udvikling med Next.js, React, og
          TypeScript
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl 
                       bg-white dark:bg-slate-800/50 
                       backdrop-blur-sm
                       p-8 
                       border border-slate-200 dark:border-slate-700
                       shadow-lg hover:shadow-xl
                       ${category.bgColor}
                       transition-all duration-300 ease-out`}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                {category.description}
              </p>
              <div className="space-y-3">
                {category.links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="group/link flex items-center justify-between
                             p-4 rounded-xl text-base
                             bg-slate-50 dark:bg-slate-800
                             hover:bg-white dark:hover:bg-slate-700
                             border border-transparent
                             hover:border-slate-200 dark:hover:border-slate-600
                             text-slate-700 dark:text-slate-300
                             shadow-sm hover:shadow-md
                             transition-all duration-200"
                  >
                    <span>{link.title}</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} 
                         opacity-0 group-hover:opacity-5 
                         transition-opacity duration-300`}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center pb-20"
      >
        <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <span className="text-2xl">✨</span>
          <span>Vælg et emne ovenfor for at komme i gang</span>
          <span className="text-2xl">✨</span>
        </div>
      </motion.div>
    </div>
  );
}
