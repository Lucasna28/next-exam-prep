import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function TestingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Testing</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær om forskellige testmetoder og værktøjer til at sikre kvaliteten af
          din kode.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Test Typer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/testing/jest"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                Unit Testing med Jest
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Test individuelle komponenter og funktioner.
              </p>
            </Link>

            <Link
              href="/topics/testing/rtl"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">
                React Testing Library
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Test React komponenter med fokus på brugeradfærd.
              </p>
            </Link>

            <Link
              href="/topics/testing/e2e-testing"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">End-to-End Testing</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Test hele applikationen med Cypress eller Playwright.
              </p>
            </Link>

            <Link
              href="/topics/testing/mocking"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Mocking</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Simuler eksterne afhængigheder i tests.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Test Strategier</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Vigtige koncepter i moderne testing:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Test Driven Development (TDD)</li>
            <li>Continuous Integration (CI)</li>
            <li>Test Coverage</li>
            <li>Test Pyramide</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Skriv testbare komponenter
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Test brugeradfærd frem for implementering
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Hold tests simple og fokuserede
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Automatiser tests i CI/CD pipeline
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
