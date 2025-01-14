import CodeBlock from "@/components/CodeBlock";

export default function ControlledComponentsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Controlled Components</h1>
      <p className="text-xs">
        En Controlled Component i React bruger state til at kontrollere værdien
        af et input-element. Inputfeltets værdi styres fuldt ud af React, og
        enhver ændring håndteres via en state-opdatering.
      </p>

      <h2 className="text-base">Eksempel: Controlled Component</h2>
      <CodeBlock
        code={`import { useState } from "react";

export default function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Indtast tekst"
      />
      <p>Din tekst: {value}</p>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele</h2>
      <ul className="text-xs">
        <li>
          <strong>Predictability:</strong> Data er synkroniseret med Reacts
          state.
        </li>
        <li>
          <strong>Validation:</strong> Du kan nemt tilføje valideringslogik.
        </li>
        <li>
          <strong>Kontrol:</strong> Fuldt kontrol over inputelementet.
        </li>
      </ul>
    </div>
  );
}
