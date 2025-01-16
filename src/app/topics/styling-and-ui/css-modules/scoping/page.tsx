import CodeBlock from "@/components/CodeBlock";

export default function CSSModulesScopingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">CSS Modules: Lokal Scoping</h1>
      <p className="text-xs">
        CSS Modules er en populær teknik til at skrive modulær og vedligeholdbar
        CSS i React-applikationer. Den største fordel er, at alle klassenavne er
        lokalt scopet som standard.
      </p>

      <h2 className="text-base">Grundlæggende Brug</h2>
      <p className="text-xs">Først opretter du en .module.css fil:</p>
      <CodeBlock
        code={`/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  color: white;
}

.primary {
  background-color: #3b82f6;
}

.secondary {
  background-color: #6b7280;
}`}
        language="css"
      />

      <p className="text-xs">
        Derefter importerer og bruger du stilene i din komponent:
      </p>
      <CodeBlock
        code={`import styles from './Button.module.css';

export default function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}`}
        language="jsx"
      />

      <h2 className="text-base">Fordele ved CSS Modules</h2>
      <ul className="text-xs">
        <li>Lokalt scopede klassenavne - ingen navnekonflikter</li>
        <li>Bedre vedligeholdelse og fejlfinding</li>
        <li>TypeScript understøttelse</li>
        <li>Fungerer med eksisterende CSS</li>
      </ul>

      <h2 className="text-base">Best Practices</h2>
      <ul className="text-xs">
        <li>Brug beskrivende klassenavne</li>
        <li>Hold modulerne små og fokuserede</li>
        <li>Undgå global styling når muligt</li>
        <li>Brug composition for genbrug af styles</li>
      </ul>
    </div>
  );
}
