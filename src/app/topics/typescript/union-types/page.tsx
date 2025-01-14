import CodeBlock from "@/components/CodeBlock";

export default function UnionTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Union Types i TypeScript</h1>
      <p className="text-xs">
        <strong>Union Types</strong> i TypeScript gør det muligt at angive, at en værdi kan være flere forskellige typer. Det er en kraftfuld funktion, der giver fleksibilitet i, hvordan typerne håndteres i en applikation. Ved at bruge <code>|</code> (pipe) symbolet kan du angive flere typer, som en værdi kan antage.
      </p>

      <h2 className="text-base">Eksempel: Union Type med <code>string</code> og <code>number</code></h2>
      <p className="text-xs">
        Her definerer vi en funktion, der accepterer en værdi, som kan være enten en <code>string</code> eller en <code>number</code>.
      </p>

      <CodeBlock
        code={`function printValue(value: string | number) {
  console.log(value);
}

printValue("Hello, World!"); // "Hello, World!"
printValue(123); // 123`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Union Types?</h3>
      <p className="text-xs">
        I ovenstående eksempel kan argumentet <code>value</code> være enten en <code>string</code> eller et <code>number</code>. TypeScript giver dig mulighed for at arbejde med disse to typer uden at skulle bekymre dig om at validere, hvilken type du arbejder med på forhånd.
      </p>

      <h2 className="text-base">Eksempel: Union Type med flere typer</h2>
      <p className="text-xs">
        Du kan også bruge Union Types til at kombinere flere typer, hvilket giver mulighed for at håndtere forskellige datatyper i din applikation.
      </p>

      <CodeBlock
        code={`type MyType = string | number | boolean;

function checkType(value: MyType) {
  if (typeof value === 'string') {
    console.log('String value:', value);
  } else if (typeof value === 'number') {
    console.log('Number value:', value);
  } else {
    console.log('Boolean value:', value);
  }
}

checkType("Hello"); // String value: Hello
checkType(42); // Number value: 42
checkType(true); // Boolean value: true`}
        language="typescript"
      />

      <h3 className="text-sm">Fordele ved Union Types</h3>
      <ul className="text-xs">
        <li><strong>Fleksibilitet:</strong> Union Types giver mulighed for at arbejde med flere forskellige typer i en enkelt variabel, hvilket øger fleksibiliteten i din kode.</li>
        <li><strong>Forbedret læsbarhed:</strong> Union Types gør koden mere læsbar, da det tydeligt angiver, at en værdi kan være én af flere typer.</li>
        <li><strong>Type sikkerhed:</strong> TypeScript hjælper dig med at sikre, at du arbejder med de rigtige typer, selvom flere typer er tilladt i samme variabel.</li>
      </ul>

      <h2 className="text-base">Eksempel: Union Types med objekter</h2>
      <p className="text-xs">
        Union Types kan også anvendes på objekter, så du kan definere en variabel, der kan være flere objekttyper med forskellige strukturer.
      </p>

      <CodeBlock
        code={`type Person = { name: string; age: number };
type Car = { brand: string; model: string };

function printInfo(value: Person | Car) {
  if ('name' in value) {
    console.log('Person Name:', value.name);
  } else {
    console.log('Car Brand:', value.brand);
  }
}

printInfo({ name: "Alice", age: 30 }); // Person Name: Alice
printInfo({ brand: "Toyota", model: "Corolla" }); // Car Brand: Toyota`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Union Types i TypeScript giver dig mulighed for at definere en værdi, der kan være flere forskellige typer, hvilket gør det muligt at håndtere flere datatyper på en fleksibel og sikker måde. Det giver koden større fleksibilitet, samtidig med at du bevarer type sikkerhed og forudsigelighed i applikationen.
      </p>
    </div>
  );
}
