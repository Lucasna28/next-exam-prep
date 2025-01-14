import CodeBlock from "@/components/CodeBlock";

export default function PromiseAsyncAwaitPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Promise og async/await</h1>
      <p className="text-xs">
        I JavaScript bruges Promises og async/await til at håndtere asynkrone operationer, som kan tage tid, såsom at hente data fra en server eller læse filer.
        <strong>Promise</strong> repræsenterer en værdi, som måske ikke er tilgængelig nu, men vil være det på et senere tidspunkt. 
        <strong>async/await</strong> gør det muligt at skrive asynkrone funktioner på en synkron måde, hvilket forbedrer læsbarheden.
      </p>

      <h2 className="text-base">Eksempel: Promise</h2>
      <p className="text-xs">
        En Promise kan være i én af tre tilstande: pending (afventer), fulfilled (opfyldt) eller rejected (afvist). Her er et eksempel på, hvordan en Promise kan bruges:
      </p>

      <CodeBlock
        code={`const fetchData = new Promise((resolve, reject) => {
  const data = true; // Simulerer om data blev hentet korrekt
  if (data) {
    resolve('Data hentet');
  } else {
    reject('Fejl ved hentning af data');
  }
});

fetchData
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
        language="javascript"
      />

      <h2 className="text-base">Eksempel: async/await</h2>
      <p className="text-xs">
        Med <code>async</code> og <code>await</code> kan vi håndtere asynkrone funktioner på en mere læsbar måde. Her er et eksempel på, hvordan async/await bruges til at hente data:
      </p>

      <CodeBlock
        code={`const fetchData = async () => {
  const data = true; // Simulerer om data blev hentet korrekt
  if (data) {
    return 'Data hentet';
  } else {
    throw new Error('Fejl ved hentning af data');
  }
};

const fetchDataAsync = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved async/await</h2>
      <ul className="text-xs">
        <li><strong>Forbedret læsbarhed:</strong> Async/await gør asynkrone operationer nemmere at læse og forstå sammenlignet med Promises.</li>
        <li><strong>Fejlbehandling:</strong> Med try/catch kan fejl håndteres på samme måde som synkrone funktioner.</li>
        <li><strong>Code flow:</strong> Koden ser mere ud som synkrone funktioner, hvilket giver en bedre struktur.</li>
      </ul>
    </div>
  );
}
