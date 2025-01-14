import CodeBlock from "@/components/CodeBlock";

export default function EnumPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Enum i TypeScript</h1>
      <p className="text-xs">
        En <strong>enum</strong> i TypeScript er en type, der giver en samling af navngivne værdier. Det bruges til at definere et sæt af konstanter, hvilket gør koden mere læsbar og lettere at vedligeholde.
      </p>

      <h2 className="text-base">Eksempel: Grundlæggende Enum</h2>
      <CodeBlock
        code={`enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move: Direction = Direction.Up;
console.log(move); // Output: 0`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Enum?</h3>
      <ul className="text-xs">
        <li><strong>Enum-værdier:</strong> Standard starter enum-værdierne fra 0 og øges med 1, men du kan også tildele specifikke værdier til dem.</li>
        <li><strong>Brug:</strong> Enums kan bruges til at referere til prædefinerede værdier i stedet for at bruge magiske tal eller strenge.</li>
      </ul>

      <h2 className="text-base">Eksempel: Enum med manuelle værdier</h2>
      <CodeBlock
        code={`enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

const currentStatus: Status = Status.Approved;
console.log(currentStatus); // Output: APPROVED`}
        language="typescript"
      />

      <h3 className="text-sm">Fordele ved Enum</h3>
      <ul className="text-xs">
        <li><strong>Læsbarhed:</strong> Enum giver mere forståelige og selvforklarende værdier i stedet for magiske tal eller strenge.</li>
        <li><strong>Fejlreduktion:</strong> TypeScript kan kontrollere, at kun de definerede enum-værdier bruges, hvilket hjælper med at undgå fejl.</li>
        <li><strong>Selvbeskrivelse:</strong> Enum-navne giver kode en selvbeskrivende struktur.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Enums i TypeScript er et kraftfuldt værktøj, der hjælper med at gøre koden mere forståelig og håndterbar. De gør det lettere at arbejde med et sæt af faste, definerede værdier og hjælper med at undgå fejl, når du arbejder med konstantdata.
      </p>
    </div>
  );
}
