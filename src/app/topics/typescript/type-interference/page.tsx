import CodeBlock from "@/components/CodeBlock";

export default function TypeInferencePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Type Inference i TypeScript</h1>
      <p className="text-xs">
        <strong>Type Inference</strong> i TypeScript refererer til automatisk tildeling af en type til en variabel baseret på dens værdi. TypeScript er i stand til at "gætte" typen af variabler, funktioner og objekter ud fra konteksten, uden at du behøver at angive typen eksplicit.
      </p>

      <h2 className="text-base">Eksempel: Type Inference</h2>
      <p className="text-xs">
        TypeScript analyserer værdien, du tildeler en variabel, og bestemmer automatisk den passende type.
      </p>

      <CodeBlock
        code={`let number = 42; // TypeScript infererer, at 'number' er af typen 'number'
console.log(number); // 42`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Type Inference?</h3>
      <p className="text-xs">
        TypeScript kan automatisk tildele typer baseret på variablernes initialiserede værdier. I eksemplet ovenfor infererer TypeScript, at variablen <code>number</code> har typen <code>number</code>, fordi værdien tildeles som et tal.
      </p>

      <h2 className="text-base">Eksempel: Type Inference med Funktioner</h2>
      <p className="text-xs">
        TypeScript kan også bruge type inference i funktioner. Hvis du returnerer en værdi fra en funktion, vil TypeScript automatisk bestemme typen baseret på returværdien.
      </p>

      <CodeBlock
        code={`function greet() {
  return "Hello, World!"; // TypeScript infererer, at returtypen er 'string'
}
const greeting = greet();
console.log(greeting); // "Hello, World!"`}
        language="typescript"
      />

      <h3 className="text-sm">Fordele ved Type Inference</h3>
      <ul className="text-xs">
        <li><strong>Enkelhed:</strong> Type Inference gør det lettere at skrive kode, da du ikke altid skal definere typer eksplicit.</li>
        <li><strong>Automatisering:</strong> TypeScript sparer tid ved automatisk at tildele de korrekte typer til variabler og funktioner.</li>
        <li><strong>Fejlreduktion:</strong> Type Inference hjælper med at reducere fejl ved at sikre, at den korrekte type anvendes i hele applikationen.</li>
      </ul>

      <h2 className="text-base">Type Inference i Funktioner med Parametre</h2>
      <p className="text-xs">
        TypeScript kan også inferere typer for funktionens parametre, hvis den kan udlede det baseret på værdierne, der sendes til funktionen.
      </p>

      <CodeBlock
        code={`function add(a, b) {
  return a + b; // TypeScript infererer, at 'a' og 'b' er af typen 'number'
}
const result = add(5, 10);
console.log(result); // 15`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Type Inference i TypeScript gør det lettere at skrive type-sikker kode uden at skulle deklarere typer eksplicit hele tiden. Det reducerer den mængde kode, du skal skrive, samtidig med at du opretholder type-sikkerhed i din applikation. TypeScript hjælper med at sikre, at de rette typer bruges gennem hele applikationen, hvilket fører til færre fejl og bedre kodekvalitet.
      </p>
    </div>
  );
}
