import CodeBlock from "@/components/CodeBlock";

export default function SASSNestingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">SASS: Nested Rules</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan bruge SASS nesting til at skrive mere organiseret
          og vedligeholdbar CSS.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Nesting</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            SASS tillader at neste selectors ligesom HTML strukturen:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Uden nesting (almindelig CSS)
.card { }
.card .header { }
.card .header .title { }
.card .content { }
.card .footer { }

// Med SASS nesting
.card {
  border-radius: $border-radius;
  box-shadow: $card-shadow;

  .header {
    padding: $spacing-unit;
    border-bottom: 1px solid $border-color;

    .title {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }

  .content {
    padding: $spacing-unit;
  }

  .footer {
    padding: $spacing-unit;
    border-top: 1px solid $border-color;
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Parent Selector (&)</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Brug & til at referere til parent selector:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.button {
  padding: 0.5rem 1rem;
  background-color: $primary-color;
  
  // Hover state
  &:hover {
    background-color: darken($primary-color, 10%);
  }
  
  // Active state
  &:active {
    transform: translateY(1px);
  }
  
  // Disabled state
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  // Modifiers
  &--large {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }
  
  &--small {
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
  }
  
  // Kombinationer
  &.is-loading {
    position: relative;
    pointer-events: none;
    
    &::after {
      content: "";
      position: absolute;
      // Loading spinner styles...
    }
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avanceret Nesting</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Komplekse eksempler på nesting med media queries og selectors:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`.navbar {
  display: flex;
  padding: $spacing-unit;
  
  // Media queries kan også nestes
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  // Nested selectors med &
  &__brand {
    font-weight: bold;
    
    @media (max-width: 768px) {
      margin-bottom: $spacing-unit;
    }
  }
  
  // Multiple selectors
  &__menu, &__user {
    display: flex;
    align-items: center;
  }
  
  // Sibling selectors
  & + & {
    margin-top: $spacing-unit;
  }
  
  // Attribute selectors
  &[data-expanded="true"] {
    height: auto;
    
    > .navbar__menu {
      display: flex;
    }
  }
  
  // Pseudo-classes og pseudo-elements
  &:not(:last-child) {
    margin-bottom: $spacing-unit;
    
    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid $border-color;
    }
  }
}`}
              language="scss"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">Nesting Best Practices</h3>
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
              <strong className="block text-xs mb-1">Undgå Dyb Nesting</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hold nesting til maksimalt 3-4 niveauer for bedre
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
              <strong className="block text-xs mb-1">BEM Notation</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug BEM notation med & for mere læsbar og vedligeholdbar kode.
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
                Gruppér Media Queries
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Overvej at samle media queries i stedet for at neste dem for
                bedre overblik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
