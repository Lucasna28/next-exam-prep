import CodeBlock from "@/components/CodeBlock";

export default function EnvironmentVariablesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Environment Variables</h1>
      <p className="text-xs">
        Environment variables bruges i Next.js til at gemme miljøspecifik information, som API-nøgler, databasenavne og andre konfigurationsdata. Dette gør det nemt at holde følsomme oplysninger skjulte og administrere forskellige miljøer som udvikling, test og produktion.
      </p>

      <h2 className="text-base">Opsætning af .env-filer</h2>
      <p className="text-xs">
        Next.js understøtter brugen af `.env`-filer til at definere miljøvariabler. Følgende er eksempler på standardfiltyper:
      </p>
      <ul className="text-xs">
        <li><strong>.env.local:</strong> Bruges til lokale udviklingsvariabler.</li>
        <li><strong>.env.development:</strong> Bruges til udviklingsmiljøet.</li>
        <li><strong>.env.production:</strong> Bruges til produktionsmiljøet.</li>
      </ul>

      <h2 className="text-base">Eksempel på en .env-fil</h2>
      <CodeBlock
        code={`NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=supersecretkey`}
        language="env"
      />

      <h2 className="text-base">Brug af miljøvariabler i Next.js</h2>
      <p className="text-xs">
        Miljøvariabler kan tilgås i Next.js via <code>process.env</code>. Variabler, der skal eksponeres til browseren, skal starte med <code>NEXT_PUBLIC_</code>.
      </p>
      <CodeBlock
        code={`// Eksempel på brug i en komponent
export default function FetchData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return <div>API URL: {apiUrl}</div>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Adgang til sikre variabler</h2>
      <p className="text-xs">
        Variabler uden <code>NEXT_PUBLIC_</code> vil kun være tilgængelige på server-siden og ikke blive eksponeret til klienten. Dette er nyttigt for at holde følsomme oplysninger sikre.
      </p>

      <h2 className="text-base">Fordele ved at bruge miljøvariabler</h2>
      <ul className="text-xs">
        <li><strong>Adskillelse af konfiguration:</strong> Lettere at administrere forskellige miljøer.</li>
        <li><strong>Forbedret sikkerhed:</strong> Følsomme data opbevares uden for koden.</li>
        <li><strong>Fleksibilitet:</strong> Mulighed for at ændre miljøspecifik information uden at ændre koden.</li>
      </ul>

      <h2 className="text-base">Vigtige bemærkninger</h2>
      <p className="text-xs">
        Husk at tilføje dine `.env`-filer til <code>.gitignore</code>, så de ikke bliver inkluderet i versionsstyringen.
      </p>
    </div>
  );
}
