import CodeBlock from "@/components/CodeBlock";

export default function TailwindResponsivePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Responsive Design med Tailwind CSS</h1>
      <p className="text-xs mb-6">
        Tailwind CSS bruger et mobile-first breakpoint system, der gør det nemt
        at skabe responsive designs. Start med mobile design og tilføj styles
        for større skærme med breakpoint prefixes.
      </p>

      <h2 className="text-base">Standard Breakpoints</h2>
      <p className="text-xs mb-4">
        Tailwind kommer med fem standard breakpoints:
      </p>

      <CodeBlock
        code={`// Tailwind standard breakpoints
sm: 640px  // Små tablets og op
md: 768px  // Tablets og op
lg: 1024px // Desktop og op
xl: 1280px // Store skærme
2xl: 1536px // Ekstra store skærme

// Eksempel på brug
<div className="
  w-full         // Mobil (default)
  sm:w-1/2      // Tablet
  lg:w-1/3      // Desktop
">
  Responsivt element
</div>`}
        language="javascript"
      />

      <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4 bg-blue-500 text-white rounded mx-auto text-center">
          Prøv at ændre vinduets størrelse
        </div>
      </div>

      <h2 className="text-base">Responsive Navigation</h2>
      <p className="text-xs mb-4">
        Et almindeligt eksempel på responsivt design er en mobil menu der bliver
        til en desktop navigation:
      </p>

      <CodeBlock
        code={`<nav className="bg-white p-4">
  {/* Container */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    {/* Logo + Mobil Menu Knap */}
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold">Logo</span>
      <button className="md:hidden">Menu</button>
    </div>
    
    {/* Navigation Links */}
    <div className="hidden md:flex space-x-4">
      <a href="#">Hjem</a>
      <a href="#">Om</a>
      <a href="#">Kontakt</a>
    </div>
  </div>
</nav>`}
        language="jsx"
      />

      <div className="my-6">
        <nav className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">Logo</span>
              <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                Menu
              </button>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                Hjem
              </a>
              <a href="#" className="hover:text-blue-500">
                Om
              </a>
              <a href="#" className="hover:text-blue-500">
                Kontakt
              </a>
            </div>
          </div>
        </nav>
      </div>

      <h2 className="text-base">Responsive Grid Layout</h2>
      <p className="text-xs mb-4">
        Tilpas dit grid layout til forskellige skærmstørrelser:
      </p>

      <CodeBlock
        code={`<div className="grid 
  grid-cols-1    // 1 kolonne på mobil
  sm:grid-cols-2 // 2 kolonner på tablet
  lg:grid-cols-4 // 4 kolonner på desktop
  gap-4
">
  <div>Kort 1</div>
  <div>Kort 2</div>
  <div>Kort 3</div>
  <div>Kort 4</div>
</div>`}
        language="jsx"
      />

      <div className="my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-500 text-white rounded text-center">
            Kort 1
          </div>
          <div className="p-4 bg-blue-500 text-white rounded text-center">
            Kort 2
          </div>
          <div className="p-4 bg-blue-500 text-white rounded text-center">
            Kort 3
          </div>
          <div className="p-4 bg-blue-500 text-white rounded text-center">
            Kort 4
          </div>
        </div>
      </div>

      <h2 className="text-base">Responsive Padding & Margin</h2>
      <p className="text-xs mb-4">Juster spacing baseret på skærmstørrelse:</p>

      <CodeBlock
        code={`<div className="
  p-4          // Lille padding på mobil
  sm:p-6       // Mellem padding på tablet
  lg:p-8       // Stor padding på desktop
  
  mx-4         // Lille margin på mobil
  sm:mx-8      // Mellem margin på tablet
  lg:mx-16     // Stor margin på desktop
">`}
        language="jsx"
      />

      <div className="my-6">
        <div className="p-4 sm:p-6 lg:p-8 mx-4 sm:mx-8 lg:mx-16 bg-green-500 text-white rounded text-center">
          Responsiv Padding & Margin
        </div>
      </div>

      <h2 className="text-base">Responsive Typografi</h2>
      <p className="text-xs mb-4">
        Tilpas tekststørrelse og spacing til forskellige skærmstørrelser:
      </p>

      <CodeBlock
        code={`<h1 className="
  text-2xl     // Basis størrelse
  sm:text-3xl  // Større på tablet
  lg:text-4xl  // Størst på desktop
  
  leading-tight      // Mindre line-height
  sm:leading-normal  // Normal line-height
  lg:leading-relaxed // Større line-height
">
  Responsiv Overskrift
</h1>`}
        language="jsx"
      />

      <div className="my-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight sm:leading-normal lg:leading-relaxed font-bold text-center">
          Responsiv Overskrift
        </h3>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Best Practices</h3>
        <ul className="text-xs space-y-2">
          <li>Start altid med mobile design først</li>
          <li>Brug færrest mulige breakpoints for bedre vedligeholdelse</li>
          <li>Test grundigt på forskellige enheder og orientationer</li>
          <li>Overvej indholdsrækkefølge på tværs af breakpoints</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">
          Tips til Responsive Design
        </h3>
        <ul className="text-xs space-y-2">
          <li>
            Brug browserens DevTools til at teste forskellige skærmstørrelser
          </li>
          <li>Husk at teste touch-interaktioner på mobile enheder</li>
          <li>Overvej performance på forskellige netværkshastigheder</li>
          <li>Brug CSS Grid og Flexbox for fleksible layouts</li>
        </ul>
      </div>
    </div>
  );
}
