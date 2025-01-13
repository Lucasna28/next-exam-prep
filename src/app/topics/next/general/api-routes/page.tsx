import CodeBlock from "@/components/CodeBlock";

export default function APIRoutesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">API Routes i Next.js</h1>

      <h2 className="text-base">Hvad er API Routes?</h2>
      <p className="text-xs">
        API Routes i Next.js giver dig mulighed for at oprette server-side API-endpoints direkte i din Next.js-applikation. Disse ruter fungerer som backend-funktioner og håndterer HTTP-forespørgsler (GET, POST, etc.) uden at kræve en separat server eller backend.
      </p>

      <h2 className="text-base">Eksempel: Opret en simpel API Route</h2>
      <p className="text-xs">
        API Routes oprettes i mappen `/pages/api`. Hver fil i denne mappe svarer til en rute. Her er et eksempel på en simpel API route, der håndterer en GET-forespørgsel:
      </p>

      <CodeBlock
        code={`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, World!' });
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer API Routes?</h3>
      <ul className="text-xs">
        <li><strong>Filstruktur:</strong> API routes oprettes som filer i `/pages/api`. For eksempel, en fil som `pages/api/hello.js` opretter en API route til `/api/hello`.</li>
        <li><strong>Funktion:</strong> Hver API route er en funktion, der modtager `req` (request) og `res` (response) som parametre. Du kan håndtere forskellige HTTP-metoder som GET, POST, etc.</li>
        <li><strong>Server-side:</strong> API routes kører på serveren, så de kan bruges til at håndtere backend-opgaver som databasekald, autentificering eller eksterne API-forespørgsler.</li>
      </ul>

      <h5 className="text-base">Eksempel: API Route med POST-metode</h5>
      <p className="text-xs">
        API Routes kan også håndtere POST-forespørgsler. Her er et eksempel, hvor vi opretter en API route, der modtager data fra klienten og sender et svar tilbage:
      </p>

      <CodeBlock
        code={`// pages/api/contact.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    // Behandle data, f.eks. gem i database
    res.status(200).json({ message: 'Data modtaget', name, email });
  } else {
    res.status(405).json({ message: 'Metode ikke tilladt' });
  }
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer POST-metoden?</h3>
      <ul className="text-xs">
        <li><strong>req.method:</strong> Brug `req.method` for at tjekke hvilken HTTP-metode der bruges (GET, POST, etc.).</li>
        <li><strong>req.body:</strong> For POST-forespørgsler, bruges `req.body` til at få adgang til de data, der sendes fra klienten.</li>
        <li><strong>res.status:</strong> Du kan sende et svar tilbage til klienten med `res.status()` og valgfrit sende JSON-data med `res.json()`.</li>
      </ul>

      <h2 className="text-base">Fordele ved API Routes</h2>
      <ul className="text-xs">
        <li><strong>Enkelhed:</strong> API Routes giver en enkel måde at oprette server-side funktioner uden at skulle opsætte en separat server.</li>
        <li><strong>Integrering:</strong> API Routes er integreret direkte i din Next.js-applikation, så du kan nemt oprette og administrere API-endpoints.</li>
        <li><strong>Skalering:</strong> Du kan nemt håndtere server-side logik, som f.eks. at hente data fra en database eller et eksternt API, hvilket gør det nemt at skalere din applikation.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        API Routes i Next.js er en kraftfuld funktion, der giver dig mulighed for at oprette server-side API-endpoints direkte i din Next.js-applikation. Det gør det muligt at håndtere backend-funktioner som databasetransaktioner, autentificering og ekstern API-integration, alt sammen uden at skulle opsætte en separat server.
      </p>
    </div>
  );
}
