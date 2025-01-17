import CodeBlock from '@/components/CodeBlock';

export default function PolyfillsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Polyfills i Next.js</h1>
      <p className="text-xs">
        Polyfills er scripts, der giver support for funktioner og APIs, der ikke er tilgængelige i ældre browsere. De bruges til at sikre, at moderne JavaScript-funktioner fungerer i ældre browserversioner, som ikke understøtter dem natively.
      </p>

      <h2 className="text-base">Hvad er Polyfills?</h2>
      <p className="text-xs">
        Polyfills er små stykker kode, der efterligner moderne webfunktioner i ældre browsere. For eksempel, hvis en browser ikke understøtter en ny JavaScript-funktion som <code>Array.prototype.includes()</code>, kan en polyfill implementere denne funktionalitet i browseren.
      </p>

      <h3 className="text-base">Hvordan Polyfills fungerer</h3>
      <p className="text-xs">
        Når en browser ikke understøtter en bestemt funktion, kan en polyfill automatisk indsættes i koden, der implementerer denne funktion for den pågældende browser. Polyfills bliver ofte brugt til at implementere funktioner som <code>Promise</code>, <code>fetch</code> og <code>Object.assign()</code>, som måske ikke er tilgængelige i ældre versioner af Internet Explorer eller ældre versioner af Safari.
      </p>

      <h3 className="text-base">Polyfills i Next.js</h3>
      <p className="text-xs">
        I Next.js kan du implementere polyfills på flere måder. Du kan bruge et bibliotek som <code>core-js</code> eller <code>polyfill.io</code> til at indlæse polyfills dynamisk afhængigt af browseren. Dette sikrer, at polyfills kun indlæses i de browsere, der faktisk har brug for dem.
      </p>

      <h3 className="text-base">Eksempel på at tilføje polyfills i Next.js</h3>
      <CodeBlock
        code={`// Installér core-js med npm eller yarn
// npm install core-js

import 'core-js/stable';  // Polyfill for moderne JavaScript-funktioner
import 'regenerator-runtime/runtime';  // Polyfill for async/await

export default function HomePage() {
  return (
    <div>
      <h1>Velkommen til min webapplikation</h1>
      <p>Den understøtter alle moderne funktioner, selv på ældre browsere!</p>
    </div>
  );
}`}
        language="javascript"
      />

      <h3 className="text-base">Brug af Polyfill.io</h3>
      <p className="text-xs">
        <code>Polyfill.io</code> er en service, der automatisk leverer polyfills baseret på de funktioner, som en browser understøtter. Du kan bruge Polyfill.io ved at inkludere et script i dit HTML-dokument.
      </p>
      <CodeBlock
        code={`<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default,Promise,fetch"></script>`}
        language="html"
      />

      <h3 className="text-base">Polyfills og Bundle Size</h3>
      <p className="text-xs">
        Det er vigtigt at være opmærksom på, at polyfills kan øge størrelsen på din bundle, da de tilføjer ekstra kode til at understøtte ældre browsere. For at minimere denne effekt kan du vælge at indlæse polyfills dynamisk baseret på browserens funktioner, i stedet for at inkludere dem i hele applikationen.
      </p>

      <h3 className="text-base">Brug af Babel for Polyfills</h3>
      <p className="text-xs">
        Next.js bruger Babel til at transpile din JavaScript-kode. For at sikre, at polyfills er inkluderet i applikationen, kan du konfigurere Babel til at inkludere de nødvendige polyfills, når du bruger nyere JavaScript-syntaks.
      </p>
      <CodeBlock
        code={`// .babelrc eller babel.config.js
{
  "presets": [
    [
      "next/babel",
      {
        "corejs": 3
      }
    ]
  ]
}`}
        language="json"
      />

      <h2 className="text-base">Fordele ved Polyfills</h2>
      <ul className="text-xs">
        <li><strong>Kompatibilitet:</strong> Polyfills sikrer, at din applikation fungerer på ældre browsere, hvilket giver en bredere brugerbase.</li>
        <li><strong>Ingen funktionalitet går tabt:</strong> Ved at bruge polyfills kan du bruge moderne JavaScript-funktioner uden at bekymre dig om browserkompatibilitet.</li>
        <li><strong>Minimal impact:</strong> Polyfills kan bruges selektivt, så de kun bliver indlæst af de browsere, der har brug for dem.</li>
      </ul>

      <h2 className="text-base">Udfordringer ved Polyfills</h2>
      <ul className="text-xs">
        <li><strong>Bundle Size:</strong> Polyfills kan øge størrelsen på applikationen, da de tilføjer ekstra kode.</li>
        <li><strong>Ydeevne:</strong> Hvis polyfills ikke indlæses effektivt, kan de påvirke ydeevnen af applikationen, især i ældre browsere.</li>
        <li><strong>Kompleksitet:</strong> Det kan være nødvendigt at bruge flere polyfills for at dække et bredt udvalg af browsere, hvilket kan gøre opsætningen mere kompleks.</li>
      </ul>
    </div>
  );
}
