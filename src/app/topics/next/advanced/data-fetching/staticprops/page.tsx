import CodeBlock from "@/components/CodeBlock";

export default function GetStaticPropsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">getStaticProps i Next.js</h1>

      <h2 className="text-base">Hvad er getStaticProps?</h2>
      <p className="text-xs">
        <code>getStaticProps</code> bruges til at hente data under build-processen. Det giver dig mulighed for at generere statiske sider (SSG), som kan caches og serveres hurtigt til brugere.
      </p>

      <h2 className="text-base">Eksempel: Grundlæggende getStaticProps</h2>
      <p className="text-xs">
        Her er et eksempel på, hvordan du bruger <code>getStaticProps</code> til at hente data under build:
      </p>

      <CodeBlock
        code={`export async function getStaticProps() {
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

      <h3 className="text-sm">Fordele ved getStaticProps</h3>
      <ul className="text-xs">
        <li><strong>Hurtig levering:</strong> Sider genereres én gang og serveres som statiske filer.</li>
        <li><strong>Velegnet til statiske data:</strong> Perfekt til sider, der ikke ændrer sig ofte.</li>
      </ul>
    </div>
  );
}
