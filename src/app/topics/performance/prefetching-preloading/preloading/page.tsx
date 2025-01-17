import CodeBlock from "@/components/CodeBlock";

export default function PreloadingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Preloading</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan optimere indlæsningen af kritiske ressourcer ved at
          bruge preloading strategier.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">HTML Preloading</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Brug link tags i document head til at preloade kritiske ressourcer.
          </p>
          <CodeBlock
            code={`// I din Next.js app/layout.tsx eller lignende
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        {/* Preload kritiske fonts */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload kritiske stylesheets */}
        <link
          rel="preload"
          href="/styles/critical.css"
          as="style"
        />
        
        {/* Preload hero image */}
        <link
          rel="preload"
          href="/images/hero.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Resource Hints</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Forskellige typer af resource hints til forskellige formål.
          </p>
          <CodeBlock
            code={`<head>
  {/* Preload - Højeste prioritet, loader med det samme */}
  <link rel="preload" href="/critical.css" as="style" />

  {/* Prefetch - Lavere prioritet, loader i baggrunden */}
  <link rel="prefetch" href="/next-page.js" />

  {/* Preconnect - Etabler tidlig forbindelse */}
  <link rel="preconnect" href="https://api.example.com" />

  {/* DNS-Prefetch - Resolver DNS tidligt */}
  <link rel="dns-prefetch" href="https://api.example.com" />
</head>`}
            language="html"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Dynamisk Preloading</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Implementer dynamisk preloading baseret på brugerinteraktion.
          </p>
          <CodeBlock
            code={`// Dynamisk tilføj preload links
const preloadResource = (url: string, as: string) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = url
  link.as = as
  document.head.appendChild(link)
}

// Eksempel på brug
const handleMouseEnter = () => {
  // Preload billede når musen hover over en knap
  preloadResource('/images/large-image.jpg', 'image')
}

// Preload næste side's ressourcer
const preloadNextPageResources = () => {
  preloadResource('/next-page.js', 'script')
  preloadResource('/next-page.css', 'style')
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Prioritering af Ressourcer
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Kritiske Ressourcer</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Fonts der bruges above the fold</li>
                <li>Hero images og kritiske stylesheets</li>
                <li>JavaScript der er nødvendigt for interaktivitet</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Sekundære Ressourcer</h3>
              <ul className="list-disc pl-4 text-xs text-gray-600 dark:text-gray-400">
                <li>Billeder under the fold</li>
                <li>Ikke-kritiske stylesheets</li>
                <li>Analytics og tredjepartsscripts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Preload kun absolut nødvendige ressourcer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Brug korrekte as-attributter for optimal prioritering
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Undgå at preloade for mange ressourcer
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Test effekten af preloading på forskellige enheder
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
