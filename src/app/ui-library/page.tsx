import Link from "next/link";

export default function UILibraryPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">UI Component Library</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En samling af genbrugelige UI komponenter bygget med React, Next.js og
          Tailwind CSS. Hver komponent er designet med fokus på tilgængelighed
          og responsivitet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/ui-library/components/button"
          className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h2 className="text-base font-semibold mb-2">Button</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Forskellige variationer af knapper med forskellige størrelser,
            farver og tilstande.
          </p>
        </Link>

        <Link
          href="/ui-library/components/input"
          className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h2 className="text-base font-semibold mb-2">Input</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Input felter med forskellige typer, størrelser og
            valideringstilstande.
          </p>
        </Link>

        <Link
          href="/ui-library/components/card"
          className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h2 className="text-base font-semibold mb-2">Card</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kort komponenter til at vise indhold i forskellige layouts.
          </p>
        </Link>

        <Link
          href="/ui-library/components/dropdown"
          className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
        >
          <h2 className="text-base font-semibold mb-2">Dropdown</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dropdown menuer med forskellige interaktionsmuligheder.
          </p>
        </Link>
      </div>
    </div>
  );
}
