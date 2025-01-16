import CodeBlock from "@/components/CodeBlock";

export default function TypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Types i TypeScript</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En dybdegående guide til type aliases i TypeScript og deres mange
          anvendelsesmuligheder.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Type Alias</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Type aliases kan bruges til at give et navn til enhver type:
          </p>
          <CodeBlock
            code={`// Simple type alias
type ID = string | number;

// Object type
type User = {
  id: ID;
  name: string;
  email: string;
};

const user: User = {
  id: "123",
  name: "John",
  email: "john@example.com"
};`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Union og Intersection Types
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Types er perfekte til at kombinere typer:
          </p>
          <CodeBlock
            code={`// Union type
type Status = "pending" | "approved" | "rejected";

// Intersection type
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  level: number;
};

type TeamLead = Employee & Manager;

const lead: TeamLead = {
  id: 1,
  name: "Jane",
  department: "IT",
  level: 2
};`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Funktions Types</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Type aliases er ideelle til at definere funktionstyper:
          </p>
          <CodeBlock
            code={`type Callback<T> = (data: T) => void;

type HttpHandler = {
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, data: any) => Promise<T>;
};

const api: HttpHandler = {
  get: async (url) => {
    const response = await fetch(url);
    return response.json();
  },
  post: async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return response.json();
  }
};`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avancerede Types</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Mapped Types</h3>
              <CodeBlock
                code={`type Optional<T> = {
  [K in keyof T]?: T[K];
};

type User = {
  name: string;
  age: number;
};

type PartialUser = Optional<User>;
// Resulterer i: { name?: string; age?: number; }`}
                language="typescript"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Conditional Types</h3>
              <CodeBlock
                code={`type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

type NonNullable<T> = T extends null | undefined ? never : T;`}
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
              Brug types til union types og komplekse type transformationer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Udnyt mapped types til at generere nye typer baseret på
              eksisterende
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug conditional types til at skabe fleksible type definitioner
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Hold type aliases læsbare ved at bryde komplekse typer ned i
              mindre dele
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
