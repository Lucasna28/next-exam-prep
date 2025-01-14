import CodeBlock from "@/components/CodeBlock";

export default function StatePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">State i React</h1>
      <p className="text-xs">
        State er en af de vigtigste koncepter i React. Det er data der kan ændre
        sig over tid, og når state ændres, opdaterer React automatisk
        brugergrænsefladen.
      </p>

      <h2 className="text-base">Hvad er State?</h2>
      <ul className="text-xs">
        <li>Lokal data i en komponent der kan ændre sig</li>
        <li>Trigger re-rendering når den opdateres</li>
        <li>Kan være simple værdier eller komplekse objekter</li>
        <li>Håndteres med hooks i funktionelle komponenter</li>
      </ul>

      <h2 className="text-base">Simpelt Eksempel</h2>
      <CodeBlock
        language="typescript"
        code={`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Antal klik: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Klik mig
      </button>
    </div>
  );
}`}
      />

      <h2 className="text-base">Typer af State</h2>
      <div className="text-xs space-y-2">
        <div>
          <strong>1. Lokal State:</strong>
          <p>
            State der kun bruges i én komponent. Håndteres med useState hook.
          </p>
        </div>

        <div>
          <strong>2. Delt State:</strong>
          <p>
            State der deles mellem komponenter. Kan løftes op til nærmeste
            fælles forælder.
          </p>
        </div>

        <div>
          <strong>3. Global State:</strong>
          <p>
            State der er tilgængelig i hele appen. Håndteres ofte med Context
            eller state management libraries.
          </p>
        </div>
      </div>

      <h2 className="text-base">State vs Props</h2>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <strong>State</strong>
          <ul className="list-disc list-inside">
            <li>Kan ændres</li>
            <li>Kontrolleres af komponenten</li>
            <li>Asynkrone opdateringer</li>
          </ul>
        </div>
        <div>
          <strong>Props</strong>
          <ul className="list-disc list-inside">
            <li>Read-only</li>
            <li>Kontrolleres af parent</li>
            <li>Synkrone værdier</li>
          </ul>
        </div>
      </div>

      <h2 className="text-base">Best Practices</h2>
      <ul className="text-xs">
        <li>Hold state så lokalt som muligt</li>
        <li>Undgå at duplikere state</li>
        <li>Brug passende state management for dit use-case</li>
        <li>Husk at state opdateringer er asynkrone</li>
      </ul>

      <div className="mt-6 text-xs">
        <p>For mere detaljeret information om state, se undersiderne:</p>
        <ul>
          <li>
            <strong>useState Hook</strong> - Grundlæggende state håndtering
          </li>
          <li>
            <strong>State Updates</strong> - Korrekt opdatering af state
          </li>
          <li>
            <strong>Complex State</strong> - Håndtering af kompleks state
          </li>
        </ul>
      </div>
    </div>
  );
}
