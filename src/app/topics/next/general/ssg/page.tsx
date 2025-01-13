import CodeBlock from "@/components/CodeBlock";

export default function SSGPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Server Side Generation (SSG) i Next.js</h1>

      <h2 className="text-base">Hvad er Server Side Generation?</h2>
      <p className="text-xs">
        Server Side Generation (SSG) gøre det muligt at generere statiske sider ved build-tidspunktet. Dette betyder, at HTML-filer bliver genereret på serveren, inden de sendes til brugeren. 
      </p>
      <p className="text-xs">
        SSG bruges til sider, hvor indholdet ikke ændrer sig ofte, og hvor du ønsker hurtigt at servere præ-genereret HTML til brugerne.
      </p>

      <h2 className="text-base">Eksempel: Blogindlæg med SSG</h2>
      <p className="text-xs">
        For at generere et statisk blogindlæg, kan vi bruge funktionen `getStaticProps` i Next.js. Denne funktion henter data på build-tidspunktet og genererer HTML-filer til alle de statiske sider.
      </p>

      <CodeBlock
        code={`// pages/posts/[slug].tsx
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return <h1>Post: {post.title}</h1>;
}

// URL: /posts/min-første-post
// Vis: "Post: min-første-post"`} 
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer det?</h3>
      <ul className="text-xs">
        <li><strong>getStaticProps:</strong> Denne funktion henter data på build-tidspunktet. Her henter vi data om blogindlægget baseret på slug.</li>
        <li><strong>Pre-rendering:</strong> HTML bliver genereret for hver blogpost, så brugerne får en hurtigt loadende side.</li>
      </ul>

      <h5 className="text-base">Eksempel: Produktsider med SSG</h5>
      <p className="text-xs">
        Brug `getStaticProps` til at generere produktsider med data, som ikke ændrer sig ofte.
      </p>

      <CodeBlock
        code={`// pages/products/[id].tsx
export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  return <h1>Produkt: {product.name}</h1>;
}

// URL: /products/123
// Vis: "Produkt: Product 123"`} 
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Server Side Generation gør det muligt at oprette statiske sider, der er hurtige at servere. Brug `getStaticProps` til at hente data ved build-tidspunktet og generere præ-renderet HTML til din side.
      </p>
    </div>
  );
}
