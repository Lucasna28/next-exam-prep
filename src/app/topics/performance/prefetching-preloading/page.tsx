import Link from "next/link";

export default function PrefetchingPreloadingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Prefetching & Preloading</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær om forskellen mellem prefetching og preloading, og hvordan du kan
          bruge disse teknikker til at optimere din applikations ydeevne.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Sammenligning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Prefetching</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Henter data eller ressourcer på forhånd</li>
                <li>Fokuserer på fremtidige navigationer</li>
                <li>Bruges ofte med Next.js router</li>
                <li>Kan reducere ventetid ved navigation</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Preloading</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Indlæser kritiske ressourcer tidligt</li>
                <li>Fokuserer på nuværende side</li>
                <li>Bruges med HTML link tags</li>
                <li>Forbedrer initial indlæsningstid</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/topics/performance/prefetching-preloading/prefetching"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">Prefetching</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Lær hvordan du kan forbedre navigationsoplevelsen ved at
              forudindlæse data og komponenter.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>

          <Link
            href="/topics/performance/prefetching-preloading/preloading"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">Preloading</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              Forstå hvordan du kan optimere indlæsningen af kritiske ressourcer
              på din side.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvornår bruges hvad?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">
                Brug Prefetching når:
              </h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Du vil optimere navigation mellem sider</li>
                <li>Du kan forudsige brugerens næste handling</li>
                <li>Du har ressourcer til at hente ekstra data</li>
                <li>Du vil forbedre perceived performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Brug Preloading når:</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Du har kritiske ressourcer der skal indlæses hurtigt</li>
                <li>Du vil optimere First Contentful Paint (FCP)</li>
                <li>Du har fonts eller stylesheets der er vigtige</li>
                <li>Du vil prioritere specifikke ressourcer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug ikke prefetching på data der ændrer sig ofte
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Preload kun de mest kritiske ressourcer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Overvej brugerens databegrænsninger
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Monitor effekten på serverbelastning
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
