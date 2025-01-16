import Link from "next/link";

export default function APIAndDataPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">API & Data Integration</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær at integrere og håndtere data gennem forskellige API&apos;er og
          datakilder i moderne webapplikationer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Data Integration</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Moderne webapplikationer kræver effektiv datahåndtering og
            integration med forskellige API'er. Det er vigtigt at forstå
            forskellige metoder og best practices for at arbejde med eksterne
            datakilder.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Nøgle Koncepter:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>REST vs GraphQL</li>
              <li>Authentication & Authorization</li>
              <li>Error Handling</li>
              <li>Data Caching</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">API Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/api-and-data/rest-api"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">REST API</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om RESTful services og hvordan du arbejder med dem.
              </p>
            </Link>

            <Link
              href="/topics/api-and-data/graphql"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">GraphQL</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Udforsk GraphQL og dens fordele i moderne API design.
              </p>
            </Link>

            <Link
              href="/topics/api-and-data/fetch-api"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Fetch API</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Arbejd med den indbyggede Fetch API til datahåndtering.
              </p>
            </Link>

            <Link
              href="/topics/api-and-data/axios"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Axios</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug Axios for nemmere HTTP requests og responses.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Sikkerhed & Performance
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Vigtige aspekter at overveje ved API integration:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>CORS håndtering</li>
            <li>Rate limiting</li>
            <li>Error handling strategier</li>
            <li>Request cancellation</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer robust error handling
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug TypeScript for type-sikkerhed
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Cache data hvor det giver mening
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Følg API sikkerhedsbedste praksis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
