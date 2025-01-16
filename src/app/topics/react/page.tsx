import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function ReactPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">React</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Et JavaScript bibliotek til at bygge brugergrænseflader med
          komponenter og state management.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvad er React?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            React er et JavaScript bibliotek udviklet af Facebook til at bygge
            brugergrænseflader. Det er baseret på komponenter og gør det nemt at
            bygge interaktive UI&apos;er der automatisk opdaterer sig når data
            ændres.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Fordele ved React:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Komponent-baseret arkitektur</li>
              <li>Virtuel DOM for bedre performance</li>
              <li>Stort økosystem af biblioteker</li>
              <li>Stærkt community og god dokumentation</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Kom i Gang</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Start et nyt React projekt med Create React App eller Next.js:
          </p>
          <CodeBlock
            code={`# Med Create React App
npx create-react-app my-app

# Med Next.js
npx create-next-app@latest my-app`}
            language="bash"
          />

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Basis Komponent:</h3>
            <CodeBlock
              code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Du har klikket {count} gange</p>
      <button onClick={() => setCount(count + 1)}>
        Klik mig
      </button>
    </div>
  );
}`}
              language="typescript"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Centrale Koncepter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/react/props"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Props</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om props og hvordan de bruges til at sende data mellem
                komponenter.
              </p>
            </Link>

            <Link
              href="/topics/react/state"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">State</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Forstå state management og hooks i React.
              </p>
            </Link>

            <Link
              href="/topics/react/context"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Context API</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Del state mellem komponenter uden prop drilling.
              </p>
            </Link>

            <Link
              href="/topics/react/custom-hooks"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Custom Hooks</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Byg dine egne hooks til at genbruge logik.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Performance Optimering
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            React tilbyder flere værktøjer til at optimere din applikation:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>React.memo for komponent memoization</li>
            <li>useMemo og useCallback hooks</li>
            <li>Code splitting med React.lazy</li>
            <li>Virtuel DOM diffing</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Hold komponenter små og fokuserede
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug funktionelle komponenter og hooks
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Undgå at mutere state direkte
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Husk at håndtere side-effects i useEffect
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
