import CodeBlock from "@/components/CodeBlock";

export default function CustomHooksPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Custom Hooks i React</h1>
      <p className="text-xs">
        Custom Hooks i React giver dig mulighed for at oprette dine egne funktioner, der kan genbruge logik på tværs af komponenter. Custom hooks starter altid med `use` og kan bruge andre hooks som `useState`, `useEffect` osv.
      </p>

      <h2 className="text-base">Eksempel: Oprettelse af en Custom Hook</h2>
      <CodeBlock
        code={`import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;`}
        language="javascript"
      />

      <h5 className="text-base">Hvordan fungerer Custom Hooks?</h5>
      <p className="text-xs">
        En custom hook er en funktion, der kan indeholde logik, som kan deles på tværs af flere komponenter. Custom hooks bruges typisk til at håndtere sideeffekter, tilstand eller formularindgange, som kan genbruges i forskellige dele af applikationen.
      </p>

      <h2 className="text-base">Fordele ved Custom Hooks</h2>
      <ul className="text-xs">
        <li><strong>Genbrug af logik:</strong> Del funktionalitet mellem komponenter uden at duplikere kode.</li>
        <li><strong>Modularitet:</strong> Hold komponenter små og fokuserede på deres primære opgave.</li>
        <li><strong>Forbedret læsbarhed:</strong> Ved at abstrahere logik i hooks bliver komponenterne lettere at læse og vedligeholde.</li>
      </ul>

      <h2 className="text-base">Eksempel: Brug af Custom Hook i en Komponent</h2>
      <p className="text-xs">
        Her er et eksempel på, hvordan vi kan bruge den `useLocalStorage` hook, vi har oprettet:
      </p>

      <CodeBlock
        code={`import useLocalStorage from './useLocalStorage';

export default function ExampleComponent() {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Indtast dit navn"
      />
      <p>Dit navn er: {name}</p>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Custom Hooks giver dig mulighed for at udtrække og genbruge logik i React-applikationer på en struktureret måde. De hjælper med at holde dine komponenter rene og nemmere at vedligeholde, samtidig med at de gør koden mere fleksibel og genanvendelig.
      </p>
    </div>
  );
}
