import CodeBlock from "@/components/CodeBlock";

export default function ErrorBoundariesPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Error Boundaries i React</h1>

      <p>
        Error Boundaries er komponenter der fanger JavaScript fejl hvor som
        helst i deres child komponent træ og viser en fallback UI i stedet for
        at crashe.
      </p>

      <h2>Implementering af Error Boundary</h2>
      <CodeBlock
        language="typescript"
        code={`class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log fejlen til en fejlrapporteringstjeneste
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Noget gik galt.</h1>;
    }

    return this.props.children;
  }
}`}
      />

      <h2>Brug af Error Boundary</h2>
      <CodeBlock
        language="typescript"
        code={`function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}`}
      />

      <h2>Best Practices</h2>
      <ul>
        <li>Placer Error Boundaries strategisk i app hierarkiet</li>
        <li>Vis brugervenlige fejlmeddelelser</li>
        <li>Log fejl til en fejlrapporteringstjeneste</li>
        <li>Giv mulighed for at genstarte/genindlæse appen</li>
      </ul>
    </div>
  );
}
