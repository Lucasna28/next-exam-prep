import CodeBlock from "@/components/CodeBlock";

export default function InterfacesPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Interfaces i TypeScript</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En dybdegående guide til interfaces i TypeScript, deres funktioner og
          anvendelse.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Interface</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Et interface definerer en kontrakt for objektstrukturer:
          </p>
          <CodeBlock
            code={`interface User {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // Valgfrit felt
}

const user: User = {
  name: "John",
  email: "john@example.com",
  age: 30
};`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Interface Arv</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Interfaces kan arve fra andre interfaces med extends:
          </p>
          <CodeBlock
            code={`interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const myDog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Labrador",
  bark: () => console.log("Woof!")
};`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Interface med Klasser
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Interfaces kan implementeres i klasser:
          </p>
          <CodeBlock
            code={`interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  constructor(private brand: string) {}

  start() {
    console.log(\`\${this.brand} starting...\`);
  }

  stop() {
    console.log(\`\${this.brand} stopping...\`);
  }
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avancerede Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Readonly Properties</h3>
              <CodeBlock
                code={`interface Config {
  readonly apiKey: string;
  readonly baseUrl: string;
}

const config: Config = {
  apiKey: "abc123",
  baseUrl: "https://api.example.com"
};

// Fejl: Cannot assign to 'apiKey' because it is a read-only property
config.apiKey = "xyz789";`}
                language="typescript"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Index Signatures</h3>
              <CodeBlock
                code={`interface StringMap {
  [key: string]: string;
}

const languages: StringMap = {
  dk: "Dansk",
  en: "English",
  de: "Deutsch"
};`}
                language="typescript"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug interfaces til at definere kontrakter for objekter og klasser
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Udnyt interface arv til at genbruge type definitioner
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug readonly for properties der ikke skal ændres
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Hold interfaces simple og fokuserede på én ansvar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
