import CodeBlock from "@/components/CodeBlock";

export default function HeadComponentPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Head Komponent i Next.js</h1>
      <p className="text-xs">
        <code>Head</code> komponenten i Next.js bruges til at manipulere dokumentets <code>&lt;head&gt;</code> sektion. Dette inkluderer ting som titel, meta-tags, scripts og andre elementer, der påvirker sidens metadata og SEO.
      </p>

      <h2 className="text-base">Eksempel: Tilføj en sidetitel</h2>
      <p className="text-xs">
        Her er et simpelt eksempel på, hvordan du bruger <code>Head</code> komponenten til at tilføje en titel til en side:
      </p>
      <CodeBlock
        code={`import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Min fantastiske side</title>
        <meta name="description" content="En Next.js applikation" />
      </Head>
      <h1>Velkommen til min side</h1>
    </>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvorfor bruge Head komponenten?</h2>
      <ul className="text-xs">
        <li>
          <strong>SEO:</strong> Tilføj meta-tags som <code>description</code> og <code>keywords</code> for bedre synlighed på søgemaskiner.
        </li>
        <li>
          <strong>Dynamic metadata:</strong> Opdater sidetitlen og meta-tags dynamisk afhængigt af indholdet.
        </li>
        <li>
          <strong>Scripts:</strong> Tilføj eksterne scripts eller stylesheets til specifikke sider.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        <code>Head</code> komponenten giver dig kontrol over sidens metadata og er essentiel for SEO og brugeroplevelse. Brug den for at sikre, at dine sider fremstår korrekt i søgemaskiner og sociale medier.
      </p>
    </div>
  );
}
