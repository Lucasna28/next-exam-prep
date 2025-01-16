import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function DiversePage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Diverse</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Vigtige tværgående emner inden for moderne webudvikling, fra sikkerhed
          til tilgængelighed.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Sikkerhed & Konfiguration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/env-vars"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                Environment Variables
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Sikker håndtering af følsomme data og konfiguration.
              </p>
            </Link>

            <Link
              href="/topics/debugging"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Debugging</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Teknikker og værktøjer til effektiv fejlfinding.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Brugeroplevelse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/seo"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">SEO</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Optimering for søgemaskiner og metadata.
              </p>
            </Link>

            <Link
              href="/topics/a11y"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Accessibility (a11y)</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Gør din applikation tilgængelig for alle brugere.
              </p>
            </Link>

            <Link
              href="/topics/i18n"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                Internationalization (i18n)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Håndtering af flere sprog og regioner.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Udvikling & Debugging
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Nyttige værktøjer og teknikker:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Chrome DevTools</li>
            <li>Logging og Error Tracking</li>
            <li>Performance Profiling</li>
            <li>Debugging Teknikker</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Følg WCAG retningslinjer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Beskyt sensitive data
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer proper error handling
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Test på tværs af sprog og regioner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
