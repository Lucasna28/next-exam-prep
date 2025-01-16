"use client";

import { motion } from "framer-motion";
import CodeBlock from "@/components/CodeBlock";

export default function AnimationsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Animationer i Modern Web Development</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En guide til forskellige animations teknikker og deres anvendelse i
          moderne web applikationer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Typer af Animationer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Micro-interactions</h3>
              <motion.button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hover & Klik Mig
              </motion.button>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Små, subtile animationer der giver feedback på brugerhandlinger.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Loading States</h3>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-blue-500 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Animationer der indikerer loading eller processing tilstande.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Animations Teknikker</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">1. CSS Transitions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Simple, deklarative animationer mellem to tilstande:
              </p>
              <div className="mt-2">
                <CodeBlock
                  code={`.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.1);
}`}
                  language="css"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">
                2. CSS Keyframe Animations
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Komplekse animationer med multiple steps:
              </p>
              <div className="mt-2">
                <CodeBlock
                  code={`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bouncing-element {
  animation: bounce 1s ease infinite;
}`}
                  language="css"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">
                3. JavaScript Animations
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Programmatiske animationer med fuld kontrol:
              </p>
              <div className="mt-2">
                <CodeBlock
                  code={`// Med Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
/>`}
                  language="jsx"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Anvendelsesområder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Interface Feedback</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4">
                <li>Hover states</li>
                <li>Click feedback</li>
                <li>Form validation</li>
                <li>Success/error states</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Page Transitions</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-4">
                <li>Route changes</li>
                <li>Modal dialogs</li>
                <li>Slide-in menus</li>
                <li>Content loading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">
          Valg af Animations Teknik
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">CSS Transitions</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Bedst til simple hover/click effekter og tilstandsændringer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">CSS Animations</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Ideel til gentagne animationer og komplekse keyframe sekvenser.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">
                JavaScript/Framer Motion
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Perfekt til interaktive animationer og kompleks orchestration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
