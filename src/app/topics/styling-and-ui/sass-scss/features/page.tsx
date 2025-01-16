import CodeBlock from "@/components/CodeBlock";

export default function SASSFeaturesPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">SASS: Variabler & Mixins</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan bruge SASS variabler og mixins til at skrive mere
          vedligeholdbar CSS.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Variabler</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            SASS variabler starter med $ og kan indeholde alle typer CSS
            værdier:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// _variables.scss
$primary-color: #3b82f6;
$secondary-color: #6b7280;
$spacing-unit: 1rem;
$border-radius: 0.375rem;

// Font stacks
$font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;

// Breakpoints
$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
);

// Brug af variabler
.button {
  padding: $spacing-unit;
  border-radius: $border-radius;
  font-family: $font-sans;
  background-color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Mixins</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Mixins er genbrugelige blokke af CSS regler:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button-variant($bg-color, $text-color: white) {
  background-color: $bg-color;
  color: $text-color;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba($bg-color, 0.5);
  }
}

@mixin responsive($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}`}
              language="scss"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`// Brug af mixins
.card {
  @include flex-center;
  padding: $spacing-unit;
}

.button-primary {
  @include button-variant($primary-color);
}

.button-secondary {
  @include button-variant($secondary-color, #1f2937);
}

.container {
  width: 100%;
  
  @include responsive('md') {
    max-width: 768px;
    margin: 0 auto;
  }
  
  @include responsive('lg') {
    max-width: 1024px;
  }
}`}
              language="scss"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Avancerede Mixins</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Mixins kan også indeholde logik og beregninger:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`@mixin grid-columns($cols) {
  display: grid;
  grid-template-columns: repeat($cols, 1fr);
  gap: $spacing-unit;
}

@mixin truncate-text($lines: 1) {
  @if $lines == 1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

// Brug
.grid-container {
  @include grid-columns(3);
  
  @include responsive('sm') {
    @include grid-columns(2);
  }
  
  @include responsive('xs') {
    @include grid-columns(1);
  }
}

.card-title {
  @include truncate-text(2);
}`}
              language="scss"
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
                Organisér Variabler
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Hold variabler i separate filer og gruppér dem efter formål.
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
              <strong className="block text-xs mb-1">Dokumentér Mixins</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Tilføj kommentarer der forklarer mixins parametre og brug.
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
              <strong className="block text-xs mb-1">Hold Mixins Simple</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Undgå for komplekse mixins - del dem op i mindre, genbrugelige
                dele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
