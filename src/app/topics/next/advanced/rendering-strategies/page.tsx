import CodeBlock from "@/components/CodeBlock";

export default function RenderingStrategiesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Renderingsstrategier i Next.js</h1>
      <p className="text-xs">
        Next.js understøtter flere renderingsstrategier, der giver fleksibilitet til at optimere ydeevnen og brugeroplevelsen. Her gennemgår vi de fire vigtigste strategier: 
        <strong> Server-Side Rendering (SSR)</strong>, <strong>Static Site Generation (SSG)</strong>, <strong>Incremental Static Regeneration (ISR)</strong>, og <strong>Client-Side Rendering (CSR)</strong>.
      </p>

      <h2 className="text-base">Server-Side Rendering (SSR)</h2>
      <p className="text-xs">
        Med SSR genereres HTML'en for en side på serveren ved hver anmodning. Dette sikrer, at data altid er opdateret, men det kan føre til længere load-tider.
      </p>
      <CodeBlock
        code={`export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li><strong>Fordele:</strong> Dynamisk indhold, altid opdateret.</li>
        <li><strong>Ulemper:</strong> Langsommere load-tid på grund af serverens arbejde.</li>
      </ul>

      <h2 className="text-base">Static Site Generation (SSG)</h2>
      <p className="text-xs">
        SSG genererer HTML under build-tid. Dette giver lynhurtige sider, men data opdateres kun, når siden genbuildes.
      </p>
      <CodeBlock
        code={`export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li><strong>Fordele:</strong> Hurtig load-tid, velegnet til statisk indhold.</li>
        <li><strong>Ulemper:</strong> Ikke egnet til ofte skiftende data.</li>
      </ul>

      <h5 className="text-base">Incremental Static Regeneration (ISR)</h5>
      <p className="text-xs">
        ISR kombinerer fordelene ved SSG og SSR. Du kan opdatere statisk genererede sider efter build-tid ved hjælp af et genopdateringsinterval.
      </p>
      <CodeBlock
        code={`export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10, // Opdater hver 10. sekund
  };
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li><strong>Fordele:</strong> Hurtige sider med mulighed for dynamisk opdatering.</li>
        <li><strong>Ulemper:</strong> Ikke egnet til realtidsdata.</li>
      </ul>

      <h2 className="text-base">Client-Side Rendering (CSR)</h2>
      <p className="text-xs">
        Med CSR renderes HTML'en i browseren ved hjælp af JavaScript. Data hentes ofte via API-anmodninger, når siden er indlæst.
      </p>
      <CodeBlock
        code={`import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`}
        language="javascript"
      />
      <ul className="text-xs">
        <li><strong>Fordele:</strong> Hurtig initial load med mulighed for dynamisk datahentning.</li>
        <li><strong>Ulemper:</strong> Afhængig af JavaScript, hvilket kan påvirke SEO og performance.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Valget af renderingsstrategi afhænger af applikationens krav. SSR og ISR er gode til dynamiske data, SSG er ideel til statisk indhold, og CSR fungerer bedst for applikationer, der kræver interaktivitet på klienten.
      </p>
    </div>
  );
}
