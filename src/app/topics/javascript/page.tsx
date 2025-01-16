import Link from "next/link";

export default function JavaScriptPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">JavaScript</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Det moderne programmeringssprog der driver det interaktive web med
          fokus på asynkron programmering og funktionelle koncepter.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Moderne JavaScript</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            JavaScript har udviklet sig markant gennem årene og tilbyder nu
            kraftfulde features til moderne webudvikling. Med ES6+ får du adgang
            til forbedret syntax, nye datastrukturer og bedre værktøjer til
            asynkron programmering.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Nøgle Features:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Arrow functions og template literals</li>
              <li>Destructuring og spread operator</li>
              <li>Promises og async/await</li>
              <li>Modules og import/export</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Centrale Koncepter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/javascript/array-object-methods"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                Array & Object Methods
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om map, filter, reduce og andre kraftfulde array metoder.
              </p>
            </Link>

            <Link
              href="/topics/javascript/promises-async-await"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                Promises & Async/Await
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Håndter asynkrone operationer elegant og effektivt.
              </p>
            </Link>

            <Link
              href="/topics/javascript/closure-scope"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Closure & Scope</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Forstå closure, scope og hvordan de påvirker din kode.
              </p>
            </Link>

            <Link
              href="/topics/javascript/modules-bundling"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Modules & Bundling</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Organiser din kode med modules og moderne bundling værktøjer.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avancerede Koncepter</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            JavaScript har flere avancerede koncepter der er vigtige at forstå:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Prototypal inheritance</li>
            <li>Event loop og asynkronitet</li>
            <li>Debouncing og throttling</li>
            <li>Memory management</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug const og let i stedet for var
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer error handling i async kode
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Undgå global scope forurening
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Følg moderne ES6+ konventioner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
