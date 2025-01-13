import CodeBlock from "@/components/CodeBlock";

export default function ISRPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Incremental Static Regeneration (ISR) i Next.js</h1>

      <h2 className="text-base">Hvad er Incremental Static Regeneration?</h2>
      <p className="text-xs">
        Incremental Static Regeneration (ISR) giver mulighed for at opdatere statisk genererede sider uden at bygge hele appen på ny. Det betyder, at du kan regenerere en statisk side baseret på en tidsplan (f.eks. hvert 10. sekund), hvilket er effektivt for sider med dynamisk indhold.
      </p>

      <h2 className="text-base">Eksempel: Blogindlæg med ISR</h2>
      <p className="text-xs">
        Brug `getStaticProps` med `revalidate` for at opdatere dine sider periodisk, uden at rebuild'e hele appen. Her er et eksempel på, hvordan du kan hente blogindlæg og bruge ISR:
      </p>

      <CodeBlock
        code={`// pages/posts/[slug].tsx
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  const post = await res.json();

  return {
    props: { post },
    revalidate: 10, // Regenerér denne side hvert 10. sekund
  };
}

export default function Post({ post }) {
  return <h1>{post.title}</h1>;
}

// URL: /posts/min-første-post
// Vis: "Post: min-første-post"`} 
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer det?</h3>
      <ul className="text-xs">
        <li><strong>Revalidate:</strong> Denne indstilling bestemmer, hvor ofte siden skal regenereres i baggrunden. I dette tilfælde regenereres den hvert 10. sekund.</li>
        <li><strong>getStaticProps:</strong> Bruges til at hente data på build-tidspunktet og med ISR for at opdatere siden løbende.</li>
      </ul>

      <h5 className="text-base">Eksempel: Produktsider med ISR</h5>
      <p className="text-xs">
        ISR kan også bruges til produktsider, hvor produktdata opdateres periodisk. Her er et eksempel på en produktside, der anvender ISR:
      </p>

      <CodeBlock
        code={`// pages/products/[id].tsx
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`);
  const product = await res.json();

  return {
    props: { product },
    revalidate: 30, // Regenerér denne side hvert 30. sekund
  };
}

export default function Product({ product }) {
  return <h1>{product.name}</h1>;
}

// URL: /products/123
// Vis: "Produkt: Product 123"`} 
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Incremental Static Regeneration giver dig mulighed for at holde statisk genererede sider opdaterede uden at skulle rebuild'e hele appen. Det er især nyttigt til sider, der opdateres ofte, såsom blogindlæg eller produktsider, og giver en god balance mellem ydeevne og opdatering af indhold.
      </p>
    </div>
  );
}
