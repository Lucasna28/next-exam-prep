import CodeBlock from "@/components/CodeBlock";

export default function GetServerSidePropsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">getServerSideProps i Next.js</h1>

      <h2 className="text-base">Hvad er getServerSideProps?</h2>
      <p className="text-xs">
        <code>getServerSideProps</code> er en funktion i Next.js, der bruges til at hente data på serveren ved hver request. Den muliggør server-side rendering (SSR) og sikrer, at dine sider altid har opdaterede data.
      </p>

      <h2 className="text-base">Eksempel: Grundlæggende getServerSideProps</h2>
      <p className="text-xs">
        Her er et eksempel på, hvordan du bruger <code>getServerSideProps</code> til at hente data fra en API:
      </p>

      <CodeBlock
        code={`export async function getServerSideProps() {
  const res = await fetch(&quot;https://api.example.com/data&quot;);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Page({ data }) {
  return <div>Data: {JSON.stringify(data)}</div>;
}`}
        language="javascript"
      />

      <h3 className="text-sm">Fordele ved getServerSideProps</h3>
      <ul className="text-xs">
        <li><strong>Opdaterede data:</strong> Perfekt til sider, der kræver friske data ved hver request.</li>
        <li><strong>Server-side rendering:</strong> Siderne renderes på serveren og sendes færdige til klienten.</li>
      </ul>
    </div>
  );
}
