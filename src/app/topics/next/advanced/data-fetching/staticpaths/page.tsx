import CodeBlock from "@/components/CodeBlock";

export default function GetStaticPathsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">getStaticPaths i Next.js</h1>

      <h2 className="text-base">Hvad er getStaticPaths?</h2>
      <p className="text-xs">
        <code>getStaticPaths</code> bruges sammen med <code>getStaticProps</code> til at generere dynamiske ruter. Det gør det muligt at bygge sider for specifikke parametre ved build-tidspunktet.
      </p>

      <h2 className="text-base">Eksempel: getStaticPaths med dynamiske ruter</h2>
      <p className="text-xs">
        Her er et eksempel, hvor <code>getStaticPaths</code> bruges til at generere sider baseret på data:
      </p>

      <CodeBlock
        code={`export async function getStaticPaths() {
  const res = await fetch(&quot;https://api.example.com/posts&quot;);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/posts/\${params.id}\`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  return <div>Post: {post.title}</div>;
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer getStaticPaths?</h3>
      <ul className="text-xs">
        <li><strong>paths:</strong> En liste over ruter, der skal genereres under build.</li>
        <li><strong>fallback:</strong> Bestemmer, hvordan Next.js håndterer ruter, der ikke er defineret i <code>paths</code>.</li>
      </ul>
    </div>
  );
}
