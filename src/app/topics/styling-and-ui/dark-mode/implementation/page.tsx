"use client";

import CodeBlock from "@/components/CodeBlock";

export default function DarkModeImplementationPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Implementering af Dark Mode</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En step-by-step guide til at implementere dark mode i din Next.js
          applikation med Tailwind CSS.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            1. Konfiguration af Tailwind CSS
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Start med at konfigurere Tailwind CSS til at understøtte dark mode:
          </p>
          <CodeBlock
            code={`// tailwind.config.js
module.exports = {
  darkMode: 'class', // eller 'media' for system preference
  // ... resten af din config
}`}
            language="javascript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">2. Provider Setup</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Opret en ThemeProvider komponent til at håndtere dark mode tilstand:
          </p>
          <CodeBlock
            code={`// components/ThemeProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  isDark: false,
  toggle: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggle = () => {
    const newMode = !isDark
    setIsDark(newMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', newMode ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            3. Theme Toggle Komponent
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Implementer en toggle knap til at skifte mellem temaer:
          </p>
          <CodeBlock
            code={`// components/ThemeToggle.tsx
'use client'

import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            4. Styling med Tailwind
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Brug Tailwinds dark mode modifier til at style komponenter:
          </p>
          <CodeBlock
            code={`// Eksempel på styling med dark mode
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-gray-100
  border-gray-200 dark:border-gray-700
">
  <h1 className="text-black dark:text-white">
    Din Overskrift
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Din tekst her
  </p>
</div>`}
            language="jsx"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            5. Script til Initial Theme
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Tilføj dette script i din HTML for at undgå flash of wrong theme:
          </p>
          <CodeBlock
            code={`// app/layout.tsx
<script
  dangerouslySetInnerHTML={{
    __html: \`
      try {
        const theme = localStorage.getItem('darkMode')
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        }
      } catch (e) {}
    \`
  }}
/>`}
            language="jsx"
          />
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">
            Tips til Implementation
          </h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug CSS variabler for konsistente farver på tværs af temaer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Tilføj transition-duration til smooth theme skift
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Test dark mode på forskellige enheder og browsere
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Husk at style alle states (hover, focus, active)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
