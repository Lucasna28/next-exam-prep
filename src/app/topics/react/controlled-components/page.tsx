import CodeBlock from "@/components/CodeBlock";

export default function ControlledComponentsPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Controlled vs Uncontrolled Components</h1>

      <p>
        I React kan form elementer håndteres på to måder: controlled eller
        uncontrolled. Controlled components giver mere kontrol og validering i
        realtid.
      </p>

      <h2>Controlled Component</h2>
      <CodeBlock
        language="typescript"
        code={`function ControlledForm() {
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Controlled input"
      />
      <button type="submit">Send</button>
    </form>
  );
}`}
      />

      <h2>Uncontrolled Component</h2>
      <CodeBlock
        language="typescript"
        code={`function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", inputRef.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Uncontrolled input"
      />
      <button type="submit">Send</button>
    </form>
  );
}`}
      />

      <h2>Fordele ved Controlled Components</h2>
      <ul>
        <li>Øjeblikkelig validering</li>
        <li>Betinget rendering</li>
        <li>Form data synkronisering</li>
        <li>Dynamisk input formatering</li>
      </ul>
    </div>
  );
}
