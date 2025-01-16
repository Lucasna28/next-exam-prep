import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function ShadcnPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">shadcn/ui Guide</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En moderne UI komponentsamling der kombinerer det bedste fra Radix UI
          og Tailwind CSS. Perfekt til Next.js projekter med fokus på
          tilgængelighed og tilpasning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link
          href="/topics/styling-and-ui/shadcn/components"
          className="group p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
        >
          <div className="p-3 bg-blue-500/10 rounded-md w-fit mb-3 group-hover:bg-blue-500/20 transition-colors">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-2 group-hover:text-blue-500 transition-colors">
            Komponenter
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            De mest brugte komponenter med praktiske eksempler og kode snippets.
          </p>
        </Link>

        <Link
          href="/topics/styling-and-ui/shadcn/forms"
          className="group p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 hover:shadow-md transition-all"
        >
          <div className="p-3 bg-green-500/10 rounded-md w-fit mb-3 group-hover:bg-green-500/20 transition-colors">
            <svg
              className="w-5 h-5 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-2 group-hover:text-green-500 transition-colors">
            Forms & Validering
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Byg brugervenlige formularer med validering og fejlhåndtering.
          </p>
        </Link>

        <Link
          href="/topics/styling-and-ui/shadcn/theming"
          className="group p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-md transition-all"
        >
          <div className="p-3 bg-purple-500/10 rounded-md w-fit mb-3 group-hover:bg-purple-500/20 transition-colors">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-2 group-hover:text-purple-500 transition-colors">
            Tema & Tilpasning
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Tilpas farver, animationer og dark mode til dit behov.
          </p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hurtig Installation</h2>
          <div className="mb-4">
            <CodeBlock
              code={`# Initialiser shadcn/ui
npx shadcn@latest init`}
              language="bash"
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Kør kommandoen i dit Next.js projekt og følg guiden.
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Installer Komponenter
          </h2>
          <div className="mb-4">
            <CodeBlock
              code={`# Installer basis komponenter
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog`}
              language="bash"
            />
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Tilføj kun de komponenter du har brug for.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Kom Godt i Gang</h3>
          <ul className="text-xs space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Start med at installere basis komponenterne
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Læs dokumentationen for hver komponent
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Tilpas tema farverne til dit projekt
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-100 dark:border-amber-900">
          <h3 className="text-base font-semibold mb-3">Husk</h3>
          <ul className="text-xs space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Ikke et npm package - copy/paste komponenter
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Fuld kontrol over koden
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Bygget med tilgængelighed i fokus
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
