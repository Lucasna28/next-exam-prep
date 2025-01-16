import Link from "next/link";

export default function PerformancePage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Performance</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Optimering af web applikationer for hurtigere indlæsning, bedre
          brugeroplevelse og højere konverteringsrate.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvorfor Performance?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Performance er afgørende for brugeroplevelsen og kan direkte påvirke
            engagementet og konverteringsraten på din side. Google bruger også
            sidens hastighed som en rankingfaktor.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Nøgle Metrics:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>First Contentful Paint (FCP)</li>
              <li>Largest Contentful Paint (LCP)</li>
              <li>Time to Interactive (TTI)</li>
              <li>Cumulative Layout Shift (CLS)</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Centrale Koncepter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/performance/lazy-loading"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Lazy Loading</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om dynamisk import og lazy loading af komponenter.
              </p>
            </Link>

            <Link
              href="/topics/performance/code-splitting"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Code Splitting</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Opdel din kode i mindre bundles for hurtigere indlæsning.
              </p>
            </Link>

            <Link
              href="/topics/performance/caching"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Caching</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Implementer effektive caching strategier.
              </p>
            </Link>

            <Link
              href="/topics/performance/edge-rendering"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Edge Rendering</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Udnyt edge netværk for hurtigere responstider.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Optimeringsteknikker</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Der er flere områder hvor du kan optimere din applikation:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Billede og medie optimering</li>
            <li>Bundle size reduktion</li>
            <li>Server-side rendering</li>
            <li>Resource prioritering</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Mål performance regelmæssigt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Optimer for mobile first
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer progressive enhancement
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug performance budgets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
