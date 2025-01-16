import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function InterfacesVsTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Interfaces vs Types</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En sammenligning af interfaces og types i TypeScript, og hvornår du
          skal bruge hvad.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hovedforskelle</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Udvidelse af typer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interfaces kan udvides med nye felter efter deklaration, mens
                types er låste efter deklaration.
              </p>
              <CodeBlock
                code={`// Interface kan udvides
interface Animal {
  name: string;
}
interface Animal {
  age: number;
} // OK!

// Type kan ikke udvides
type Animal = {
  name: string;
}
type Animal = {
  age: number;
} // Fejl!`}
                language="typescript"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">
                Arv og Implementation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interfaces er bedre til objekt-orienteret programmering med
                klasser, mens types er bedre til funktionelle mønstre.
              </p>
              <CodeBlock
                code={`// Interface med klasse
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  makeSound() {
    console.log("Woof!");
  }
}

// Type med funktion
type StringTransformer = (str: string) => string;

const upperCase: StringTransformer = (str) => str.toUpperCase();`}
                language="typescript"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Hvornår skal du bruge hvad?
          </h2>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Brug Interfaces når:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Du definerer kontrakter for objekter eller klasser</li>
              <li>Du har brug for at udvide typer senere</li>
              <li>Du arbejder med objekt-orienteret kode</li>
              <li>Du vil have bedre fejlmeddelelser</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">Brug Types når:</h3>
            <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Du arbejder med funktioner eller tuples</li>
              <li>Du har brug for union eller intersection types</li>
              <li>Du vil mappe over typer eller bruge conditional types</li>
              <li>Du vil have en type der ikke kan ændres</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/topics/typescript/interfaces-vs-types/interfaces"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">Interfaces</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Lær mere om interfaces og hvordan de bruges i TypeScript.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>

          <Link
            href="/topics/typescript/interfaces-vs-types/types"
            className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
          >
            <h2 className="text-base font-semibold mb-2">Types</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Lær mere om type aliases og deres anvendelse i TypeScript.
            </p>
            <div className="text-sm text-blue-500">Læs mere →</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
