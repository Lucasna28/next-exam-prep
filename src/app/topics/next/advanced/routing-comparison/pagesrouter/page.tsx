import CodeBlock from "@/components/CodeBlock";

export default function PagesRouterPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Pages Router i Next.js</h1>
      <p className="text-xs">
        <code>pages/</code> strukturen er den klassiske måde at organisere
        routing i Next.js. Den er enkel og let at bruge, hvilket gør den ideel
        for mindre projekter.
      </p>

      <h2 className="text-base">Hovedfunktioner</h2>
      <ul className="text-xs">
        <li>
          <strong>Fil-baseret routing:</strong> Hver fil i <code>pages/</code>{" "}
          mappen svarer til en route.
        </li>
        <li>
          <strong>API Routes:</strong> Opret backend API&apos;er direkte i{" "}
          <code>pages/api</code>.
        </li>
        <li>
          <strong>Fleksibilitet:</strong> Understøtter både server-side
          rendering (SSR) og static site generation (SSG).
        </li>
      </ul>

      <h2 className="text-base">Eksempel: Fil-baseret routing</h2>
      <CodeBlock
        code={`// pages/index.js
export default function HomePage() {
  return <h1>Velkommen til Next.js</h1>;
}

// URL: /
`}
        language="javascript"
      />

      <h5 className="text-base">Eksempel: API Route</h5>
      <CodeBlock
        code={`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, world!" });
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Pages Router</h2>
      <ul className="text-xs">
        <li>
          <strong>Let at forstå:</strong> Ideel for begyndere eller mindre
          projekter.
        </li>
        <li>
          <strong>Moden teknologi:</strong> Har eksisteret siden de tidlige
          versioner af Next.js og er veldokumenteret.
        </li>
        <li>
          <strong>Stabil:</strong> God til projekter, der ikke kræver avancerede
          funktioner.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Pages Router er enkel og velegnet til projekter, der ikke kræver de
        nyeste funktioner i Next.js. Den fungerer perfekt for dem, der ønsker en
        stabil og velkendt struktur.
      </p>
    </div>
  );
}
