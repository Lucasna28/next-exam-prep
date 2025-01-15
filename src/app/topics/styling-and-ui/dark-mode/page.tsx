'use client'

import CodeBlock from "@/components/CodeBlock";
import { useState } from "react";

export default function DarkModePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`prose lg:prose-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-lg">Dark Mode</h1>
      <p className="text-base">
        Dark Mode er en populær funktion i moderne applikationer, der giver brugerne mulighed for at vælge mellem et lyst og et mørkt tema. Det forbedrer læsbarheden i lavbelysning og kan reducere øjenbelastning.
      </p>

      <h2 className="text-base">Grundlæggende Eksempel</h2>
      <p className="text-base">
        Her er et simpelt eksempel på implementering af Dark Mode med React:
      </p>
      <CodeBlock
        code={`import { useState } from "react";

export default function DarkModeExample() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? "#121212" : "#FFFFFF",
      color: darkMode ? "#FFFFFF" : "#000000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1>Dark Mode {darkMode ? "On" : "Off"}</h1>
      <button onClick={toggleDarkMode}>
        Skift til {darkMode ? "Lyst" : "Mørkt"} Tema
      </button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">CSS-Tilgang</h2>
      <p className="text-base">
        Alternativt kan du bruge CSS-klasser og betingede renderingsteknikker til at implementere Dark Mode:
      </p>
      <CodeBlock
        code={`// styles.css
.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
.light-mode {
  background-color: #ffffff;
  color: #000000;
}`}
        language="css"
      />
      <CodeBlock
        code={`import { useState } from "react";
import "./styles.css";

export default function DarkModeWithCSS() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>Dark Mode {darkMode ? "On" : "Off"}</h1>
      <button onClick={toggleDarkMode}>
        Skift til {darkMode ? "Lyst" : "Mørkt"} Tema
      </button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Dark Mode</h2>
      <ul className="text-base">
        <li><strong>Bedre læsbarhed:</strong> Mindsker øjenbelastning i mørke omgivelser.</li>
        <li><strong>Æstetisk:</strong> Kan give en moderne og elegant følelse.</li>
        <li><strong>Energieffektivitet:</strong> Reducerer strømforbrug på OLED-skærme.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        Dark Mode er blevet en standardfunktion i mange applikationer. Ved at implementere denne funktion kan du forbedre brugeroplevelsen og tilbyde fleksibilitet i visningen.
      </p>

      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Skift til {darkMode ? "Lyst" : "Mørkt"} Tema
      </button>
    </div>
  );
}
