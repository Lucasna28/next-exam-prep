"use client";

import CodeBlock from "@/components/CodeBlock";

export default function CSSAnimationsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">CSS Transitions & Animationer</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan tilføje liv til dit interface med CSS transitions
          og animationer.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">CSS Transitions</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            CSS transitions giver dig mulighed for at animere ændringer i CSS
            properties over tid. De er perfekte til simple interaktioner som
            hover effects og state changes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Hover Effect</h3>
              <button className="transition-all duration-300 px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white rounded-lg">
                Hover Mig
              </button>
              <div className="mt-4">
                <CodeBlock
                  code={`.button {
  transition: all 0.3s ease;
  
  &:hover {
    background: darkblue;
    transform: scale(1.05);
  }
}`}
                  language="css"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Color Transition</h3>
              <div className="transition-colors duration-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer">
                <p className="text-sm">Hover for farve transition</p>
              </div>
              <div className="mt-4">
                <CodeBlock
                  code={`.color-box {
  transition: background 0.5s ease;
  
  &:hover {
    background: linear-gradient(to right, purple, pink);
  }
}`}
                  language="css"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Transition Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="text-xs font-medium mb-2">
                  transition-property
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Specificerer hvilke CSS properties der skal animeres.
                </p>
                <CodeBlock
                  code={`transition-property: transform, opacity;`}
                  language="css"
                />
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="text-xs font-medium mb-2">
                  transition-duration
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Hvor lang tid animationen skal tage.
                </p>
                <CodeBlock code={`transition-duration: 0.3s;`} language="css" />
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="text-xs font-medium mb-2">
                  transition-timing-function
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Hvordan animationen skal accelerere/decelerere.
                </p>
                <CodeBlock
                  code={`transition-timing-function: ease-in-out;`}
                  language="css"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">CSS Animations</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            CSS animations giver dig mulighed for at skabe mere komplekse
            animationer med multiple steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Pulse Animation</h3>
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <div className="mt-4">
                <CodeBlock
                  code={`@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}`}
                  language="css"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Slide In Animation</h3>
              <div className="overflow-hidden">
                <div className="animate-[slideIn_0.5s_ease-out] p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                  <p className="text-sm">Jeg slider ind!</p>
                </div>
              </div>
              <div className="mt-4">
                <CodeBlock
                  code={`@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}`}
                  language="css"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Animation Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Basis Properties</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• animation-name: Navnet på keyframe animationen</li>
                <li>• animation-duration: Varighed af animationen</li>
                <li>• animation-timing-function: Acceleration kurve</li>
                <li>• animation-delay: Forsinkelse før start</li>
                <li>• animation-iteration-count: Antal gentagelser</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">
                Avancerede Properties
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• animation-direction: Normal, reverse, alternate</li>
                <li>• animation-fill-mode: Styling før/efter animation</li>
                <li>• animation-play-state: Running eller paused</li>
                <li>• animation-composition: Replace eller add</li>
              </ul>
            </div>
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
                Respektér Brugerens Præferencer
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Check prefers-reduced-motion og tilbyd alternativer.
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
                Brug Animationer med Formål
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Animationer skal forbedre brugeroplevelsen, ikke distrahere.
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
                Performance Optimering
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug transform og opacity for bedste performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
