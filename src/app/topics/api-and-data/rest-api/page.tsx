import CodeBlock from "@/components/CodeBlock";

export default function RestApiPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">REST API</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        REST API&apos;er er en arkitekturstil for at designe
        netværksapplikationer. De bruger HTTP metoder som GET, POST, PUT og
        DELETE til at udføre CRUD operationer på ressourcer.
      </p>

      <h2 className="text-base">Hvordan REST API fungerer</h2>
      <p className="text-xs">
        I et REST API hentes data ved at sende HTTP-anmodninger til specifikke
        endpoints. Hver anmodning kan indeholde parametre, som definerer, hvilke
        data der skal returneres. REST API&apos;er bruger ofte JSON som
        standardformat til at sende data.
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
        <li>
          <strong>Enkelhed:</strong> REST API&apos;er er lette at forstå og
          implementere, hvilket gør dem til et godt valg til webapplikationer.
        </li>
        <li>
          <strong>Skalérbarhed:</strong> REST API&apos;er er skalerbare og kan
          håndtere mange samtidige anmodninger effektivt.
        </li>
        <li>
          <strong>Uafhængighed:</strong> Klienter og servere er uafhængige af
          hinanden, hvilket giver fleksibilitet i udviklingen.
        </li>
      </ul>

      <h2 className="text-base">Next.js og REST API</h2>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Next.js&apos; API routes gør det nemt at bygge REST API&apos;er med
        server-side logik.
      </p>

      <li>GET /api/users - Hent alle brugere</li>
      <li>POST /api/users - Opret ny bruger</li>
    </div>
  );
}
