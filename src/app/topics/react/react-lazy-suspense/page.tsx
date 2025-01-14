import CodeBlock from "@/components/CodeBlock";

export default function ReactLazySuspensePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">React.lazy og Suspense i React</h1>
      <p className="text-xs">
        React.lazy og Suspense bruges til at implementere lazy loading af komponenter, hvilket kan forbedre performance ved kun at loade komponenter, når de er nødvendige. Det reducerer initial loading tid og sparer ressourcer.
      </p>

      <h2 className="text-base">Eksempel: React.lazy og Suspense</h2>
      <CodeBlock
        code={`import React, { Suspense } from 'react';

// Lazy load af en komponent
const LazyComponent = React.lazy(() => import('./LazyComponent'));

export default function App() {
  return (
    <div>
      <h1>Velkommen til min app!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan fungerer React.lazy og Suspense?</h2>
      <p className="text-xs">
        `React.lazy` gør det muligt at dynamisk importere komponenter, hvilket betyder, at komponenten først bliver hentet, når den skal bruges. `Suspense` bruges til at vise en fallback-komponent (som f.eks. en loading spinner), mens den lazy-loadede komponent hentes.
      </p>

      <h2 className="text-base">Fordele ved React.lazy og Suspense</h2>
      <ul className="text-xs">
        <li><strong>Forbedret Performance:</strong> Reducerer initial loading tid ved kun at loade komponenter, når de er nødvendige.</li>
        <li><strong>Dynamisk Loading:</strong> Komponenter bliver kun hentet, når de skal bruges, hvilket sparer båndbredde og ressourcer.</li>
        <li><strong>Forenklet kodebase:</strong> Gør det nemt at håndtere kode-splitning uden at skulle konfigurere Webpack.</li>
      </ul>
    </div>
  );
}
