import CodeBlock from "@/components/CodeBlock";

export default function InterfacesVsTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Interfaces vs. Types i TypeScript</h1>
      <p className="text-xs">
        I TypeScript bruges både <strong>Interfaces</strong> og <strong>Types</strong> til at definere strukturer for objekter og andre datatyper. Selvom de er meget lig hinanden, er der nogle forskelle i deres anvendelse og funktionalitet. I denne artikel vil vi gennemgå forskellene og hvornår det er hensigtsmæssigt at bruge den ene over den anden.
      </p>

      <h2 className="text-base">Interfaces</h2>
      <p className="text-xs">
        <strong>Interfaces</strong> definerer en kontrakt, som objekter skal overholde. De bruges primært til at beskrive strukturen af objekter og klasser, og de kan udvides og implementeres. Interfaces er ideelle, når du arbejder med objekter, og du ønsker at definere specifikke egenskaber og deres typer.
      </p>
      <h3 className="text-sm">Eksempel: Interface</h3>
      <CodeBlock
        code={`interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30
};`}
        language="typescript"
      />

      <h2 className="text-base">Types</h2>
      <p className="text-xs">
        <strong>Types</strong> er mere fleksible end interfaces og kan bruges til at definere både objekter, primitive typer, funktioner og meget mere. De kan også bruges til at oprette union types og intersection types. Types er ideelle, når du ønsker en bredere fleksibilitet i dine typer.
      </p>
      <h3 className="text-sm">Eksempel: Type</h3>
      <CodeBlock
        code={`type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Jane",
  age: 25
};`}
        language="typescript"
      />

      <h3 className="text-sm">Forskel på Interfaces og Types</h3>
      <ul className="text-xs">
        <li><strong>Udvidelse:</strong> Interfaces kan udvides med <code>extends</code>, mens types kan bruge <code>&#123; ... &#125;</code> syntaxen til at oprette en ny type.</li>
        <li><strong>Fleksibilitet:</strong> Types tilbyder mere fleksibilitet, da de kan bruges til funktioner, unioner, intersections og meget mere, mens interfaces kun er til objekter.</li>
        <li><strong>Arv og Implementering:</strong> Interfaces kan implementeres i klasser, mens types ikke kan.</li>
      </ul>

      <h3 className="text-sm">Hvornår skal man bruge Interfaces og Hvornår skal man bruge Types?</h3>
      <ul className="text-xs">
        <li><strong>Brug Interfaces:</strong> Når du arbejder med objekter og har behov for at udvide strukturer eller implementere dem i klasser.</li>
        <li><strong>Brug Types:</strong> Når du har brug for fleksibilitet og ønsker at bruge unioner, intersection types, eller når du arbejder med funktioner.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Både interfaces og types er kraftfulde værktøjer i TypeScript, og valget mellem de to afhænger af dit specifikke behov. Generelt kan du bruge interfaces til strukturerede objekter og klasser, mens types giver mere fleksibilitet og anvendelighed til et bredere spektrum af datatyper.
      </p>
    </div>
  );
}
