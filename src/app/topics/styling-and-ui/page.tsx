import Link from "next/link";

export default function StylingAndUIPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Styling & UI</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Udforsk forskellige metoder til styling og UI udvikling i moderne web
          applikationer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">CSS Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/styling-and-ui/tailwind-css"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Tailwind CSS</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Utility-first CSS framework med fokus på fleksibilitet.
              </p>
            </Link>

            <Link
              href="/topics/styling-and-ui/css-modules"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">CSS Modules</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lokalt scoped CSS for bedre vedligeholdelse.
              </p>
            </Link>

            <Link
              href="/topics/styling-and-ui/sass-scss"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">SASS/SCSS</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Avanceret CSS med variabler og mixins.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Layout & Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/styling-and-ui/ui-patterns"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">UI Patterns</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Responsive design, grid systemer og flexbox.
              </p>
            </Link>

            <Link
              href="/topics/styling-and-ui/animations"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Animationer</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                CSS transitions og Framer Motion.
              </p>
            </Link>

            <Link
              href="/topics/styling-and-ui/dark-mode"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Dark Mode</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Implementering af dark mode og system præferencer.
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug konsistente styling metoder
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Følg mobile-first tilgang
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Optimer for performance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Sørg for god tilgængelighed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
