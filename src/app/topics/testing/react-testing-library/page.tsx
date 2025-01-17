import CodeBlock from "@/components/CodeBlock";

export default function ReactTestingLibraryPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">React Testing Library</h1>
      <p className="text-xs">
        React Testing Library (RTL) er et populært værktøj til test af React-komponenter. Det fokuserer på at teste komponenter på samme måde, som brugerne interagerer med dem, hvilket giver mere meningsfulde tests.
      </p>

      <h2 className="text-base">Opsætning af React Testing Library i Next.js</h2>
      <p className="text-xs">
        For at bruge React Testing Library i et Next.js-projekt, skal du først installere de nødvendige pakker:
      </p>
      <CodeBlock
        code={`npm install @testing-library/react @testing-library/jest-dom`}
        language="bash"
      />
      <p className="text-xs">
        Tilføj også <code>jest.setup.js</code> i roden af dit projekt for at inkludere <code>jest-dom</code> udvidelser:
      </p>
      <CodeBlock
        code={`// jest.setup.js
import "@testing-library/jest-dom";`}
        language="javascript"
      />
      <p className="text-xs">
        Opdater derefter <code>jest.config.js</code> for at inkludere opsætningsfilen:
      </p>
      <CodeBlock
        code={`module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};`}
        language="javascript"
      />

      <h2 className="text-base">Eksempel på en komponenttest</h2>
      <p className="text-xs">
        Her er et eksempel på, hvordan man tester en simpel React-komponent:
      </p>
      <CodeBlock
        code={`// components/Greeting.tsx
export default function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// tests/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import Greeting from "@/components/Greeting";

test("viser korrekt hilsen", () => {
  render(<Greeting name="Alice" />);
  const greeting = screen.getByText("Hello, Alice!");
  expect(greeting).toBeInTheDocument();
});`}
        language="javascript"
      />

      <h2 className="text-base">Simulering af brugerinteraktion</h2>
      <p className="text-xs">
        React Testing Library giver også mulighed for at simulere brugerinteraktioner, såsom klik og tekstindtastning:
      </p>
      <CodeBlock
        code={`// components/Counter.tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// tests/Counter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "@/components/Counter";

test("incrementerer tælleren", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved React Testing Library</h2>
      <ul className="text-xs">
        <li>Fokuserer på brugervenlige tests, der afspejler brugerens interaktioner.</li>
        <li>Indbygget støtte til moderne JavaScript og TypeScript.</li>
        <li>Integration med Jest gør det nemt at opsætte og udføre tests.</li>
      </ul>

      <h2 className="text-base">Næste skridt</h2>
      <p className="text-xs">
        Udforsk yderligere funktioner såsom mocking og integrationstests med React Testing Library for at styrke din testdækning.
      </p>
    </div>
  );
}
