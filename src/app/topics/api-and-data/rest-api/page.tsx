import CodeBlock from "@/components/CodeBlock";

export default function RestApiPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">REST API</h1>
      <p className="text-xs">
        REST (Representational State Transfer) er en arkitektur for webservices, der kommunikerer over HTTP. REST API'er bruger HTTP-metoder som GET, POST, PUT og DELETE til at interagere med data. REST API'er er populære, fordi de er enkle at implementere og skalerbare.
      </p>

      <h2 className="text-base">Hvordan REST API fungerer</h2>
      <p className="text-xs">
        I et REST API hentes data ved at sende HTTP-anmodninger til specifikke endpoints. Hver anmodning kan indeholde parametre, som definerer, hvilke data der skal returneres. REST API'er bruger ofte JSON som standardformat til at sende data.
      </p>

      <h2 className="text-base">Eksempel på REST API i Next.js</h2>
      <CodeBlock
        code={`// Hent data fra et REST API i Next.js med fetch
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

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

      <h2 className="text-base">Fordele ved REST API</h2>
      <ul className="text-xs">
        <li><strong>Enkelhed:</strong> REST API'er er lette at forstå og implementere, hvilket gør dem til et godt valg til webapplikationer.</li>
        <li><strong>Skalérbarhed:</strong> REST API'er er skalerbare og kan håndtere mange samtidige anmodninger effektivt.</li>
        <li><strong>Uafhængighed:</strong> Klienter og servere er uafhængige af hinanden, hvilket giver fleksibilitet i udviklingen.</li>
      </ul>

      <h2 className="text-base">Next.js og REST API</h2>
      <p className="text-xs">
        I Next.js kan du bruge `fetch` eller et HTTP-bibliotek som Axios til at hente data fra REST API'er. Data kan hentes i server-side funktioner som `getServerSideProps` eller `getStaticProps` for at optimere indlæsningstiden, eller du kan bruge `useEffect` på klienten, som vist i eksemplet ovenfor.
      </p>
    </div>
  );
}
