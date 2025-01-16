"use client";

import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function DarkModePage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Dark Mode i Modern Web Development</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En guide til implementering af dark mode i moderne web applikationer
          med fokus på brugeroplevelse og tilgængelighed.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvorfor Dark Mode?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-blue-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <div>
                <strong className="block text-sm mb-1">
                  Bedre Brugeroplevelse
                </strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Reducerer øjenbelastning ved brug i mørke omgivelser og giver
                  brugeren kontrol over deres foretrukne tema.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-blue-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div>
                <strong className="block text-sm mb-1">Batterilevetid</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kan reducere strømforbruget på enheder med OLED/AMOLED skærme.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-blue-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>
                <strong className="block text-sm mb-1">Tilgængelighed</strong>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Imødekommer brugere med lysfølsomhed og forskellige visuelle
                  præferencer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/topics/styling-and-ui/dark-mode/implementation"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">
              Implementation Guide
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Lær hvordan du implementerer dark mode i din applikation med
              Next.js og Tailwind CSS.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>

          <Link
            href="/topics/styling-and-ui/dark-mode/system-preferences"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">System Preferences</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Håndter system-level dark mode præferencer og brugervalg.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Vigtige Overvejelser</h2>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Vælg farver der fungerer godt i både lyst og mørkt tema
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Sørg for tilstrækkelig kontrast mellem tekst og baggrund
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Test med forskellige skærmindstillinger og lysforhold
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Husk at gemme brugerens tema-præference
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer smooth transitions mellem temaer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
