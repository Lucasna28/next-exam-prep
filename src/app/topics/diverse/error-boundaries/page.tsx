import CodeBlock from '@/components/CodeBlock';

export default function ErrorBoundariesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Error Boundaries i Next.js</h1>
      <p className="text-xs">
        En "Error Boundary" er en React-komponent, der fanger JavaScript-fejl i dens child-komponenter og viser en fallback UI i stedet for at bryde applikationen. Dette hjælper med at håndtere uventede fejl og forbedrer brugeroplevelsen.
      </p>

      <h2 className="text-base">Hvad er en Error Boundary?</h2>
      <p className="text-xs">
        En Error Boundary er en komponent, der implementerer <code>componentDidCatch</code> eller <code>static getDerivedStateFromError</code> metoderne. Hvis en fejl opstår i en af dens child-komponenter, fanger Error Boundary fejlen og viser et brugerdefineret fejlsignal eller en fallback UI.
      </p>

      <h3 className="text-base">Eksempel på en Error Boundary</h3>
      <p className="text-xs">
        Her er et eksempel på en simpel Error Boundary i React, som du kan bruge i din Next.js applikation:
      </p>
      <CodeBlock
        code={`import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Opdater state, så næste render viser en fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log fejl til et service
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Vis en fallback UI hvis der er en fejl
      return <h2>Noget gik galt. Prøv igen senere.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`}
        language="javascript"
      />

      <h3 className="text-base">Brug af Error Boundary i Next.js</h3>
      <p className="text-xs">
        For at bruge Error Boundary i en Next.js applikation, kan du wrappe dine komponenter med Error Boundary for at sikre, at fejl i child-komponenter ikke får applikationen til at bryde.
      </p>
      <CodeBlock
        code={`import ErrorBoundary from '@/components/ErrorBoundary';

const MyComponent = () => {
  return (
    <ErrorBoundary>
      <ComponentThatMayThrow />
    </ErrorBoundary>
  );
};`}
        language="javascript"
      />

      <h3 className="text-base">Fejl i Server-Side Rendering</h3>
      <p className="text-xs">
        I Next.js vil en Error Boundary kun fange fejl i de komponenter, der er rendere på klienten. Fejl, der opstår under server-side rendering (SSR) vil ikke blive fanget af en Error Boundary. For SSR-fejl skal du bruge Next.js' indbyggede fejlhåndtering.
      </p>

      <h2 className="text-base">Fordele ved at bruge Error Boundaries</h2>
      <ul className="text-xs">
        <li><strong>Forhindrer applikationen i at bryde:</strong> Hvis en fejl opstår i en komponent, vil Error Boundary fange den og vise en fallback UI, hvilket sikrer, at resten af applikationen fortsætter med at fungere.</li>
        <li><strong>Forbedret brugeroplevelse:</strong> Brugeren ser ikke en blank side eller en fejlmeddelelse, men får i stedet en venlig meddelelse om, at noget er gået galt.</li>
        <li><strong>Bedre fejlsporing:</strong> Ved at logge fejl i <code>componentDidCatch</code>, kan du bedre spore fejl og få indsigt i problemer i din applikation.</li>
      </ul>

      <h2 className="text-base">Error Boundaries og Asynkrone Fejl</h2>
      <p className="text-xs">
        Error Boundaries kan ikke fange asynkrone fejl, som opstår ved f.eks. API-kald eller setTimeout. Du kan dog bruge <code>try/catch</code> i asynkrone funktioner og andre strategier som at vise fallback UI mens data indlæses.
      </p>

      <h2 className="text-base">Next.js Fejlhåndtering</h2>
      <p className="text-xs">
        For at håndtere fejl under server-side rendering i Next.js kan du bruge Next.js' indbyggede <code>getServerSideProps</code> fejlhåndtering og vise en fejlmeddelelse, hvis der opstår problemer med at hente data.
      </p>
      <CodeBlock
        code={`export async function getServerSideProps() {
  try {
    // Hent data fra API
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    // Håndter fejl og vis en fejlmeddelelse
    return { props: { error: 'Kunne ikke hente data' } };
  }
}`}
        language="javascript"
      />

    </div>
  );
}
