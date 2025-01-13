import CodeBlock from "@/components/CodeBlock";

export default function DynamicRoutingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Dynamic Routing i Next.js</h1>

      <h2 className="text-base">Hvad er Dynamic Routing?</h2>
      <p className="text-xs">
        Dynamic Routing gør det muligt at oprette sider med dynamiske URL’er,
        der indeholder variable værdier. Det bruges til f.eks. blogindlæg,
        produktsider og brugerprofiler.
      </p>

      <h2 className="text-base">Eksempel: Blogindlæg</h2>
      <p className="text-xs">
        Brug en fil som `pages/posts/[slug].tsx` til at håndtere blogindlæg med
        unikke slugs.
      </p>

      <CodeBlock
        code={`// pages/posts/[slug].tsx
export default function Post({ params }) {
  return <h1>Post: {params.slug}</h1>;
}

// URL: /posts/min-første-post
// Vis: "Post: min-første-post"`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer det?</h3>
      <ul className="text-xs">
        <li>
          <strong>Filnavn:</strong> `[slug].tsx` håndterer dynamiske URL’er.
        </li>
        <li>
          <strong>params.slug:</strong> URL’en `/posts/min-første-post` sætter
          `params.slug` til `min-første-post`.
        </li>
      </ul>

      <h2 className="text-base">Eksempel: Produktsider</h2>
      <p className="text-xs">
        Brug `pages/products/[id].tsx` til at håndtere produktsider med ID’er.
      </p>

      <CodeBlock
        code={`// pages/products/[id].tsx
export default function Product({ params }) {
  return <h1>Produkt: {params.id}</h1>;
}

// URL: /products/123
// Vis: "Produkt: 123"`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Dynamic Routing gør det nemt at håndtere dynamiske sider baseret på
        URL-parametre. Brug filnavne som `[slug]` og `[id]` til at skabe
        fleksible ruter.
      </p>
    </div>
  );
}
