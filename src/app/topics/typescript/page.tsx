import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function TypeScriptPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">TypeScript</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En superset af JavaScript der tilføjer statisk typning og
          objekt-orienterede features.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvad er TypeScript?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            TypeScript er et programmeringssprog udviklet af Microsoft, der
            bygger ovenpå JavaScript. Det tilføjer valgfri statisk typning,
            klasser og interfaces til JavaScript, hvilket gør det nemmere at
            udvikle og vedligeholde store applikationer.
          </p>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">
              Fordele ved TypeScript:
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Bedre fejlfinding under udvikling</li>
              <li>Forbedret IDE support med autocompletion</li>
              <li>Mere vedligeholdelig kode</li>
              <li>Bedre dokumentation af kodebasen</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Kom i Gang</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            For at starte med TypeScript skal du først installere det:
          </p>
          <CodeBlock
            code={`# Med npm
npm install typescript --save-dev

# Initialiser TypeScript config
npx tsc --init`}
            language="bash"
          />

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Basis Eksempel:</h3>
            <CodeBlock
              code={`// Definer typer for variabler
let name: string = "John";
let age: number = 30;

// Definer interface for objekter
interface User {
  name: string;
  age: number;
}

// Brug interface som type
const user: User = {
  name: "John",
  age: 30
};`}
              language="typescript"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Centrale Koncepter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/topics/typescript/interfaces-vs-types"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Interfaces & Types</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om forskellen mellem interfaces og type aliases.
              </p>
            </Link>

            <Link
              href="/topics/typescript/generics"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Generics</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Skriv fleksibel, genanvendelig kode med generics.
              </p>
            </Link>

            <Link
              href="/topics/typescript/utility-types"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Utility Types</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Udforsk TypeScripts indbyggede utility types.
              </p>
            </Link>

            <Link
              href="/topics/typescript/type-assertions"
              className="block p-4 rounded border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2">Type Assertions</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Lær om type assertions og type guards.
              </p>
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Integration med React
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            TypeScript fungerer særligt godt sammen med React og giver mange
            fordele:
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Type-sikre props og state</li>
            <li>Bedre autocomplete for komponenter</li>
            <li>Nemmere refaktorering</li>
            <li>Færre runtime fejl</li>
          </ul>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Start med strict mode aktiveret i tsconfig.json
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Undgå at bruge 'any' type hvor muligt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug interfaces for objekter der definerer en kontrakt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Udnyt TypeScripts type inference hvor det giver mening
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
