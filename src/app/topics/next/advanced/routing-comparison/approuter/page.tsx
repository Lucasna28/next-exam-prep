import CodeBlock from "@/components/CodeBlock";

export default function AppRouterPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">App Router i Next.js</h1>
      <p className="text-xs">
        <code>app/</code> strukturen blev introduceret i Next.js 13 og giver en
        moderne måde at bygge applikationer med funktioner som layouts,
        serverkomponenter og streaming.
      </p>

      <h2 className="text-base">Hovedfunktioner</h2>
      <ul className="text-xs">
        <li>
          <strong>Serverkomponenter:</strong> Standard i <code>app/</code>, der
          giver bedre performance og reduceret JavaScript på klienten.
        </li>
        <li>
          <strong>Layouts:</strong> Delte layouts kan definere UI, der genbruges
          på tværs af sider.
        </li>
        <li>
          <strong>Streaming:</strong> Muliggør levering af indhold i realtid for
          hurtigere sideindlæsning.
        </li>
      </ul>

      <h2 className="text-base">Eksempel: Oprettelse af en layout-fil</h2>
      <CodeBlock
        code={`// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Mit layout</header>
        {children}
      </body>
    </html>
  );
}`}
        language="typescript"
      />

      <h2 className="text-base">Fordele ved App Router</h2>
      <ul className="text-xs">
        <li>
          <strong>Avancerede funktioner:</strong> Layouts, streaming og
          serverkomponenter er indbygget.
        </li>
        <li>
          <strong>Forbedret performance:</strong> Reducerer mængden af
          JavaScript på klienten.
        </li>
        <li>
          <strong>Skalerbar:</strong> Bedre egnet til store applikationer.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        App Router er ideel til moderne applikationer, hvor performance og
        fleksibilitet er afgørende. Det er designet til at udnytte Next.js&apos;
        nyeste funktioner.
      </p>
    </div>
  );
}
