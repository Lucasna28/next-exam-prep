import CodeBlock from "@/components/CodeBlock";

export default function ErrorHandlingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Error Handling (try/catch)</h1>
      <p className="text-xs">
        Error handling i JavaScript bruges til at fange og håndtere fejl i asynkrone operationer eller synkrone koder. Ved at bruge `try` og `catch` kan vi fange fejl og håndtere dem uden at applikationen crasher.
      </p>

      <h2 className="text-base">Hvordan Error Handling fungerer</h2>
      <p className="text-xs">
        Når du arbejder med asynkrone funktioner som `fetch`, vil du ofte støde på situationer, hvor der kan opstå fejl (f.eks. netværksfejl eller serverfejl). `try/catch` giver dig mulighed for at fange disse fejl og reagere på dem på en passende måde uden at stoppe eksekveringen af koden.
      </p>

      <h2 className="text-base">Eksempel på Error Handling i Next.js</h2>
      <CodeBlock
        code={`// Error handling med try/catch i Next.js
import { useEffect, useState } from "react";

export default function FetchDataPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      {data ? (
        <ul>
          {data.map((item: { id: number; title: string }) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Error Handling</h2>
      <ul className="text-xs">
        <li><strong>Forhindrer applikationen i at crashe:</strong> Fejl fanges og håndteres ordentligt, så brugeren kan få feedback i stedet for, at applikationen stopper.</li>
        <li><strong>Giver mulighed for fejlsøgning:</strong> Ved at logge fejl eller vise dem til brugeren kan du bedre forstå, hvad der gik galt og rette fejlen.</li>
        <li><strong>Kontrol over applikationen:</strong> Ved at bruge `try/catch` kan du beslutte, hvad der skal ske, hvis noget går galt, som f.eks. at vise en brugerfejl eller forsøge en ny handling.</li>
      </ul>

      <h2 className="text-base">Next.js og Error Handling</h2>
      <p className="text-xs">
        I Next.js kan du bruge `try/catch` til at håndtere fejl i både server-side og klient-side funktioner. Du kan f.eks. bruge det i server-side funktioner som `getServerSideProps` for at håndtere eventuelle fejl under datahentning, eller i komponentens klient-side logik, som vist i eksemplet ovenfor.
      </p>
    </div>
  );
}
