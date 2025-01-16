import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function NextBasicsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Next.js Grundlæggende</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Kom i gang med Next.js - installation, opsætning og grundlæggende
          koncepter.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Installation & Opsætning
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Start dit første Next.js projekt med følgende kommando:
          </p>
          <CodeBlock code={`npx create-next-app@latest my-app`} language={""} />

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Projekt Struktur:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>app/ - Din applikations hovedmappe</li>
              <li>public/ - Statiske filer</li>
              <li>components/ - Genbrugelige komponenter</li>
              <li>next.config.js - Next.js konfiguration</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Grundlæggende Koncepter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/next/general/routing"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Routing</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om filbaseret routing i Next.js.
              </p>
            </Link>

            <Link
              href="/topics/next/general/pages"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Pages & Layouts</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Forstå sidestruktur og layouts.
              </p>
            </Link>

            <Link
              href="/topics/next/general/components"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Komponenter</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Byg med Server og Client komponenter.
              </p>
            </Link>

            <Link
              href="/topics/next/general/assets"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Assets & Images</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Håndter billeder og statiske filer.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Kom Godt I Gang</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Nyttige kommandoer til udvikling:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>npm run dev - Start udviklingsserver</li>
            <li>npm run build - Byg til produktion</li>
            <li>npm start - Start produktionsserver</li>
            <li>npm run lint - Kør linting</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug TypeScript for bedre type sikkerhed
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Organiser din kode i logiske mapper
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Følg Next.js konventioner for filnavngivning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Hold komponenter små og fokuserede
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
