import CodeBlock from "@/components/CodeBlock";

export default function ContextAPIPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Context API i React</h1>
      <p className="text-xs">
        Context API i React gør det muligt at dele global state på tværs af komponenter uden at skulle sende props ned gennem flere niveauer. Det er særligt nyttigt til at håndtere global tilstand som brugerdata, temaindstillinger eller sprogpræferencer.
      </p>

      <h2 className="text-base">Eksempel: Oprettelse af en Context</h2>
      <CodeBlock
        code={`import React, { createContext, useState, useContext } from 'react';

// Opret en Context
const ThemeContext = createContext();

// Opret en provider-komponent
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Brug Context i en komponent
export function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Aktuelt tema: {theme}</p>
      <button onClick={toggleTheme}>Skift Tema</button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan fungerer Context API?</h2>
      <p className="text-xs">
        Context API gør det muligt at dele værdier (som state) gennem en komponenttræstruktur uden at skulle sende props fra forælder til barn. Dette sker gennem Context Provider og Consumer, eller ved hjælp af `useContext` hooken.
      </p>

      <h2 className="text-base">Fordele ved Context API</h2>
      <ul className="text-xs">
        <li><strong>Global State:</strong> Del data på tværs af komponenter uden at skulle proppe dem ned gennem flere niveauer.</li>
        <li><strong>Let at bruge:</strong> Context API gør det nemt at dele state på tværs af komponenter uden meget opsætning.</li>
        <li><strong>Reduceret Prop Drilling:</strong> Undgå at sende props igennem mange komponenter.</li>
      </ul>
    </div>
  );
}
