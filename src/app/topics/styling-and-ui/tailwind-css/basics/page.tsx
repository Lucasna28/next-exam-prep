import CodeBlock from "@/components/CodeBlock";

export default function TailwindBasicsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Grundlæggende Tailwind CSS</h1>
      <p className="text-xs mb-6">
        Tailwind CSS er et utility-first CSS framework, der gør det muligt at
        style direkte i HTML med prædefinerede klasser. Dette gør udviklingen
        hurtigere og mere konsistent.
      </p>

      <h2 className="text-base">Utility-First Princippet</h2>
      <p className="text-xs mb-4">
        I stedet for at skrive custom CSS, bruger du små utility klasser til at
        bygge dit design:
      </p>

      <CodeBlock
        code={`// Traditionel CSS
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  color: white;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #2563eb;
}

// Tailwind CSS
<button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
  Klik her
</button>`}
        language="css"
      />

      <div className="my-6 flex justify-center">
        <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Klik her
        </button>
      </div>

      <h2 className="text-base">Layout System</h2>
      <p className="text-xs mb-4">
        Tailwind gør det nemt at lave komplekse layouts med Flexbox og Grid:
      </p>

      <CodeBlock
        code={`// Flexbox Layout
<div className="flex justify-between items-center space-x-4">
  <div className="flex-1">Venstre</div>
  <div className="flex-1">Midten</div>
  <div className="flex-1">Højre</div>
</div>

// Grid Layout
<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
        language="jsx"
      />

      <div className="my-6 space-y-6">
        <div className="flex justify-between items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <div className="flex-1 p-2 bg-blue-500 text-white text-center rounded">
            Venstre
          </div>
          <div className="flex-1 p-2 bg-blue-500 text-white text-center rounded">
            Midten
          </div>
          <div className="flex-1 p-2 bg-blue-500 text-white text-center rounded">
            Højre
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
          <div className="p-2 bg-green-500 text-white text-center rounded">
            1
          </div>
          <div className="p-2 bg-green-500 text-white text-center rounded">
            2
          </div>
          <div className="p-2 bg-green-500 text-white text-center rounded">
            3
          </div>
        </div>
      </div>

      <h2 className="text-base">Spacing & Størrelse</h2>
      <p className="text-xs mb-4">
        Tailwind bruger et konsistent spacing system baseret på rem enheder:
      </p>

      <CodeBlock
        code={`// Margin & Padding
m-4  = margin: 1rem (16px)
p-4  = padding: 1rem (16px)

// Width & Height
w-full = width: 100%
h-screen = height: 100vh

// Max/Min dimensioner
max-w-md = max-width: 28rem
min-h-screen = min-height: 100vh`}
        language="css"
      />

      <div className="my-6 space-y-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded text-center">
          p-4
        </div>
        <div className="w-1/2 p-4 bg-blue-200 dark:bg-blue-800 rounded text-center">
          w-1/2
        </div>
        <div className="h-16 p-4 bg-blue-300 dark:bg-blue-700 rounded text-center">
          h-16
        </div>
      </div>

      <h2 className="text-base">Responsivt Design</h2>
      <p className="text-xs mb-4">
        Brug breakpoint prefixes til at style forskellige skærmstørrelser:
      </p>

      <CodeBlock
        code={`<div className="
  w-full          // Mobile (default)
  sm:w-2/3       // Tablet (640px)
  md:w-1/2       // Laptop (768px)
  lg:w-1/3       // Desktop (1024px)
  xl:w-1/4       // Wide Screen (1280px)
">
  Responsiv bredde
</div>`}
        language="jsx"
      />

      <div className="my-6">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-purple-500 text-white rounded text-center mx-auto">
          Responsiv bredde
        </div>
      </div>

      <h2 className="text-base">Pseudo-klasser & States</h2>
      <p className="text-xs mb-4">
        Tailwind giver dig nem adgang til alle almindelige states:
      </p>

      <CodeBlock
        code={`<button className="
  bg-green-500          // Normal state
  hover:bg-green-600    // Mouse over
  focus:ring-2         // Focused
  active:bg-green-700   // Being clicked
  disabled:opacity-50   // Disabled state
">
  Interaktiv Knap
</button>`}
        language="jsx"
      />

      <div className="my-6 flex justify-center">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-300 active:bg-green-700 disabled:opacity-50 text-white rounded transition-all">
          Interaktiv Knap
        </button>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Best Practices</h3>
        <ul className="text-xs space-y-2">
          <li>Brug @apply for gentagne utility kombinationer i komponenter</li>
          <li>
            Hold dine utility klasser organiserede og læsbare med linjeskift
          </li>
          <li>
            Udnyt Tailwinds konfigurations fil for brand-specifikke værdier
          </li>
          <li>
            Start med mobile-first design og byg op med responsive prefixes
          </li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Produktivitets Tips</h3>
        <ul className="text-xs space-y-2">
          <li>
            Installer Tailwind CSS IntelliSense for autocomplete i din editor
          </li>
          <li>Brug Tailwind CSS dokumentationen som din primære reference</li>
          <li>
            Lær de mest brugte utility klasser udenad for hurtigere udvikling
          </li>
          <li>Organiser komplekse utility kombinationer i komponenter</li>
        </ul>
      </div>
    </div>
  );
}
