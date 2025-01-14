import CodeBlock from "@/components/CodeBlock";

export default function GenericsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Generics i TypeScript</h1>
      <p className="text-xs">
        <strong>Generics</strong> i TypeScript gør det muligt at oprette komponenter, funktioner og klasser, der kan arbejde med forskellige typer, samtidig med at typen bevares. Generics giver fleksibilitet og genbrug af kode, samtidig med at typekontrollen bevares.
      </p>

      <h2 className="text-base">Eksempel: Grundlæggende Generics</h2>
      <CodeBlock
        code={`function identity<T>(arg: T): T {
  return arg;
}

const result = identity(5); // result er af typen number
const resultString = identity("Hello"); // resultString er af typen string`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Generics?</h3>
      <ul className="text-xs">
        <li><strong>Pladsholder for typen:</strong> Generics bruger pladsholdere (som f.eks. <code>T</code>) for at angive en type, der ikke er kendt før kompilering.</li>
        <li><strong>Fleksibilitet:</strong> Med generics kan du bruge samme funktion eller klasse til at arbejde med flere datatyper uden at miste typekontrol.</li>
        <li><strong>Type sikkerhed:</strong> TypeScript sørger for, at den korrekte type bruges, hvilket giver sikkerhed uden at skulle gentage kode.</li>
      </ul>

      <h2 className="text-base">Eksempel: Generics med Arrays</h2>
      <CodeBlock
        code={`function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // firstNumber er af typen number
const firstString = getFirstElement(["a", "b", "c"]); // firstString er af typen string`}
        language="typescript"
      />

      <h3 className="text-sm">Fordele ved Generics</h3>
      <ul className="text-xs">
        <li><strong>Genbrug af kode:</strong> Du kan genbruge funktioner, klasser og interfaces på tværs af flere datatyper uden at duplicere logikken.</li>
        <li><strong>Type sikkerhed:</strong> TypeScript kan fortsat sikre, at de korrekte typer bruges, hvilket reducerer fejl.</li>
        <li><strong>Forbedret læsbarhed:</strong> Generics gør det muligt at definere fleksible funktioner og klasser, der stadig er lette at forstå og vedligeholde.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Generics i TypeScript er et kraftfuldt værktøj, der hjælper med at skrive fleksibel og genanvendelig kode, samtidig med at typekontrollen bevares. Ved at bruge generics kan du skrive funktioner og klasser, der fungerer med enhver datatype uden at miste fordelene ved statisk typekontrol.
      </p>
    </div>
  );
}
