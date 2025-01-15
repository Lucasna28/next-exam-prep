import CodeBlock from "@/components/CodeBlock";

export default function FetchApiPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Fetch API</h1>
      <p className="text-xs">
        Fetch API er et moderne Web API, der bruges til at hente ressourcer via HTTP. Det er en indbygget browserfunktion, som gør det muligt at lave asynkrone anmodninger til serveren og modtage data i JSON-format eller andre formater.
      </p>

      <h2 className="text-base">Hvordan Fetch API fungerer</h2>
      <p className="text-xs">
        Fetch API giver en JavaScript-funktion, der returnerer et promise, som kan bruges til at hente data fra en server. Den understøtter asynkrone operationer og gør det muligt at hente data uden at blokere brugergrænsefladen.
      </p>

      <h2 className="text-base">Eksempel på Fetch API i Next.js</h2>
      <CodeBlock
        code={`// Eksempel på Fetch API i Next.js

// Hente data i getServerSideProps eller getStaticProps
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  
  return {
    props: {
      posts: data,
    },
  };
}

// Komponent til at vise data
export default function PostsPage({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Fetch API</h2>
      <ul className="text-xs">
        <li><strong>Indbygget funktion:</strong> Fetch API er indbygget i moderne browsere, så det kræver ikke yderligere afhængigheder.</li>
        <li><strong>Asynkront:</strong> Fetch API returnerer et promise, som giver mulighed for at håndtere asynkrone operationer.</li>
        <li><strong>Støtter JSON:</strong> Fetch API understøtter nemt JSON som standard, som er et meget brugt format til dataudveksling.</li>
      </ul>

      <h2 className="text-base">Next.js og Fetch API</h2>
      <p className="text-xs">
        I Next.js kan Fetch API bruges både på serversiden via `getServerSideProps` eller `getStaticProps` samt på klientsiden via `useEffect`. Brug af Fetch API på serveren giver mulighed for at hente data under server-side rendering (SSR) og sende de nødvendige data som props til komponenterne.
      </p>
    </div>
  );
}
