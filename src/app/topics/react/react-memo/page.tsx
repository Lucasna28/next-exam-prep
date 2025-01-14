import CodeBlock from "@/components/CodeBlock";

export default function ReactMemoPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">React.memo i React</h1>
      <p className="text-xs">
        React.memo er en højere ordens komponent (HOC) i React, der bruges til at optimere rendering af funktionelle komponenter. Den gør det muligt at undgå unødvendige renders, når komponentens props ikke er ændret.
      </p>

      <h2 className="text-base">Eksempel: React.memo</h2>
      <CodeBlock
        code={`import React, { useState } from 'react';

// Funktionel komponent, der kun renderes igen hvis props ændres
const MyComponent = React.memo(({ count }) => {
  console.log('Component rendered');
  return <p>Count: {count}</p>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan virker React.memo?</h2>
      <p className="text-xs">
        React.memo sammenligner de forrige og nuværende props for en komponent. Hvis props ikke har ændret sig, undgår den at re-rendering komponenten, hvilket kan forbedre ydeevnen i applikationen.
      </p>

      <h2 className="text-base">Fordele ved React.memo</h2>
      <ul className="text-xs">
        <li><strong>Performance:</strong> Reducer unødvendige renders, hvilket gør applikationen hurtigere og mere effektiv.</li>
        <li><strong>Optimering:</strong> Særligt nyttigt i store applikationer med mange komponenter, hvor unødvendige rendering kan være en flaskehals.</li>
        <li><strong>Enkel at bruge:</strong> Anvend React.memo som en simpel wrapper om funktionelle komponenter for at forbedre performance.</li>
      </ul>
    </div>
  );
}
