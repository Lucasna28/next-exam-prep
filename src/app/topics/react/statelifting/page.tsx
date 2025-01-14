import CodeBlock from "@/components/CodeBlock";

export default function StateLiftingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">State Lifting i React</h1>
      <p className="text-xs">
        State lifting er en teknik i React, hvor man flytter state til en fælles forælderkomponent for at dele den mellem flere søskendekomponenter. Dette bruges ofte, når flere komponenter har brug for at arbejde med eller vise den samme data.
      </p>

      <h2 className="text-base">Hvordan fungerer state lifting?</h2>
      <p className="text-xs">
        Når to eller flere komponenter har brug for adgang til samme state, kan man flytte staten til en fælles forælderkomponent. Forælderen styrer staten og sender den som props til børnene.
      </p>

      <CodeBlock
        code={`// ParentComponent.jsx
import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

export default function ParentComponent() {
  const [value, setValue] = useState('');

  return (
    <div>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </div>
  );
}

// ChildA.jsx
export default function ChildA({ value, setValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Indtast tekst"
    />
  );
}

// ChildB.jsx
export default function ChildB({ value }) {
  return <p>Tekst fra input: {value}</p>;
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li><strong>State i forælder:</strong> Staten <code>value</code> er defineret i <code>ParentComponent</code>.</li>
        <li><strong>Deling via props:</strong> Staten og funktionen <code>setValue</code> deles med <code>ChildA</code> og <code>ChildB</code> via props.</li>
        <li><strong>Synkronisering:</strong> Når <code>ChildA</code> opdaterer staten, vises ændringen straks i <code>ChildB</code>.</li>
      </ul>

      <h2 className="text-base">Hvornår skal man bruge state lifting?</h2>
      <p className="text-xs">
        State lifting er nyttig, når flere komponenter skal:
      </p>
      <ul className="text-xs">
        <li>Synkroniseres med den samme state.</li>
        <li>Dele data, som f.eks. brugerinput eller en delt status.</li>
        <li>Kommunikere via en fælles forælder, uden at skabe unødvendige afhængigheder.</li>
      </ul>

      <h2 className="text-base">Fordele ved state lifting</h2>
      <ul className="text-xs">
        <li><strong>Centraliseret state:</strong> Staten styres ét sted, hvilket gør det nemmere at debugge og vedligeholde.</li>
        <li><strong>Dataflow:</strong> Sikrer en ensrettet dataflow, som gør applikationen mere forudsigelig.</li>
        <li><strong>Fleksibilitet:</strong> Gør det muligt for flere komponenter at dele og bruge den samme data.</li>
      </ul>

      <h2 className="text-base">Udfordringer ved state lifting</h2>
      <ul className="text-xs">
        <li><strong>Kompleksitet:</strong> Hvis staten bliver for stor, kan det føre til komplekse forældrekomponenter.</li>
        <li><strong>Prop-drilling:</strong> Data skal måske videresendes gennem flere lag af komponenter, hvilket kan føre til "prop-drilling". I disse tilfælde kan man overveje at bruge en state management løsning som Redux eller Context API.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        State lifting er en grundlæggende teknik i React, der gør det muligt at dele state mellem komponenter. Det hjælper med at skabe synkroniserede brugergrænseflader og centraliserer styringen af data. Når det bruges korrekt, kan det forbedre struktur og vedligeholdelse i dine applikationer.
      </p>
    </div>
  );
}
