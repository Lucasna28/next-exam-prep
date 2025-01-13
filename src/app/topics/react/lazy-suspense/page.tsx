import CodeBlock from "@/components/CodeBlock";

export default function LazySuspensePage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>React.lazy og Suspense</h1>

      <p>
        React.lazy og Suspense muliggør code-splitting og lazy loading af
        komponenter, hvilket kan forbedre den initielle indlæsningstid
        betydeligt.
      </p>

      <h2>Lazy Loading af Komponenter</h2>
      <CodeBlock
        language="typescript"
        code={`// I stedet for direkte import
// import HeavyComponent from './HeavyComponent';

// Brug lazy loading
const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`}
      />

      <h2>Route-baseret Code Splitting</h2>
      <CodeBlock
        language="typescript"
        code={`// I din router konfiguration
const routes = [
  {
    path: '/dashboard',
    component: React.lazy(() => 
      import('./pages/Dashboard')
    )
  },
  {
    path: '/profile',
    component: React.lazy(() => 
      import('./pages/Profile')
    )
  }
];

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Router>
    </Suspense>
  );
}`}
      />

      <h2>Avanceret Loading States</h2>
      <CodeBlock
        language="typescript"
        code={`function LoadingFallback() {
  return (
    <div className="loading-state">
      <Spinner />
      <p>Indlæser komponent...</p>
    </div>
  );
}

function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<p>Noget gik galt...</p>}>
      {children}
    </ErrorBoundary>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}`}
      />

      <h2>Fordele ved Lazy Loading</h2>
      <ul>
        <li>Reduceret initial bundle størrelse</li>
        <li>Hurtigere første indlæsning</li>
        <li>Bedre ressourceudnyttelse</li>
        <li>Forbedret brugeroplevelse</li>
      </ul>
    </div>
  );
}
