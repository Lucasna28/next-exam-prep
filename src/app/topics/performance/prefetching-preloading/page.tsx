import CodeBlock from "@/components/CodeBlock";

export default function PrefetchingPreloadingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Prefetching og Preloading</h1>
      <p className="text-xs">
        Prefetching og preloading er teknikker, der anvendes til at forudindlæse ressourcer som scripts, billeder og data, før de faktisk bliver nødvendige. Dette kan forbedre brugeroplevelsen ved at reducere ventetiden for brugeren, når de interagerer med applikationen.
      </p>

      <h2 className="text-base">Hvad er Prefetching?</h2>
      <p className="text-xs">
        Prefetching refererer til indlæsning af ressourcer, som brugeren muligvis får brug for i fremtiden, før de rent faktisk anmodes om dem. Dette kan inkludere scripts, billeder eller data, der er nødvendige for at fortsætte brugens interaktion med appen. Prefetching forhindrer forsinkelse, når brugeren navigerer til en ny sektion, og hjælper med at sikre, at indholdet er hurtigt tilgængeligt.
      </p>

      <h2 className="text-base">Hvad er Preloading?</h2>
      <p className="text-xs">
        Preloading er en teknik, hvor specifikke ressourcer (som scripts, stilarter eller billeder) indlæses så hurtigt som muligt, ofte før de bliver nødvendige for at sikre, at de er klar til brug. Forskellen mellem preloading og prefetching er, at preloading typisk bruges til ressourcer, der straks skal bruges, mens prefetching er mere rettet mod ressourcer, der er nødvendige på et senere tidspunkt.
      </p>

      <h2 className="text-base">Eksempel på Prefetching og Preloading i Next.js</h2>
      <CodeBlock
        code={`// Prefetching example using Link prefetch attribute in Next.js
import Link from 'next/link';

export default function MyComponent() {
  return (
    <div>
      <Link href="/about" prefetch={true}>
        Go to About Page
      </Link>
    </div>
  );
}

// Preloading example using <link> in <head> for specific resources
export default function MyComponent() {
  return (
    <>
      <head>
        <link rel="preload" href="/styles/main.css" as="style" />
        <link rel="preload" href="/scripts/main.js" as="script" />
      </head>
      <div>Content of the page</div>
    </>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Prefetching og Preloading</h2>
      <ul className="text-xs">
        <li><strong>Hurtigere navigation:</strong> Ved at indlæse nødvendige ressourcer på forhånd kan appen reagere hurtigere, når brugeren navigerer mellem sider.</li>
        <li><strong>Reduceret ventetid:</strong> Brugeren oplever færre forsinkelser, da de nødvendige ressourcer allerede er indlæst, når de interagerer med applikationen.</li>
        <li><strong>Forbedret brugeroplevelse:</strong> Forudindlæsning af ressourcer kan gøre applikationen mere responsiv og give et mere flydende brugerflow.</li>
      </ul>

      <h2 className="text-base">Next.js og Prefetching/Preloading</h2>
      <p className="text-xs">
        Next.js understøtter både prefetching og preloading. Med Next.js kan du bruge <code>Link</code>-komponenten med <code>prefetch</code>-attributten for at aktivere prefetching af sider, som brugeren måske besøger. Desuden kan du bruge <code>&lt;link rel="preload"&gt;</code> i <code>&lt;head&gt;</code> for at forudindlæse vigtige ressourcer og optimere appens ydeevne.
      </p>
    </div>
  );
}
