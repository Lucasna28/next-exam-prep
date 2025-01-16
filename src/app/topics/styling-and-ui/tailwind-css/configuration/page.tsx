import CodeBlock from "@/components/CodeBlock";

export default function TailwindConfigurationPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Custom Konfiguration i Tailwind CSS</h1>
      <p className="text-xs mb-6">
        Tailwind CSS er yderst konfigurerbart gennem tailwind.config.js filen.
        Her kan du tilpasse alt fra farver og spacing til plugins og variants.
      </p>

      <h2 className="text-base">Basis Konfiguration</h2>
      <p className="text-xs mb-4">
        Start med en grundlæggende konfigurationsfil:
      </p>

      <CodeBlock
        code={`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Dine customizations her
    },
  },
  plugins: [],
}`}
        language="javascript"
      />

      <h2 className="text-base">Custom Farver</h2>
      <p className="text-xs mb-4">
        Tilføj dine egne brand farver og farvepaletter:
      </p>

      <CodeBlock
        code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          light: '#FF6B6B',
          DEFAULT: '#4ECDC4',
          dark: '#45B7AF',
        },
        'accent': {
          100: '#E6F6FF',
          200: '#BAE3FF',
          300: '#7CC4FA',
          400: '#47A3F3',
          500: '#2186EB',
          600: '#0967D2',
          700: '#0552B5',
          800: '#03449E',
          900: '#01337D',
        },
      },
    },
  },
}`}
        language="javascript"
      />

      <div className="my-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-[#FF6B6B] text-white rounded text-center">
            Brand Light
          </div>
          <div className="p-4 bg-[#4ECDC4] text-white rounded text-center">
            Brand Default
          </div>
          <div className="p-4 bg-[#45B7AF] text-white rounded text-center">
            Brand Dark
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-[#BAE3FF] text-black rounded text-center">
            Accent 200
          </div>
          <div className="p-4 bg-[#2186EB] text-white rounded text-center">
            Accent 500
          </div>
          <div className="p-4 bg-[#03449E] text-white rounded text-center">
            Accent 800
          </div>
        </div>
      </div>

      <h2 className="text-base">Custom Spacing</h2>
      <p className="text-xs mb-4">Definer dit eget spacing system:</p>

      <CodeBlock
        code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
      },
    },
  },
}`}
        language="javascript"
      />

      <div className="my-6 space-y-4">
        <div className="p-[8px] bg-blue-100 dark:bg-blue-900 rounded text-center">
          sm (8px)
        </div>
        <div className="p-[16px] bg-blue-200 dark:bg-blue-800 rounded text-center">
          md (16px)
        </div>
        <div className="p-[24px] bg-blue-300 dark:bg-blue-700 rounded text-center">
          lg (24px)
        </div>
        <div className="p-[32px] bg-blue-400 dark:bg-blue-600 rounded text-center">
          xl (32px)
        </div>
      </div>

      <h2 className="text-base">Custom Breakpoints</h2>
      <p className="text-xs mb-4">
        Tilpas responsive breakpoints til dit projekt:
      </p>

      <CodeBlock
        code={`// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'wide': '1536px',
    },
  },
}

// Brug i din kode:
<div className="
  w-full
  tablet:w-2/3
  laptop:w-1/2
  desktop:w-1/3
  wide:w-1/4
">`}
        language="javascript"
      />

      <h2 className="text-base">Custom Komponenter med @apply</h2>
      <p className="text-xs mb-4">
        Genbrug utility klasser i dine komponenter:
      </p>

      <CodeBlock
        code={`/* styles/components.css */
.btn {
  @apply px-4 py-2 rounded font-semibold transition-colors;
}

.btn-primary {
  @apply bg-blue-500 text-white hover:bg-blue-600;
}

.btn-secondary {
  @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
}

.card {
  @apply p-6 rounded-lg shadow-md bg-white dark:bg-gray-800;
}`}
        language="css"
      />

      <h2 className="text-base">Plugins & Variants</h2>
      <p className="text-xs mb-4">
        Udvid Tailwind med plugins og custom variants:
      </p>

      <CodeBlock
        code={`// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom plugin eksempel
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  
  // Tilføj variants
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
}`}
        language="javascript"
      />

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Best Practices</h3>
        <ul className="text-xs space-y-2">
          <li>
            Hold konfigurationen DRY ved at bruge variabler og reusable værdier
          </li>
          <li>Dokumentér custom utilities og deres brug med kommentarer</li>
          <li>Brug extend i stedet for at overskrive eksisterende styles</li>
          <li>Organiser relaterede customizations sammen i logiske grupper</li>
          <li>Test dine customizations på tværs af forskellige komponenter</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Tips til Konfiguration</h3>
        <ul className="text-xs space-y-2">
          <li>
            Brug theme() funktionen i dine styles for at referere til
            konfigurationsværdier
          </li>
          <li>Hold styr på bundle size når du tilføjer nye utilities</li>
          <li>
            Overvej at dele konfigurationen mellem projekter via et npm package
          </li>
          <li>
            Brug CSS variabler for dynamiske værdier der skal ændres i runtime
          </li>
          <li>Udnyt Tailwinds JIT compiler for bedre udvikleroplevelse</li>
        </ul>
      </div>
    </div>
  );
}
