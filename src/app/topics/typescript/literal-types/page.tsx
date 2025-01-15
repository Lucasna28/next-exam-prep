import CodeBlock from "@/components/CodeBlock";

export default function LiteralTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Literal Types i TypeScript</h1>
      <p className="text-xs">
        <strong>Literal Types</strong> i TypeScript giver dig mulighed for at
        specificere præcise værdier for en type. I stedet for at tillade en
        hvilken som helst værdi af en bestemt type, kan du definere, at en værdi
        kun må være én af flere specifikke værdier. Dette kan være nyttigt, når
        du vil have streng kontrol over de værdier, der bruges i din
        applikation.
      </p>

      <h2 className="text-base">Eksempel: Literal Type</h2>
      <p className="text-xs">
        I dette eksempel bruger vi en literal type til at definere en variabel,
        der kun kan have værdien &quot;red&quot;, &quot;green&quot; eller
        &quot;blue&quot;.
      </p>

      <CodeBlock
        code={`type Color = "red" | "green" | "blue";

const favoriteColor: Color = "red"; // Går igennem
const anotherColor: Color = "yellow"; // Fejl: 'yellow' er ikke en gyldig værdi`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Literal Types?</h3>
      <p className="text-xs">
        Literal types begrænser en værdi til en specifik værdi eller et sæt af
        værdier. I eksemplet ovenfor kan variablen <code>favoriteColor</code>{" "}
        kun have værdien &quot;red&quot;, &quot;green&quot; eller
        &quot;blue&quot;. Forsøg på at tildele en værdi, der ikke er en del af
        de definerede litterale værdier, vil resultere i en fejl.
      </p>

      <h3 className="text-sm">Fordele ved Literal Types</h3>
      <ul className="text-xs">
        <li>
          <strong>Større præcision:</strong> Literal types giver dig mere
          præcise typer, som kan hjælpe med at forhindre fejl ved at begrænse de
          tilladte værdier.
        </li>
        <li>
          <strong>Typebeskyttelse:</strong> De hjælper med at sikre, at kun de
          ønskede værdier bruges, hvilket gør din kode mere robust og
          forudsigelig.
        </li>
        <li>
          <strong>Forbedret autocompletion:</strong> Når du bruger literal
          types, kan editoren give bedre autocompletion og forslag, hvilket gør
          det lettere at udvikle.
        </li>
      </ul>

      <h2 className="text-base">
        Eksempel: Brug af Literal Types i Funktioner
      </h2>
      <p className="text-xs">
        Literal types kan også bruges i funktioner, hvor du kan definere
        specifikke værdi-parametre.
      </p>

      <CodeBlock
        code={`function getStatus(status: "active" | "inactive" | "pending") {
  console.log(\`Status: \${status}\`);
}

getStatus("active"); // Går igennem
getStatus("completed"); // Fejl: 'completed' er ikke en gyldig værdi`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Literal types i TypeScript giver dig mulighed for at definere præcise
        værdier for en type. Dette gør det lettere at kontrollere de værdier,
        der bruges i din applikation, og giver en ekstra beskyttelse mod fejl.
        Literal types forbedrer typebeskyttelsen og gør din kode mere robust og
        præcis.
      </p>
    </div>
  );
}
