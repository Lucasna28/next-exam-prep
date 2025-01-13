import CodeBlock from "@/components/CodeBlock";

export default function PropsAndStatePage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Props & State i React</h1>

      <h2>Props (Properties)</h2>
      <p>
        Props er data der sendes fra en forælderkomponent til en barnkomponent.
        De er read-only og kan ikke ændres af barnkomponenten.
      </p>

      <CodeBlock
        language="typescript"
        code={`// Parent Component
function Parent() {
  return <Child name="John" age={25} />;
}

// Child Component
interface ChildProps {
  name: string;
  age: number;
}

function Child({ name, age }: ChildProps) {
  return <p>Hello, {name}! You are {age} years old.</p>;
}`}
      />

      <h2>State</h2>
      <p>
        State er lokal, muterbar data i en komponent. Når state ændres,
        re-renderes komponenten automatisk.
      </p>

      <CodeBlock
        language="typescript"
        code={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
      />

      <h3>Vigtige Forskelle</h3>
      <ul>
        <li>Props er read-only, State kan ændres</li>
        <li>Props kontrolleres af parent, State af komponenten selv</li>
        <li>
          Props opdateres når parent re-renderes, State når setState kaldes
        </li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Hold state så lokalt som muligt</li>
        <li>Undgå at duplikere data i state</li>
        <li>Brug TypeScript interfaces for props</li>
        <li>Overvej om data skal være props eller state</li>
      </ul>
    </div>
  );
}
