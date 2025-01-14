import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

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
        <div className="space-y-2 mt-2">
          <Link
            href="/topics/react/state/usestate"
            className="block p-3 rounded-lg border border-slate-200 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-800/50
                     transition-colors duration-200"
          >
            <strong className="text-indigo-600 dark:text-indigo-400">
              useState Hook
            </strong>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Grundlæggende state håndtering med useState hook, forskellige
              typer state, og best practices.
            </p>
          </Link>

          <Link
            href="/topics/react/state/updates"
            className="block p-3 rounded-lg border border-slate-200 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-800/50
                     transition-colors duration-200"
          >
            <strong className="text-indigo-600 dark:text-indigo-400">
              State Updates
            </strong>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Lær om korrekt opdatering af state, batching, og hvordan man
              håndterer asynkrone opdateringer.
            </p>
          </Link>

          <Link
            href="/topics/react/state/complex"
            className="block p-3 rounded-lg border border-slate-200 dark:border-slate-700
                     hover:bg-slate-50 dark:hover:bg-slate-800/50
                     transition-colors duration-200"
          >
            <strong className="text-indigo-600 dark:text-indigo-400">
              Complex State
            </strong>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Håndtering af kompleks state med objekter og arrays, nested state,
              og immutability.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
