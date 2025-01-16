import CodeBlock from "@/components/CodeBlock";

export default function GridLayoutPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">CSS Grid Layout Patterns</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær om almindelige CSS Grid mønstre og hvordan du implementerer dem
          effektivt.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Grid Layout</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Opret et simpelt responsivt grid:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.grid-container {
  display: grid;
  gap: 1rem;
  
  // Automatisk tilpassende kolonner
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  // Fast antal kolonner
  // grid-template-columns: repeat(3, 1fr);
}

// Grid med forskellige kolonne størrelser
.featured-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 2fr 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Grid Areas</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Brug grid-template-areas til komplekse layouts:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.page-layout {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  
  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Avancerede Grid Teknikker
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Udnyt grid-auto-flow og spanning:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Masonry-lignende layout
.masonry-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: dense;
  
  .item-tall {
    grid-row: span 2;
  }
  
  .item-wide {
    grid-column: span 2;
  }
}

// Grid med overlap
.overlap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
  
  .featured {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    z-index: 1;
  }
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
                Brug Grid Areas til Komplekse Layouts
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Grid areas gør det nemmere at vedligeholde og ændre komplekse
                layouts.
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
              <strong className="block text-xs mb-1">Overvej Fallbacks</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hav en fallback plan for browsere der ikke understøtter grid
                fuldt ud.
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
                Test Grid Gap Support
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Nogle ældre browsere understøtter ikke grid-gap - brug margin
                som fallback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
