import Link from "next/link";

export default function DiversePage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Diverse</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Vigtige tværgående emner inden for moderne webudvikling, fra miljøvariabler og SEO til tilgængelighed og debugging.
        </p>
      </div>

      <div className="space-y-8">
        {/* Environment Variables */}
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Konfiguration & Miljø</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/diverse/env-vars"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Environment Variables</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Håndtering af følsomme data og konfiguration i applikationen.
              </p>
            </Link>

            {/* SEO */}
            <Link
              href="/topics/diverse/seo"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">SEO (Search Engine Optimization)</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Teknikker og bedste praksis til forbedring af synligheden på søgemaskiner.
              </p>
            </Link>
          </div>
        </div>

        {/* Web Vitals & Performance */}
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Performance & Web Vitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/diverse/web-vitals"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Web Vitals</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Mål og optimer web performance med Web Vitals metrics som LCP, FID og CLS.
              </p>
            </Link>

            {/* Internationalization */}
            <Link
              href="/topics/diverse/i18n"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Internationalization (i18n)</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Håndtering af flere sprog og regioner i din applikation.
              </p>
            </Link>
          </div>
        </div>

        {/* Debugging Tools */}
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Fejlfinding & Værktøjer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/diverse/debugging"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Debugging Tools</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug værktøjer som React DevTools og Next.js Debugger til effektiv fejlfinding.
              </p>
            </Link>

            {/* Error Boundaries */}
            <Link
              href="/topics/diverse/error-boundaries"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Error Boundaries</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hvordan du håndterer JavaScript-fejl i din applikation ved hjælp af error boundaries.
              </p>
            </Link>
          </div>
        </div>

        {/* Accessibility */}
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Tilgængelighed (a11y)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/diverse/a11y"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Accessibility (a11y)</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Gør din applikation tilgængelig for alle brugere, uanset deres behov.
              </p>
            </Link>

            {/* Polyfills */}
            <Link
              href="/topics/diverse/polyfills"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Polyfills</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Implementer polyfills for at sikre, at din app fungerer på ældre browsere.
              </p>
            </Link>
          </div>
        </div>

        {/* Code Linting & Formattering */}
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Kodekvalitet & Lintere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/diverse/code-linting-formatting"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Code Linting & Formattering</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug ESLint og Prettier for at opretholde ensartet kode og fange fejl.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
