import CodeBlock from "@/components/CodeBlock";

export default function CSSModulesCompositionPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 rounded-lg border border-pink-100 dark:border-pink-900">
        <h1 className="text-lg mb-2">CSS Modules: Composition</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan genbruge og sammensætte styles med CSS Modules
          composition feature.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Composition</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Brug composes til at genbruge styles fra andre classes:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// shared.module.css
.flex {
  display: flex;
}

.flexCenter {
  composes: flex;
  justify-content: center;
  align-items: center;
}

.flexBetween {
  composes: flex;
  justify-content: space-between;
  align-items: center;
}`}
              language="css"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// Card.module.css
.header {
  composes: flexBetween from './shared.module.css';
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.content {
  composes: flexCenter from './shared.module.css';
  padding: 2rem;
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Multiple Composition</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Du kan compose flere classes og kombinere med lokale styles:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// utils.module.css
.rounded {
  border-radius: 0.375rem;
}

.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.transition {
  transition: all 0.2s ease-in-out;
}`}
              language="css"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// Button.module.css
.base {
  composes: rounded shadow transition from './utils.module.css';
  padding: 0.5rem 1rem;
  font-weight: 500;
}

.primary {
  composes: base;
  background-color: #3b82f6;
  color: white;
}

.secondary {
  composes: base;
  background-color: #e5e7eb;
  color: #1f2937;
}`}
              language="css"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// Button.tsx
import styles from './Button.module.css';

export function Button({ variant = 'primary', children }) {
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Global Composition</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Du kan også compose fra globale classes:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`/* globals.css */
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

/* Heading.module.css */
.title {
  composes: text-lg font-bold from global;
  color: #1f2937;
}

.subtitle {
  composes: text-lg from global;
  color: #6b7280;
}`}
              language="css"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">
          Composition Best Practices
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
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
            <div>
              <strong className="block text-xs mb-1">Hold Det Simpelt</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Undgå for mange niveauer af composition da det kan gøre koden
                svær at følge.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
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
            <div>
              <strong className="block text-xs mb-1">
                Organisér Utility Classes
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Saml genbrugelige utility classes i dedikerede moduler for bedre
                vedligeholdelse.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
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
            <div>
              <strong className="block text-xs mb-1">
                Dokumentér Global Composition
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Når du composer fra globale styles, sørg for at dokumentere
                afhængighederne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
