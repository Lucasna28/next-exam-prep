import CodeBlock from "@/components/CodeBlock";

export default function CallbackFunctionsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Callback Functions</h1>
      <p className="text-xs">
        Callback-funktioner er funktioner, der sendes som argumenter til andre funktioner og bliver udført på et senere tidspunkt. Dette bruges ofte i asynkrone operationer eller når vi har brug for at udføre en funktion, når en handling er færdig.
      </p>

      <h2 className="text-base">Eksempel på en Callback Function</h2>
      <p className="text-xs">
        Callback-funktioner bruges ofte i JavaScript, især når vi arbejder med asynkrone operationer som at hente data, eller når vi har brug for at håndtere brugernes handlinger (f.eks. klik på en knap).
      </p>

      <CodeBlock
        code={`function greet(name, callback) {
  console.log('Hej, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Farvel!');
}

greet('Alice', sayGoodbye);`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan Callback Functions virker</h2>
      <p className="text-xs">
        I eksemplet ovenfor er <code>greet</code> funktionen, der tager et navn og en callback-funktion som argumenter. Når <code>greet</code> er færdig med at udskrive navnet, kalder den <code>callback()</code>, som i dette tilfælde er <code>sayGoodbye</code>.
      </p>

      <h2 className="text-base">Fordele ved Callback Functions</h2>
      <ul className="text-xs">
        <li><strong>Asynkrone operationer:</strong> Callback-funktioner gør det muligt at håndtere asynkrone handlinger og undgå blokering af kode.</li>
        <li><strong>Modulær kode:</strong> Ved at sende funktioner som argumenter kan vi skrive mere genbrugelig og fleksibel kode.</li>
        <li><strong>Bedre kontrol:</strong> Callback-funktioner giver kontrol over, hvad der sker efter at en operation er afsluttet.</li>
      </ul>

      <h2 className="text-base">Problemer med Callback Hell</h2>
      <p className="text-xs">
        Når vi bruger callback-funktioner i flere niveauer, kan vi ende med et problem kaldet <strong>Callback Hell</strong>, hvor funktioner er næstet indlejret i hinanden. Dette kan gøre koden svær at læse og vedligeholde. Dette problem kan ofte løses ved at bruge Promises eller async/await.
      </p>

      <CodeBlock
        code={`function fetchData(callback) {
  // Simulerer asynkrone operation
  setTimeout(() => {
    console.log('Data hentet');
    callback();
  }, 1000);
}

fetchData(() => {
  fetchData(() => {
    fetchData(() => {
      console.log('Alle data hentet');
    });
  });
});`}
        language="javascript"
      />

      <h2 className="text-base">Løsninger til Callback Hell</h2>
      <ul className="text-xs">
        <li><strong>Promises:</strong> Brug Promises til at håndtere asynkrone operationer på en mere læsbar måde.</li>
        <li><strong>Async/Await:</strong> Async/await giver en synkron syntaks for asynkrone operationer og hjælper med at undgå callback hell.</li>
      </ul>
    </div>
  );
}
