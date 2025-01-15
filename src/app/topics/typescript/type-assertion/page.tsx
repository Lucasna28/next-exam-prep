import CodeBlock from "@/components/CodeBlock";

export default function TypeAssertionPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Type Assertion i TypeScript</h1>
      <p className="text-xs">
        <strong>Type Assertion</strong> i TypeScript giver dig mulighed for at
        fortælle kompilatoren, at en variabel har en bestemt type, selvom
        TypeScript ellers ikke kan udlede den. Det giver dig mulighed for at
        &quot;tvinge&quot; en type på en værdi, og det kan være nyttigt, når du
        er sikker på typen, men TypeScript ikke kan udlede den automatisk.
      </p>

      <h2 className="text-base">Eksempel: Type Assertion</h2>
      <p className="text-xs">
        I dette eksempel bruger vi type assertion til at fortælle TypeScript, at
        en værdi skal behandles som en bestemt type.
      </p>

      <CodeBlock
        code={`let value: unknown = "Hello, TypeScript!"; 
let length: number = (value as string).length; // Type assertion

console.log(length); // 18`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Type Assertion?</h3>
      <p className="text-xs">
        Type Assertion bruger syntaksen <code>value as type</code> eller{" "}
        <code>&lt;type&gt;value</code> (som ikke er tilgængelig i JSX). I
        eksemplet ovenfor bruger vi type assertion til at fortælle TypeScript,
        at variablen <code>value</code> skal behandles som en{" "}
        <code>string</code>, selvom den oprindeligt er defineret som{" "}
        <code>unknown</code>.
      </p>

      <h3 className="text-sm">Fordele ved Type Assertion</h3>
      <ul className="text-xs">
        <li>
          <strong>Kontrol:</strong> Type Assertion giver dig mere kontrol over,
          hvordan TypeScript håndterer typen af en variabel.
        </li>
        <li>
          <strong>Fejlreduktion:</strong> Det kan hjælpe med at reducere
          typerelaterede fejl, når du er sikker på typen af en variabel, men
          TypeScript ikke kan udlede det.
        </li>
        <li>
          <strong>Fleksibilitet:</strong> Du kan bruge type assertion til at
          arbejde med værdier, som TypeScript ellers ville betragte som usikre
          eller ukendte.
        </li>
      </ul>

      <h2 className="text-base">Eksempel: Type Assertion med DOM Elementer</h2>
      <p className="text-xs">
        Type Assertion er også nyttig, når du arbejder med DOM-elementer. Hvis
        du for eksempel får fat i et element fra DOM&apos;en, og du ved, at det
        er af en bestemt type, kan du bruge type assertion til at fortælle
        TypeScript, at det er en bestemt type.
      </p>

      <CodeBlock
        code={`const button = document.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", () => {
  console.log("Button clicked!");
});`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Type Assertion i TypeScript er en nyttig funktion, når du ønsker at
        fortælle TypeScript, at en variabel har en bestemt type. Det giver dig
        mulighed for at &quot;omgå&quot; TypeScripts typeinferens og tvinge en
        type på en værdi. Selvom det kan være nyttigt, skal det bruges
        forsigtigt, da det kan føre til runtime-fejl, hvis typen er forkert.
      </p>
    </div>
  );
}
