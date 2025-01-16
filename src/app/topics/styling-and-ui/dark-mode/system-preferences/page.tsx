"use client";

import CodeBlock from "@/components/CodeBlock";

export default function SystemPreferencesPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">System Preferences for Dark Mode</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan integrere din applikations dark mode med brugerens
          system præferencer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Detekter System Præference
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Brug CSS media queries eller JavaScript til at detektere brugerens
            system præference:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">CSS Media Query</h3>
              <CodeBlock
                code={`@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
  :root {
    --bg-color: #121212;
    --text-color: #ffffff;
  }
}

@media (prefers-color-scheme: light) {
  /* Light mode styles */
  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
  }
}`}
                language="css"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">JavaScript Detection</h3>
              <CodeBlock
                code={`const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

// Lyt efter ændringer
prefersDark.addListener((e) => {
  const isDark = e.matches
  // Opdater app theme
  updateTheme(isDark)
})`}
                language="javascript"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Håndter Bruger Præference
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Implementer en løsning der respekterer både system og bruger
            præferencer:
          </p>

          <CodeBlock
            code={`// hooks/useTheme.ts
import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('system') // 'light', 'dark', eller 'system'

  useEffect(() => {
    // Hent gemt præference
    const savedTheme = localStorage.getItem('theme') || 'system'
    setTheme(savedTheme)
    
    // Opdater theme baseret på præference
    updateThemeClass(savedTheme)
  }, [])

  const updateThemeClass = (newTheme: string) => {
    const isDark = 
      newTheme === 'dark' || 
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    document.documentElement.classList.toggle('dark', isDark)
  }

  const setPreference = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    updateThemeClass(newTheme)
  }

  return { theme, setPreference }
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Theme Selector Komponent
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Implementer en selector der giver brugeren mulighed for at vælge
            deres foretrukne tema:
          </p>

          <CodeBlock
            code={`// components/ThemeSelector.tsx
'use client'

import { useTheme } from '../hooks/useTheme'

export function ThemeSelector() {
  const { theme, setPreference } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setPreference(e.target.value)}
      className="p-2 rounded-lg bg-white dark:bg-gray-800"
    >
      <option value="system">System Preference</option>
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
    </select>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
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
                <strong className="block text-xs mb-1">
                  Respekter System Præference
                </strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Brug system præference som default, men giv brugeren mulighed
                  for at overskrive den.
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
                <strong className="block text-xs mb-1">Gem Bruger Valg</strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Gem brugerens valg i localStorage og respekter det på tværs af
                  sessioner.
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
                  Smooth Transitions
                </strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Implementer smooth transitions når temaet ændres for en bedre
                  brugeroplevelse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
