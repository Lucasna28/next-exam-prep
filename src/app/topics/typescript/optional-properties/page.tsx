import CodeBlock from "@/components/CodeBlock";

export default function OptionalPropertiesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Optional Properties i TypeScript</h1>
      <p className="text-xs">
        <strong>Optional Properties</strong> i TypeScript giver dig mulighed for at definere egenskaber i et objekt, som ikke nødvendigvis skal være til stede. Det er nyttigt, når du arbejder med objekter, hvor ikke alle værdier er obligatoriske, og du ønsker at gøre nogle af dem valgfri.
      </p>

      <h2 className="text-base">Eksempel: Optional Properties</h2>
      <p className="text-xs">
        I dette eksempel definerer vi et interface, hvor <code>age</code> er en valgfri egenskab.
      </p>

      <CodeBlock
        code={`interface Person {
  name: string;
  age?: number; // Valgfri egenskab
}

const person1: Person = { name: "John" }; // Går igennem, age er valgfri
const person2: Person = { name: "Jane", age: 25 }; // Går igennem, age er til stede`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Optional Properties?</h3>
      <p className="text-xs">
        Ved at bruge et spørgsmålstegn (<code>?</code>) efter en egenskab i et interface eller type, gør du den egenskab valgfri. I eksemplet ovenfor kan objekter, der implementerer <code>Person</code>-interfacet, vælge at inkludere eller udelade <code>age</code>-egenskaben.
      </p>

      <h3 className="text-sm">Fordele ved Optional Properties</h3>
      <ul className="text-xs">
        <li><strong>Fleksibilitet:</strong> Optional properties giver dig mulighed for at definere objekter, hvor ikke alle egenskaber nødvendigvis er påkrævet, hvilket gør koden mere fleksibel.</li>
        <li><strong>Validering:</strong> TypeScript sikrer, at alle obligatoriske egenskaber er til stede, samtidig med at det tillader valgfri egenskaber.</li>
        <li><strong>Kompatibilitet:</strong> Det gør det nemt at arbejde med objektstrukturer, der kan variere afhængigt af kontekst eller situation.</li>
      </ul>

      <h2 className="text-base">Eksempel: Optional Properties i Funktioner</h2>
      <p className="text-xs">
        Du kan også bruge optional properties i funktioner, når du vil tillade, at nogle argumenter ikke er nødvendige.
      </p>

      <CodeBlock
        code={`function greet(person: { name: string; age?: number }) {
  if (person.age) {
    console.log(\`Hej, \${person.name}. Du er \${person.age} år gammel.\`);
  } else {
    console.log(\`Hej, \${person.name}.\`);
  }
}

greet({ name: "John" }); // Hej, John.
greet({ name: "Jane", age: 25 }); // Hej, Jane. Du er 25 år gammel.`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Optional Properties i TypeScript giver dig mulighed for at definere fleksible objekter, hvor ikke alle egenskaber nødvendigvis er nødvendige. Dette giver stor fleksibilitet, samtidig med at du stadig kan drage fordel af TypeScripts typebeskyttelse, når du arbejder med objekter.
      </p>
    </div>
  );
}
