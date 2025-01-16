import CodeBlock from "@/components/CodeBlock";

export default function AxiosPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Axios</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Lær at bruge Axios til at håndtere HTTP requests i din applikation med
        bedre fejlhåndtering og mere fleksibilitet end fetch API&apos;et.
      </p>

      <h2 className="text-base">Hvordan Axios fungerer</h2>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Axios&apos; indbyggede transformers gør det nemt at håndtere request og
        response data automatisk.
      </p>

      <h2 className="text-base">Eksempel på Axios i Next.js</h2>
      <CodeBlock
        code={`// Install Axios
// npm install axios

// Import Axios
import axios from 'axios';

// Hente data i getServerSideProps eller getStaticProps
export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = response.data;

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

      <h2 className="text-base">Fordele ved Axios</h2>
      <ul className="text-xs text-gray-600 dark:text-gray-400">
        <li>
          <strong>Automatisk JSON parsing:</strong> Axios håndterer automatisk
          JSON-data, hvilket gør det lettere at arbejde med API&apos;er, der
          returnerer JSON.
        </li>
        <li>
          <strong>Fejlbehandling:</strong> Axios gør det nemt at håndtere fejl
          via &apos;catch&apos; eller &apos;try/catch&apos; i async funktioner.
        </li>
        <li>
          <strong>Understøttelse af forespørgsels- og postdata:</strong> Axios
          understøtter at sende data i anmodninger og arbejder godt med både GET
          og POST metoder.
        </li>
        <li>
          <strong>Støtte til async/await:</strong> Axios fungerer godt med
          moderne JavaScript-funktioner som &apos;async/await&apos;.
        </li>
      </ul>

      <h2 className="text-base">Next.js og Axios</h2>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Axios&apos; interceptors giver mulighed for at tilføje ekstra logik før
        hver request sendes eller efter hvert response modtages.
      </p>
    </div>
  );
}
