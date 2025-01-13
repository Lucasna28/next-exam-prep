"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Next.js",
    description: "Server-side rendering, routing, og moderne web udvikling",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "React",
    description: "Komponenter, hooks, og state management",
    icon: "⚛️",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "TypeScript",
    description: "Type-sikker JavaScript udvikling",
    icon: "📘",
    color: "from-teal-500 to-green-500",
  },
  {
    title: "JavaScript",
    description: "Moderne JavaScript features og koncepter",
    icon: "💫",
    color: "from-green-500 to-yellow-500",
  },
];

const features = [
  {
    title: "Omfattende Guide",
    description: "Dækker alle vigtige emner til eksamen",
    icon: "📚",
  },
  {
    title: "Praktiske Eksempler",
    description: "Kodeeksempler og real-world use cases",
    icon: "💻",
  },
  {
    title: "Print Venlig",
    description: "Nem at printe og medbringe til eksamen",
    icon: "🖨️",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          Next.js Eksamensforberedelse
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Din komplette guide til Next.js og moderne web udvikling
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              {category.description}
            </p>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Funktioner og Fordele
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl mb-2 block">{feature.icon}</span>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <Link
          href="/topics/dynamic-routing"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Start med Dynamic Routing
          <span className="text-xl">→</span>
        </Link>
      </motion.div>
    </div>
  );
}
