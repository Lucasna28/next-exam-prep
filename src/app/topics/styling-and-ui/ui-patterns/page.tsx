export default function UIPatternPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-100 dark:border-blue-900">
        <h1 className="text-lg mb-2">UI Patterns & Layout</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En oversigt over moderne UI mønstre og layout teknikker til at bygge
          responsive og brugervenlige interfaces.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Responsive Design</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Responsive design handler om at skabe brugergrænseflader der
            tilpasser sig forskellige skærmstørrelser og enheder. Dette opnås
            gennem:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Mobile-first tilgang til design og udvikling</li>
            <li>• Fleksible layouts der tilpasser sig skærmstørrelsen</li>
            <li>• Responsive typografi og billeder</li>
            <li>• Tilpasset navigation til forskellige enheder</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">CSS Grid Layout</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            CSS Grid er et kraftfuldt værktøj til at skabe komplekse
            to-dimensionelle layouts. Det er særligt nyttigt til:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Side layouts med header, footer og sidebars</li>
            <li>• Gallerier og card layouts</li>
            <li>• Avancerede grid-baserede designs</li>
            <li>• Responsive layouts uden media queries</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Flexbox Layout</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Flexbox er ideelt til en-dimensionelle layouts og komponenter. Det
            bruges ofte til:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Navigation og menuer</li>
            <li>• Card komponenter</li>
            <li>• Centrering af indhold</li>
            <li>• Responsive lister og collections</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Valg af Layout Teknik
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hver layout teknik har sine styrker:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              • <strong>Flexbox:</strong> Bedst til komponenter og
              en-dimensionelle layouts
            </li>
            <li>
              • <strong>Grid:</strong> Ideel til side layouts og
              to-dimensionelle strukturer
            </li>
            <li>
              • <strong>Kombineret:</strong> Brug begge teknikker hvor de giver
              mest mening
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">
          Generelle Best Practices
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
              <strong className="block text-xs mb-1">
                Start med Strukturen
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Planlæg din layout struktur før du begynder at style
                komponenter.
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
              <strong className="block text-xs mb-1">Tænk Responsivt</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Design altid med forskellige skærmstørrelser i tankerne.
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
              <strong className="block text-xs mb-1">Hold det Simpelt</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug den simpleste løsning der opfylder dine behov.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
