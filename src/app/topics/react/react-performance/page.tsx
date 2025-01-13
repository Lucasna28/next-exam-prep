import CodeBlock from "@/components/CodeBlock";

export default function ReactPerformancePage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>React Performance Optimering</h1>

      <p>
        React tilbyder flere værktøjer til at optimere ydeevnen i din
        applikation. Her er de vigtigste teknikker.
      </p>

      <h2>React.memo</h2>
      <CodeBlock
        language="typescript"
        code={`// Uden memo - komponenten re-renderes ved hver parent opdatering
function ExpensiveComponent({ data }: { data: string }) {
  return <div>{data}</div>;
}

// Med memo - komponenten re-renderes kun når props ændres
const MemoizedComponent = React.memo(function ExpensiveComponent({ 
  data 
}: { 
  data: string 
}) {
  return <div>{data}</div>;
});`}
      />

      <h2>useMemo Hook</h2>
      <CodeBlock
        language="typescript"
        code={`function SearchResults({ items, query }: Props) {
  // Memoizer det filtrerede resultat
  const filteredItems = useMemo(() => 
    items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    ),
    [items, query] // Kun genberegn når items eller query ændres
  );

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}
      />

      <h2>useCallback Hook</h2>
      <CodeBlock
        language="typescript"
        code={`function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoizer callback funktionen
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Tom dependency array da vi bruger funktionel opdatering

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}`}
      />

      <h2>Performance Best Practices</h2>
      <ul>
        <li>Brug React.memo til at undgå unødvendige re-renders</li>
        <li>Optimer tunge beregninger med useMemo</li>
        <li>Memoizer callbacks med useCallback</li>
        <li>Hold state så lokalt som muligt</li>
        <li>Undgå prop drilling med Context eller state management</li>
      </ul>
    </div>
  );
}
