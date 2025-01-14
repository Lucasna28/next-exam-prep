import CodeBlock from "@/components/CodeBlock";

export default function StateUpdatesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">State Updates i React</h1>
      <p className="text-xs">
        Forståelse af hvordan React opdaterer state er afgørende for at bygge
        pålidelige applikationer. State opdateringer er asynkrone og batched for
        bedre performance.
      </p>

      <h2 className="text-base">Funktionel Opdatering</h2>
      <CodeBlock
        language="typescript"
        code={`// Ikke optimal måde - baseret på forældet state
setCount(count + 1);

// Bedre måde - bruger funktionel opdatering
setCount(prevCount => prevCount + 1);

// Flere opdateringer efter hinanden
function handleClick() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}`}
      />

      <h2 className="text-base">Object State Updates</h2>
      <CodeBlock
        language="typescript"
        code={`const [user, setUser] = useState({ name: 'John', age: 25 });

// Forkert måde - muterer state direkte
user.age = 26; // ❌ Gør ikke dette!

// Korrekt måde - opretter ny reference
setUser(prevUser => ({
  ...prevUser,
  age: 26
}));`}
      />

      <h2 className="text-base">Array State Updates</h2>
      <CodeBlock
        language="typescript"
        code={`const [items, setItems] = useState(['a', 'b', 'c']);

// Tilføj item
setItems(prev => [...prev, 'new item']);

// Fjern item
setItems(prev => prev.filter(item => item !== 'b'));

// Opdater specifikt item
setItems(prev => prev.map(item => 
  item === 'b' ? 'updated b' : item
));`}
      />

      <h2 className="text-base">Vigtige Pointer</h2>
      <ul className="text-xs">
        <li>State opdateringer er asynkrone</li>
        <li>Brug funktionel opdatering for pålidelige resultater</li>
        <li>Undgå at mutere state direkte</li>
        <li>React batcher state opdateringer for performance</li>
      </ul>
    </div>
  );
}
