import CodeBlock from "@/components/CodeBlock";

export default function AbortControllerPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">AbortController</h1>
      <p className="text-xs">
        AbortController er et Web API, der giver mulighed for at afbryde asynkrone operationer som fetch-anmodninger. Dette kan være nyttigt, hvis en brugers handlinger kræver, at en anmodning annulleres, f.eks. ved navigering væk fra en side eller når en anmodning tager for lang tid.
      </p>

      <h2 className="text-base">Hvordan AbortController fungerer</h2>
      <p className="text-xs">
        AbortController fungerer ved at give kontrol over asynkrone operationer, så de kan afbrydes, når det er nødvendigt. Du opretter en instans af AbortController, tilknytter den til en fetch-anmodning og kan derefter bruge den til at afbryde anmodningen, hvis det er nødvendigt.
      </p>

      <h2 className="text-base">Eksempel på AbortController i Next.js</h2>
      <CodeBlock
        code={`// AbortController i Next.js
import { useEffect, useState } from "react";

export default function FetchDataPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isAborted, setIsAborted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          setIsAborted(true); // Sæt status hvis anmodningen blev afbrudt
        } else {
          setError(error.message);
        }
      }
    }

    fetchData();

    // Afbryd anmodningen efter 3 sekunder
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // Ryd timeout når komponenten unmountes
    };
  }, []);

  if (isAborted) {
    return <div>Request was aborted due to timeout.</div>;
  }

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

      <h2 className="text-base">Fordele ved AbortController</h2>
      <ul className="text-xs">
        <li><strong>Afbryd operationer hurtigt:</strong> Giver mulighed for at annullere anmodninger, hvis de ikke længere er nødvendige (f.eks. ved navigering til en ny side).</li>
        <li><strong>Effektiv håndtering af tidouts:</strong> Bruges til at afbryde anmodninger, der tager for lang tid at fuldføre.</li>
        <li><strong>Forbedret kontrol:</strong> Øger kontrol over asynkrone operationer, især når det gælder API-kald eller andre lange operationer.</li>
      </ul>

      <h2 className="text-base">Next.js og AbortController</h2>
      <p className="text-xs">
        Next.js understøtter brugen af `AbortController` på klient-siden i komponenter. Dette gør det muligt at håndtere tidouts og afbrydelser effektivt, især ved indlæsning af data i klient-komponenter.
      </p>
    </div>
  );
}
