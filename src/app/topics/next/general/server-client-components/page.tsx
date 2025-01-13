import CodeBlock from "@/components/CodeBlock";

export default function ComponentsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Server Components vs. Client Components i Next.js</h1>

      <h2 className="text-base">Hvad er Server Components?</h2>
      <p className="text-xs">
        Server Components i Next.js er komponenter, der kun renderes på serveren. De sender ikke noget JavaScript til klienten og er ideelle til at generere server-side indhold som f.eks. databasetransaktioner, API-kald eller rendering af statisk indhold.
      </p>

      <h2 className="text-base">Hvad er Client Components?</h2>
      <p className="text-xs">
        Client Components er de komponenter, der rendere på klienten (browseren). De kan interagere med brugerinput, håndtere tilstande (state) og køre JavaScript-kode på klienten.
      </p>

      <h2 className="text-base">Eksempel: Server Component</h2>
      <p className="text-xs">
        En Server Component hentes og rendere på serveren, før den sendes til klienten som statisk HTML. Her er et eksempel:
      </p>

      <CodeBlock
        code={`// components/ServerComponent.js
export default function ServerComponent() {
  // Denne komponent kører kun på serveren
  return <p>Dette indhold blev genereret på serveren!</p>;
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer Server Components?</h3>
      <ul className="text-xs">
        <li><strong>Server-side rendering:</strong> Server Components renderes kun på serveren og sendes som ren HTML til klienten.</li>
        <li><strong>Effektivitet:</strong> Server Components reducerer mængden af JavaScript sendt til klienten og forbedrer ydeevnen.</li>
      </ul>

      <h5 className="text-base">Eksempel: Client Component</h5>
      <p className="text-xs">
        Client Components bruges til at håndtere interaktivitet på klienten. Her er et eksempel:
      </p>

      <CodeBlock
        code={`// components/ClientComponent.js
import { useState } from 'react';

export default function ClientComponent() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Klik på mig</button>
      <p>Antal klik: {counter}</p>
    </div>
  );
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer Client Components?</h3>
      <ul className="text-xs">
        <li><strong>Client-side rendering:</strong> Client Components renderes på klienten, og de kan reagere på brugerinteraktioner som klik og tastetryk.</li>
        <li><strong>Interaktivitet:</strong> Client Components gør det muligt at have dynamisk opførsel på siden uden at reindlæse hele siden.</li>
      </ul>

      <h2 className="text-base">Server Components vs. Client Components: Hvad er forskellen?</h2>
      <ul className="text-xs">
        <li><strong>Ydeevne:</strong> Server Components er hurtigere ved initial rendering, da de kun sender statisk HTML til klienten, mens Client Components kræver, at JavaScript hentes og køres på klienten.</li>
        <li><strong>Interaktivitet:</strong> Client Components giver mulighed for interaktivitet (f.eks. brugerinput), mens Server Components kun renderes én gang på serveren.</li>
        <li><strong>Brugstilfælde:</strong> Server Components egner sig godt til datadrevet indhold og API-kald, mens Client Components er bedst til dynamiske grænseflader og brugerinteraktion.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Både Server Components og Client Components har deres fordele afhængigt af situationen. Ved at bruge Server Components kan du optimere ydeevnen ved at sende mindre JavaScript til klienten, mens Client Components giver dig mulighed for at skabe dynamiske og interaktive brugergrænseflader.
      </p>
    </div>
  );
}
