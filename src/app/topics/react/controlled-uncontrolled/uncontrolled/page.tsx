import CodeBlock from "@/components/CodeBlock";

export default function UncontrolledComponentsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Uncontrolled Components</h1>
      <p className="text-xs">
        En Uncontrolled Component bruger refs til at læse værdien direkte fra DOM, i stedet for at styre den via state. Dette kan være nyttigt, når man vil minimere re-renders eller integrere med tredjepartsbiblioteker.
      </p>

      <h2 className="text-base">Eksempel: Uncontrolled Component</h2>
      <CodeBlock
        code={`import { useRef } from "react";

export default function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(\`Indtastet tekst: \${inputRef.current.value}\`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Indtast tekst" />
      <button onClick={handleSubmit}>Vis tekst</button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele</h2>
      <ul className="text-xs">
        <li><strong>Enkelhed:</strong> Mindre opsætning uden state.</li>
        <li><strong>Performance:</strong> Reducerer unødvendige renders.</li>
        <li><strong>Integration:</strong> Bedre kompatibilitet med tredjepartsbiblioteker.</li>
      </ul>
    </div>
  );
}
