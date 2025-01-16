import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function NextAdvancedPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Next.js Avanceret</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Udforsk avancerede Next.js koncepter og funktioner for at bygge
          skalerbare applikationer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avancerede Koncepter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/next/advanced/data-fetching"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Data Fetching</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Server Components, getStaticProps, getServerSideProps.
              </p>
            </Link>

            <Link
              href="/topics/next/advanced/caching"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Caching Strategier</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Request Memoization, Data Caching, Full Route Cache.
              </p>
            </Link>

            <Link
              href="/topics/next/advanced/middleware"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Middleware</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Route beskyttelse og request transformation.
              </p>
            </Link>

            <Link
              href="/topics/next/advanced/rendering"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Rendering Patterns</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                SSG, SSR, ISR og deres anvendelser.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Performance Optimering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/next/advanced/optimization"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Bundle Optimization</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Code Splitting, Dynamic Imports, Tree Shaking.
              </p>
            </Link>

            <Link
              href="/topics/next/advanced/edge"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Edge Runtime</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Edge Functions og Middleware på Edge.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Konfiguration & Deployment
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Avancerede konfigurationsmuligheder:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Environment Variables</li>
            <li>next.config.js tilpasning</li>
            <li>Custom Server Setup</li>
            <li>Deployment Strategier</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer effektiv caching strategi
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Optimer for Core Web Vitals
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug Server Components hvor muligt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer proper error handling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
