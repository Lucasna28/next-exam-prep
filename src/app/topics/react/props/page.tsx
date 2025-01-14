import CodeBlock from "@/components/CodeBlock";

export default function PropsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Props i React</h1>
      <p className="text-xs">
        Props (kort for <strong>properties</strong>) bruges i React til at sende
        data fra en forælderkomponent til en barnkomponent. De er læse-only og
        hjælper med at gøre komponenter genanvendelige og dynamiske.
      </p>

      <h2 className="text-base">Hvordan fungerer Props?</h2>
      <p className="text-xs">
        Props overføres som attributter på komponenter og kan derefter tilgås
        som et objekt i barnkomponenten. Her er et simpelt eksempel:
      </p>

      <CodeBlock
        code={`// ParentComponent.jsx
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  return <ChildComponent message="Hello, React Props!" />;
}

// ChildComponent.jsx
export default function ChildComponent({ message }) {
  return <p>{message}</p>;
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li>
          <strong>Forælder:</strong> I ovenstående eksempel sender{" "}
          <code>ParentComponent</code> en prop kaldet <code>message</code> til{" "}
          <code>ChildComponent</code>.
        </li>
        <li>
          <strong>Barn:</strong> <code>ChildComponent</code> modtager{" "}
          <code>message</code> og viser værdien i en paragraf.
        </li>
      </ul>

      <h2 className="text-base">Props er læse-only</h2>
      <p className="text-xs">
        Props kan ikke ændres af barnkomponenten. Hvis data skal opdateres, skal
        forælderkomponenten håndtere det og sende de opdaterede props ned.
      </p>
      <CodeBlock
        code={`// Forkert: Ændring af props
export default function ChildComponent({ message }) {
  message = "Dette virker ikke!"; // Fejl
  return <p>{message}</p>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Eksempel: Dynamisk liste</h2>
      <p className="text-xs">
        Props kan bruges til at skabe dynamiske komponenter. For eksempel kan vi
        sende en liste som prop:
      </p>
      <CodeBlock
        code={`// ParentComponent.jsx
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return <ChildComponent items={items} />;
}

// ChildComponent.jsx
export default function ChildComponent({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li>
          <strong>Props med array:</strong> I eksemplet ovenfor sendes en liste
          af frugter som en prop til <code>ChildComponent</code>.
        </li>
        <li>
          <strong>Dynamisk rendering:</strong> <code>ChildComponent</code>{" "}
          bruger <code>map()</code> til at gengive hvert element som en liste.
        </li>
      </ul>

      <h2 className="text-base">Fordele ved Props</h2>
      <ul className="text-xs">
        <li>
          <strong>Genanvendelighed:</strong> Komponenter kan genbruges med
          forskellige data.
        </li>
        <li>
          <strong>Dynamik:</strong> Props giver mulighed for at oprette
          dynamiske og interaktive brugergrænseflader.
        </li>
        <li>
          <strong>Struktur:</strong> De hjælper med at organisere og strukturere
          dataflowet i din applikation.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Props er en grundlæggende funktion i React, der muliggør kommunikation
        mellem komponenter. De gør det muligt at skabe fleksible, genanvendelige
        og dynamiske komponenter. Det er vigtigt at forstå deres læse-only natur
        og struktur for effektiv brug.
      </p>
    </div>
  );
}
