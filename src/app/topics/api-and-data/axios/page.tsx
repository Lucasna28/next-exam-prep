import CodeBlock from "@/components/CodeBlock";

export default function AxiosPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Axios</h1>
      <p className="text-xs">
        Axios er en populær HTTP-klient, der bruges til at lave anmodninger til API'er i JavaScript. Den fungerer på både klientsiden og serversiden og tilbyder en række funktioner, der gør det lettere at håndtere HTTP-anmodninger og -svar.
      </p>

      <h2 className="text-base">Hvordan Axios fungerer</h2>
      <p className="text-xs">
        Axios gør det nemt at lave HTTP-anmodninger med metoder som GET, POST, PUT, DELETE osv. Axios returnerer et promise, og du kan bruge `then` eller `async/await` til at håndtere det asynkrone svar. Axios understøtter også funktioner som automatisk konvertering af JSON-data og håndtering af fejl.
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
      <ul className="text-xs">
        <li><strong>Automatisk JSON parsing:</strong> Axios håndterer automatisk JSON-data, hvilket gør det lettere at arbejde med API'er, der returnerer JSON.</li>
        <li><strong>Fejlbehandling:</strong> Axios gør det nemt at håndtere fejl via `catch` eller `try/catch` i async funktioner.</li>
        <li><strong>Understøttelse af forespørgsels- og postdata:</strong> Axios understøtter at sende data i anmodninger og arbejder godt med både GET og POST metoder.</li>
        <li><strong>Støtte til async/await:</strong> Axios fungerer godt med moderne JavaScript-funktioner som `async/await`.</li>
      </ul>

      <h2 className="text-base">Next.js og Axios</h2>
      <p className="text-xs">
        I Next.js kan Axios bruges på både server- og klientsiden. Når du bruger Axios i Next.js, er det almindeligt at hente data i `getServerSideProps` eller `getStaticProps`, så du kan sende data som props til dine komponenter. Axios giver dig mulighed for at hente data fra eksterne API'er og bruge dem i dine sider, samtidig med at du kan håndtere fejl effektivt.
      </p>
    </div>
  );
}
