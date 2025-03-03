import CodeBlock from "@/components/CodeBlock";

export default function CSSModulesScopingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950 rounded-lg border border-pink-100 dark:border-pink-900">
        <h1 className="text-lg mb-2">CSS Modules: Lokal Scoping</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan CSS Modules løser navnekonflikter gennem automatisk lokal
          scoping af class names.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Opsætning</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            CSS Modules er indbygget i Next.js. Opret en fil med .module.css
            endelsen:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Button.module.css
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  color: white;
}

.primary {
  background-color: #3b82f6;
}

.secondary {
  background-color: #6b7280;
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
    <button 
      className={styles.button + ' ' + styles[variant]}
    >
      {children}
    </button>
  );
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Hvordan Det Virker</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            CSS Modules genererer unikke class names ved build time:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Det du skriver
.button { ... }

// Det der genereres
.Button_button__xK_82 { ... }

// I din HTML
<button class="Button_button__xK_82 Button_primary__dR_4f">
  Klik Her
</button>`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avanceret Brug</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Brug af globale classes og kombinering af styles:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Card.module.css
/* Global class */
:global(.card-grid) {
  display: grid;
  gap: 1rem;
}

/* Lokal class med global modifier */
.card:global(.highlighted) {
  border-color: #3b82f6;
}

/* Compose flere classes */
.cardHeader {
  composes: flexBetween from global;
  padding: 1rem;
}`}
              language="css"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// Card.tsx
import styles from './Card.module.css';
import clsx from 'clsx';

export function Card({ highlighted }) {
  return (
    <div className={clsx(
      styles.card,
      highlighted && 'highlighted'
    )}>
      <div className={styles.cardHeader}>
        {/* Header indhold */}
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">Best Practices</h3>
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
              <strong className="block text-xs mb-1">Beskrivende Navne</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug semantiske og beskrivende class names der reflekterer
                komponentens formål.
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
              <strong className="block text-xs mb-1">Modularitet</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hold CSS tæt koblet til komponenten og undgå at dele styles på
                tværs af komponenter.
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
              <strong className="block text-xs mb-1">Undgå Global Scope</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug kun :global() når det er absolut nødvendigt, og dokumenter
                hvorfor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
