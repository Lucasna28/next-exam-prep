import CodeBlock from '@/components/CodeBlock';

export default function AccessibilityPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Accessibility (a11y) i Next.js</h1>
      <p className="text-xs">
        Tilgængelighed (a11y) handler om at gøre webapplikationer brugbare for alle brugere, herunder personer med forskellige former for handicap. I denne guide ser vi på, hvordan du kan forbedre tilgængeligheden af din Next.js applikation ved at bruge forskellige metoder og værktøjer.
      </p>

      <h2 className="text-base">Hvad er Accessibility (a11y)?</h2>
      <p className="text-xs">
        Tilgængelighed (ofte forkortet a11y) refererer til praksissen med at gøre websteder og applikationer tilgængelige for personer med handicap, såsom syns- eller hørenedsættelse, motoriske vanskeligheder eller kognitive udfordringer.
      </p>

      <h3 className="text-base">Vigtige a11y-principper</h3>
      <ul className="text-xs">
        <li><strong>Perceptible:</strong> Information og brugergrænseflader skal være tilgængelige for alle sansesystemer (f.eks. syn, hørelse).</li>
        <li><strong>Operable:</strong> Alle funktioner skal være betjenbare af alle brugere, herunder dem med motoriske begrænsninger.</li>
        <li><strong>Understandable:</strong> Indhold og brugergrænseflader skal være nemme at forstå.</li>
        <li><strong>Robust:</strong> Indholdet skal være kompatibelt med forskellige brugerteknologier, såsom skærmlæsere.</li>
      </ul>

      <h3 className="text-base">Hvordan forbedre a11y i Next.js</h3>
      <p className="text-xs">
        Der er flere måder at forbedre tilgængeligheden på i en Next.js applikation:
      </p>
      <ul className="text-xs">
        <li><strong>Brug semantisk HTML:</strong> Brug semantiske HTML-tags som <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, og <code>&lt;main&gt;</code> for at hjælpe skærmlæsere med at forstå strukturen af din applikation.</li>
        <li><strong>Alt-tekst til billeder:</strong> Sørg for at alle billeder har en beskrivende alt-tekst, så de kan forstås af brugere med synshandicap.</li>
        <li><strong>Keyboard-navigering:</strong> Sørg for at din applikation kan navigeres via tastatur, især for personer med motoriske begrænsninger.</li>
        <li><strong>Fokusindikatorer:</strong> Sørg for at der er tydelige fokusindikatorer på interaktive elementer som links og knapper.</li>
        <li><strong>Skærmlæser-venlig:</strong> Brug ARIA (Accessible Rich Internet Applications) attributter, f.eks. <code>aria-label</code> og <code>aria-hidden</code>, for at gøre din applikation mere tilgængelig for skærmlæsere.</li>
      </ul>

      <h3 className="text-base">Eksempel på Semantisk HTML i Next.js</h3>
      <CodeBlock
        code={`// Eksempel på semantisk HTML i Next.js

export default function HomePage() {
  return (
    <main>
      <header>
        <h1>Velkommen til vores hjemmeside</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#section1">Sektion 1</a></li>
          <li><a href="#section2">Sektion 2</a></li>
        </ul>
      </nav>
      <section id="section1">
        <h2>Sektion 1</h2>
        <p>Indhold i sektion 1...</p>
      </section>
      <section id="section2">
        <h2>Sektion 2</h2>
        <p>Indhold i sektion 2...</p>
      </section>
      <footer>
        <p>&copy; 2025 Virksomhedens navn</p>
      </footer>
    </main>
  );
}`}
        language="javascript"
      />

      <h3 className="text-base">Brug af ARIA Attributter</h3>
      <p className="text-xs">
        ARIA (Accessible Rich Internet Applications) er en samling af attributter, der kan bruges på HTML-elementer for at forbedre tilgængeligheden, især for brugere med skærmlæsere. Her er et eksempel på brug af <code>aria-label</code> for at give en beskrivelse af et billede:
      </p>
      <CodeBlock
        code={`<button aria-label="Luk modal vindue">
  <svg>...</svg>
</button>`}
        language="html"
      />

      <h2 className="text-base">Værktøjer til Test af Tilgængelighed</h2>
      <p className="text-xs">
        Der er flere værktøjer, som kan hjælpe med at teste og forbedre tilgængeligheden af din applikation:
      </p>
      <ul className="text-xs">
        <li><strong>Lighthouse:</strong> Et open-source værktøj til at teste web-tilgængelighed, som kan bruges i Chrome Developer Tools.</li>
        <li><strong>axe:</strong> En browser extension, der hjælper med at finde og rette tilgængelighedsfejl i din applikation.</li>
        <li><strong>WAVE:</strong> Et web-baseret værktøj, der viser tilgængelighedsfejl direkte på din webside.</li>
      </ul>

      <h2 className="text-base">Fordele ved at Implementere Tilgængelighed</h2>
      <ul className="text-xs">
        <li><strong>Inklusion:</strong> Ved at implementere a11y-teknikker gør du din applikation tilgængelig for et bredere publikum, herunder personer med handicap.</li>
        <li><strong>Bedre brugeroplevelse:</strong> Mange a11y-forbedringer, som f.eks. tastatur-navigering og tydelige fokusindikatorer, kan også forbedre oplevelsen for alle brugere.</li>
        <li><strong>SEO-fordele:</strong> God tilgængelighed kan også forbedre SEO, da semantisk HTML og korrekt brug af ARIA kan hjælpe søgemaskiner med at indeksere din applikation bedre.</li>
      </ul>
    </div>
  );
}
