import CodeBlock from "@/components/CodeBlock";

export default function SeoPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">SEO (Search Engine Optimization)</h1>
      <p className="text-xs">
        SEO (Search Engine Optimization) er processen med at forbedre synligheden af en webside på søgemaskiner som Google. I Next.js kan SEO optimeres både på server-side og client-side, afhængigt af hvordan du håndterer rendering og metadata.
      </p>

      <h2 className="text-base">Server-side SEO vs. Client-side SEO</h2>
      <p className="text-xs">
        Server-side SEO refererer til SEO-optimering på serveren, f.eks. ved hjælp af SSR (Server-Side Rendering), som gør det muligt for søgemaskiner at crawle og indeksere din side effektivt. Client-side SEO refererer til SEO-optimering på klienten, såsom dynamisk opdatering af metadata.
      </p>

      <h2 className="text-base">Forbedring af SEO i Next.js</h2>
      <p className="text-xs">
        I Next.js kan du optimere din applikation til SEO ved at sikre korrekt rendering af metadata og generere statiske sider med SSR eller SSG (Static Site Generation).
      </p>

      <h3 className="text-base">Brug af <code>next/head</code> til metadata</h3>
      <p className="text-xs">
        For at forbedre SEO kan du bruge <code>next/head</code> til at tilføje metadata, som f.eks. titler, beskrivelser og open graph-tags.
      </p>
      <CodeBlock
        code={`import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Min fantastiske Next.js side</title>
        <meta name="description" content="Dette er en fantastisk Next.js side, der er optimeret til SEO." />
        <meta property="og:title" content="Min fantastiske Next.js side" />
        <meta property="og:description" content="Læs mere om Next.js og SEO." />
        <meta property="og:image" content="/path/to/image.jpg" />
      </Head>
      <div>
        <h1>Velkommen til min side!</h1>
        <p>Dette er en SEO-optimeret side i Next.js.</p>
      </div>
    </>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">SSR og SSG for bedre SEO</h2>
      <p className="text-xs">
        Server-side rendering (SSR) og Static Site Generation (SSG) giver mulighed for at generere HTML på serveren og sende den til klienten. Dette gør det muligt for søgemaskiner at crawle og indeksere din side korrekt.
      </p>
      <ul className="text-xs">
        <li><strong>SSR (Server-side Rendering):</strong> Genererer HTML på serveren for hver anmodning.</li>
        <li><strong>SSG (Static Site Generation):</strong> Genererer HTML under byggetid, hvilket resulterer i hurtigere load-tider.</li>
      </ul>

      <h3 className="text-base">Eksempel på SSG i Next.js</h3>
      <CodeBlock
        code={`export async function getStaticProps() {
  return {
    props: {
      data: 'SEO-venligt indhold',
    },
  };
}

export default function Page({ data }) {
  return <div>{data}</div>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Brug af Structured Data</h2>
      <p className="text-xs">
        Structured Data (eller schema markup) hjælper søgemaskiner med at forstå, hvad din side handler om. Du kan tilføje JSON-LD (JavaScript Object Notation for Linked Data) til din Next.js-app for at give struktureret information om din side.
      </p>
      <CodeBlock
        code={`import Head from 'next/head';

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hvordan man optimerer SEO i Next.js",
    "description": "Lær hvordan du kan forbedre SEO i din Next.js-applikation.",
    "author": "John Doe",
    "publisher": "Next.js",
    "datePublished": "2025-01-17",
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <div>
        <h1>SEO i Next.js</h1>
        <p>Forbedr din synlighed på Google ved hjælp af strukturerede data.</p>
      </div>
    </>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved SEO-optimering i Next.js</h2>
      <ul className="text-xs">
        <li><strong>Forbedret synlighed:</strong> Søgemaskiner vil lettere kunne finde og rangere din side.</li>
        <li><strong>Bedre performance:</strong> Hurtigere load-tider og optimeret rendering gør din side mere brugervenlig.</li>
        <li><strong>Struktureret data:</strong> Hjælper søgemaskiner med at forstå og vise dine sider bedre i søgeresultaterne.</li>
      </ul>
    </div>
  );
}
