import CodeBlock from "@/components/CodeBlock";

export default function ResponsiveLayoutPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">Responsive Layout Patterns</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær om de mest almindelige responsive design mønstre og hvordan du
          implementerer dem.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Mobile-First Tilgang</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Start med mobil layout og udvid gradvist til større skærme:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.container {
  width: 100%;
  padding: 1rem;
  
  @media (min-width: 640px) {
    max-width: 640px;
    margin: 0 auto;
  }
  
  @media (min-width: 768px) {
    max-width: 768px;
  }
  
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
}

.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;  // Mobile: en kolonne
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);  // Tablet: to kolonner
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);  // Desktop: tre kolonner
  }
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Responsive Navigation
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Almindelige mønstre for responsiv navigation:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.nav {
  // Mobile: Burger menu
  @media (max-width: 767px) {
    .nav__menu {
      display: none;
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background: white;
      
      &.is-open {
        display: block;
      }
    }
    
    .nav__burger {
      display: block;
    }
  }
  
  // Desktop: Horisontal menu
  @media (min-width: 768px) {
    .nav__menu {
      display: flex;
      gap: 1.5rem;
    }
    
    .nav__burger {
      display: none;
    }
  }
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Responsive Typografi</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Skalér tekst baseret på skærmstørrelse:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`:root {
  // Base font size
  font-size: 16px;
  
  @media (min-width: 640px) {
    font-size: calc(16px + 0.5vw);
  }
}

// Fluid typography
.heading {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.2;
}

.body-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.5;
}`}
              language="css"
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
              <strong className="block text-xs mb-1">
                Test på Rigtige Enheder
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug ikke kun browserens responsive mode - test på faktiske
                enheder.
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
                Brug Relative Enheder
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Foretræk rem, em, og % over faste pixel værdier.
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
                Overvej Performance
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Optimer billeder og assets for forskellige skærmstørrelser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
