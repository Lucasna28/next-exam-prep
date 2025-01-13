import CodeBlock from "@/components/CodeBlock";

export default function DynamicRoutingPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Dynamic Routing i Next.js</h1>

      <h2>Hvad er Dynamic Routing?</h2>
      <p>
        Dynamic Routing i Next.js giver dig mulighed for at oprette sider, hvor URL-strukturen er dynamisk og kan indeholde variable værdier. Dette gør det muligt at skabe fleksible og dynamiske ruter uden at skulle oprette individuelle filer for hver URL.
      </p>
      <p>
        Denne funktion er især nyttig, når du skal oprette sider, der afhænger af variable data som:
      </p>

      <ul>
        <li>Blogindlæg med forskellige slugs</li>
        <li>Produkt sider med forskellige ID'er</li>
        <li>Brugerprofiler med forskellige brugernavne</li>
      </ul>

      <h2>Hvordan fungerer Dynamic Routing?</h2>
      <p>
        I Next.js skaber du dynamiske ruter ved at bruge en speciel syntaks i filnavnene, hvor du placerer dynamiske parametre i hakparenteser (f.eks. `[slug]` eller `[id]`). Når en bruger navigerer til en URL, hvor parameteren matcher det, der er angivet i filnavnet, bliver den dynamiske komponent rendret.
      </p>

      <h2>Eksempel på Dynamic Routing</h2>
      <p>
        Lad os sige, at vi ønsker at oprette en rute for blogindlæg, hvor hvert indlæg har en unik slug i URL'en. For at gøre dette, opretter vi en fil med navnet `pages/posts/[slug].tsx`. Dette vil skabe en dynamisk rute, som kan håndtere forskellige slugs.
      </p>
      
      <CodeBlock
        code={`// pages/posts/[slug].tsx
export default function Post({ params }) {
  return <h1>Post: {params.slug}</h1>;
}

// URL: /posts/min-første-post
// Vil vise: "Post: min-første-post"`} 
        language="typescript"
      />
      
      <h3>Hvad sker der i koden?</h3>
      <ul>
        <li><strong>Dynamic File Naming</strong>: Filen `pages/posts/[slug].tsx` betyder, at Next.js vil generere en side for hver URL, der matcher `/posts/*`, hvor `*` er den dynamiske parameter (i dette tilfælde slugen).</li>
        <li><strong>params.slug</strong>: Når en bruger navigerer til `/posts/min-første-post`, vil `params.slug` blive sat til `min-første-post`. Dette gør det muligt at vise indholdet af det specifikke blogindlæg baseret på slug-værdien i URL'en.</li>
        <li><strong>URL Matching</strong>: Hvis en bruger besøger en URL som `/posts/min-første-post`, vil din komponent vise teksten "Post: min-første-post".</li>
      </ul>

      <h2>Avanceret Eksempel: Produktdetaljer</h2>
      <p>
        En anden situation, hvor Dynamic Routing er nyttig, er når vi skal vise detaljer for et produkt baseret på et unikt ID. I dette tilfælde kan vi oprette en dynamisk rute for produktet ved at bruge ID'et som en del af URL'en.
      </p>

      <CodeBlock
        code={`// pages/products/[id].tsx
export default function Product({ params }) {
  return <h1>Produkt Detaljer for ID: {params.id}</h1>;
}

// URL: /products/123
// Vil vise: "Produkt Detaljer for ID: 123"`} 
        language="typescript"
      />

      <h3>Hvordan fungerer det?</h3>
      <ul>
        <li><strong>Dynamic Parameter</strong>: Filen `pages/products/[id].tsx` gør det muligt at oprette en side for enhver URL, der matcher `/products/*`, hvor `*` er det dynamiske ID.</li>
        <li><strong>params.id</strong>: Når brugeren navigerer til en URL som `/products/123`, vil `params.id` blive sat til `123`, og produktdetaljerne for dette ID vil blive vist.</li>
        <li><strong>Fleksibilitet</strong>: Denne tilgang gør det muligt at oprette en dynamisk rute, som automatisk håndterer alle produktsider med forskellige ID'er.</li>
      </ul>

      <h2>Hvordan Henter Vi Data til Dynamiske Sider?</h2>
      <p>
        Når du arbejder med dynamiske ruter, er det ofte nødvendigt at hente data fra en ekstern kilde (f.eks. en API) baseret på den dynamiske parameter i URL'en. Du kan gøre dette ved at bruge Next.js' server-side funktioner som `getStaticProps` eller `getServerSideProps` til at hente data, før siden bliver rendret.
      </p>

      <h3>Eksempel med getStaticProps</h3>
      <CodeBlock
        code={`// pages/posts/[slug].tsx
import { getStaticProps, getStaticPaths } from 'next';

export default function Post({ post }) {
  return <h1>{post.title}</h1>;
}

export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  const post = await res.json();

  return { props: { post } };
}`} 
        language="typescript"
      />
      
      <h3>Forklaring på getStaticProps og getStaticPaths:</h3>
      <ul>
        <li><strong>getStaticPaths</strong>: Denne funktion bruges til at generere alle de mulige dynamiske ruter (f.eks. for hver blogpost). Den returnerer et array af `paths`, som Next.js bruger til at skabe de statiske sider.</li>
        <li><strong>getStaticProps</strong>: Når en rute er valgt, henter `getStaticProps` dataene for den specifikke side (f.eks. et blogindlæg) og sender dem som props til komponenten, som derefter bruges til at vise indholdet.</li>
        <li><strong>Static Generation</strong>: Denne tilgang gør det muligt for Next.js at bygge de nødvendige sider på serveren ved byggetid og cache dem, hvilket resulterer i hurtigere indlæsningstider.</li>
      </ul>

      <h2>Konklusion</h2>
      <p>
        Dynamic Routing i Next.js giver dig mulighed for at oprette fleksible og dynamiske sider, der kan ændre sig afhængigt af URL-parametre. Ved at bruge dynamiske filnavne og Next.js' funktioner som `getStaticProps` og `getStaticPaths` kan du nemt håndtere sider med forskellige data, som blogindlæg eller produktdetaljer, uden at skulle oprette separate filer for hver mulig URL.
      </p>
    </div>
  );
}
