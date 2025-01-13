import CodeBlock from "@/components/CodeBlock";

export default function CustomHooksPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Custom Hooks i React</h1>

      <p>
        Custom hooks er funktioner der genbruger logik mellem komponenter. De
        starter altid med &quot;use&quot; og kan bruge andre hooks.
      </p>

      <h2>Eksempel på Custom Hook</h2>
      <CodeBlock
        language="typescript"
        code={`function useLocalStorage<T>(key: string, initialValue: T) {
  // State til at holde vores værdi
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Funktion til at gemme både i state og localStorage
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}`}
      />

      <h2>Brug af Custom Hook</h2>
      <CodeBlock
        language="typescript"
        code={`function App() {
  const [name, setName] = useLocalStorage(&quot;name&quot;, &quot;John&quot;);

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}`}
      />

      <h3>Best Practices</h3>
      <ul>
        <li>Start altid med use prefix</li>
        <li>Hold hooks simple og fokuserede</li>
        <li>Brug TypeScript for type safety</li>
        <li>Dokumentér input og output</li>
      </ul>
    </div>
  );
}
