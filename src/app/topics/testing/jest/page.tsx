import CodeBlock from "@/components/CodeBlock";

export default function JestPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Jest</h1>
      <p className="text-xs">
        Jest er et populært JavaScript-testframework, der gør det nemt at skrive enhedstests. Det bruges ofte sammen med Next.js til at teste komponenter, funktioner og API-ruter.
      </p>

      <h2 className="text-base">Opsætning af Jest i Next.js</h2>
      <p className="text-xs">
        For at bruge Jest i et Next.js-projekt, skal du først installere de nødvendige pakker:
      </p>
      <CodeBlock
        code={`npm install jest @testing-library/react @testing-library/jest-dom ts-jest`}
        language="bash"
      />
      <p className="text-xs">
        Tilføj derefter en konfigurationsfil til Jest ved at oprette <code>jest.config.js</code> i roden af dit projekt:
      </p>
      <CodeBlock
        code={`module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};`}
        language="javascript"
      />

      <h2 className="text-base">Eksempel på en komponenttest</h2>
      <p className="text-xs">
        Her er et eksempel på en enhedstest af en simpel React-komponent:
      </p>
      <CodeBlock
        code={`// components/Button.tsx
export default function Button({ label }: { label: string }) {
  return <button>{label}</button>;
}

// tests/Button.test.tsx
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

test("viser korrekt label", () => {
  render(<Button label="Klik her" />);
  const button = screen.getByText("Klik her");
  expect(button).toBeInTheDocument();
});`}
        language="javascript"
      />

      <h2 className="text-base">Kørsel af tests</h2>
      <p className="text-xs">
        Du kan køre dine tests ved at tilføje følgende script i din <code>package.json</code>:
      </p>
      <CodeBlock
        code={`"scripts": {
  "test": "jest"
}`}
        language="json"
      />
      <p className="text-xs">
        Derefter kan du køre alle tests med kommandoen:
      </p>
      <CodeBlock code={`npm test`} language="bash" />

      <h2 className="text-base">Fordele ved at bruge Jest</h2>
      <ul className="text-xs">
        <li>Nem opsætning og integration med Next.js.</li>
        <li>Stærkt økosystem med mange plugins og værktøjer.</li>
        <li>Understøttelse af mocking og snapshot tests.</li>
      </ul>

      <h2 className="text-base">Næste skridt</h2>
      <p className="text-xs">
        Udforsk videre ved at kombinere Jest med <code>@testing-library/react</code> for mere avancerede tests.
      </p>
    </div>
  );
}
