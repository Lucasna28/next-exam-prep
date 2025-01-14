import CodeBlock from "@/components/CodeBlock";

export default function UseStatePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">useState Hook</h1>
      <p className="text-xs">
        useState er den mest grundlæggende hook i React til at håndtere state i
        funktionelle komponenter. Den giver mulighed for at tilføje lokal state
        til enhver funktionel komponent.
      </p>

      <h2 className="text-base">Grundlæggende Brug</h2>
      <CodeBlock
        language="typescript"
        code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Du har klikket {count} gange</p>
      <button onClick={() => setCount(count + 1)}>
        Klik mig
      </button>
    </div>
  );
}`}
      />

      <h2 className="text-base">State med forskellige typer</h2>
      <CodeBlock
        language="typescript"
        code={`// Number state
const [count, setCount] = useState(0);

// String state
const [name, setName] = useState('');

// Boolean state
const [isOpen, setIsOpen] = useState(false);

// Object state
const [user, setUser] = useState({ name: '', age: 0 });

// Array state
const [items, setItems] = useState([]);`}
      />

      <h2 className="text-base">Lazy Initial State</h2>
      <p className="text-xs">
        Hvis din initielle state kræver tung beregning, kan du sende en funktion
        i stedet:
      </p>
      <CodeBlock
        language="typescript"
        code={`const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});`}
      />

      <h2 className="text-base">Best Practices</h2>
      <ul className="text-xs">
        <li>Brug beskrivende navne for state og setter</li>
        <li>Hold state så simpel som mulig</li>
        <li>Undgå redundant state</li>
        <li>Brug TypeScript for type-sikkerhed</li>
      </ul>
    </div>
  );
}
