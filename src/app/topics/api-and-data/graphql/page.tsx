import CodeBlock from "@/components/CodeBlock";

export default function GraphQLPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">GraphQL</h1>
      <p className="text-xs">
        GraphQL er en API-standard, der gør det muligt for klienter at anmode om præcist de data, de har brug for. I modsætning til REST, hvor du har flere endepunkter for forskellige ressourcer, bruger GraphQL kun et enkelt endpoint, og anmodningen kan indeholde præcise datafelter, der skal hentes.
      </p>

      <h2 className="text-base">Hvordan GraphQL fungerer</h2>
      <p className="text-xs">
        Med GraphQL kan du anmode om data på en struktureret måde. I stedet for at få et helt datasæt tilbage, som i REST, kan du vælge de specifikke felter, du ønsker. Dette reducerer mængden af overflødige data og gør anmodningen mere effektiv.
      </p>

      <h2 className="text-base">Eksempel på GraphQL i Next.js</h2>
      <CodeBlock
        code={`// Install Apollo Client
// npm install @apollo/client graphql

// Importer Apollo Client
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialiser Apollo Client
const client = new ApolloClient({
  uri: "https://graphql.example.com", // Erstat med din GraphQL endpoint
  cache: new InMemoryCache(),
});

// Hent data i getServerSideProps
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql\`
      query {
        users {
          id
          name
          email
        }
      }
    \`,
  });

  return {
    props: {
      users: data.users,
    },
  };
}

// Komponent til at vise data
export default function UsersPage({ users }) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved GraphQL</h2>
      <ul className="text-xs">
        <li><strong>Effektiv datahentning:</strong> Du kan vælge de præcise felter, du har brug for, hvilket reducerer overflødige data.</li>
        <li><strong>Single endpoint:</strong> Alle forespørgsler går til ét endpoint, hvilket gør det lettere at arbejde med API'et.</li>
        <li><strong>Støtte til real-time data:</strong> Med GraphQL kan du også implementere real-time data via subscriptions.</li>
        <li><strong>Fleksibilitet:</strong> Klienten kan selv vælge, hvilke data der skal hentes, og hvordan de skal struktureres.</li>
      </ul>

      <h2 className="text-base">Next.js og GraphQL</h2>
      <p className="text-xs">
        I Next.js kan du bruge GraphQL til at hente data på server-siden ved hjælp af `getServerSideProps` eller `getStaticProps`. Apollo Client er et populært bibliotek, der gør det nemt at arbejde med GraphQL i React og Next.js. I eksemplet ovenfor bruger vi Apollo Client til at hente brugerdata via en GraphQL-forespørgsel.
      </p>
    </div>
  );
}
