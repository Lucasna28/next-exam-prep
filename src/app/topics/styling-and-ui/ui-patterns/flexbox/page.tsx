import CodeBlock from "@/components/CodeBlock";

export default function FlexboxLayoutPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">Flexbox Layout Patterns</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær om almindelige Flexbox mønstre og hvordan du bruger dem til at
          skabe fleksible layouts.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Flexbox Layout</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Almindelige Flexbox layouts:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Centreret indhold
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

// Navigation bar
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  
  .nav-links {
    display: flex;
    gap: 1rem;
  }
}

// Card layout
.card {
  display: flex;
  flex-direction: column;
  
  .card-body {
    flex: 1;  // Fylder resterende plads
  }
  
  .card-footer {
    margin-top: auto;  // Skubber footer til bunden
  }
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Responsive Flexbox</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Tilpas layouts til forskellige skærmstørrelser:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  .flex-item {
    flex: 1 1 300px;  // Grow, shrink, basis
    min-width: 0;  // Forhindrer overflow
  }
}

// Responsiv navigation
.responsive-nav {
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    
    .nav-links {
      flex-direction: column;
      width: 100%;
    }
  }
}`}
              language="css"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Avancerede Flexbox Teknikker
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Udnyt flex-grow, flex-shrink og flex-basis:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Holy Grail Layout
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  header, footer {
    flex: 0 0 auto;
  }
  
  .content {
    flex: 1 0 auto;
    display: flex;
    
    main {
      flex: 1;
    }
    
    aside {
      flex: 0 0 200px;
      
      &.left {
        order: -1;
      }
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      
      aside {
        flex: 0 0 auto;
      }
    }
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
                Brug Flex Shorthand med Omtanke
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Vær eksplicit med flex-grow, flex-shrink, og flex-basis værdier.
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
              <strong className="block text-xs mb-1">Husk min-width: 0</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Forhindrer flex items i at vokse ud over deres container.
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
              <strong className="block text-xs mb-1">Test Cross-Browser</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Flexbox opfører sig forskelligt i nogle browsere - test
                grundigt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
