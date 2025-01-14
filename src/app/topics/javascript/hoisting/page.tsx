import CodeBlock from "@/components/CodeBlock";

export default function HoistingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Hoisting</h1>
      <p className="text-xs">
        Hoisting er et fænomen i JavaScript, hvor variabler og funktioner bliver "løftet" til toppen af deres respektive scopes under kompileringen, før koden faktisk bliver udført. Dette betyder, at du kan referere til variabler og funktioner, før de er blevet erklæret i koden. Hoisting er et af de grundlæggende koncepter, der kan føre til uventede resultater, hvis det ikke forstås korrekt.
      </p>

      <h2 className="text-base">Hvordan Hoisting virker</h2>
      <p className="text-xs">
        Når JavaScript tolker koden, løftes funktioner og variabler (med undtagelse af <code>let</code> og <code>const</code>) til toppen af deres scope. Det betyder, at deklarationen af variabler og funktioner bliver behandlet før koden bliver eksekveret. Det er vigtigt at bemærke, at kun deklarationen bliver løftet, ikke initialiseringen.
      </p>

      <CodeBlock
        code={`// Hoisting af variabler
console.log(x); // undefined
var x = 5;
console.log(x); // 5`}

        language="javascript"
      />

      <h2 className="text-base">Eksempel: Hoisting af variabler</h2>
      <p className="text-xs">
        I ovenstående eksempel bliver variablen <code>x</code> løftet til toppen af det globale scope, men dens værdi bliver ikke tildelt før efter første <code>console.log(x)</code>. Derfor får vi en <code>undefined</code> før vi tildeler værdien 5 til <code>x</code>.
      </p>

      <h2 className="text-base">Hoisting af funktioner</h2>
      <p className="text-xs">
        Når funktioner erklæres med <code>function</code>-nøgleordet, bliver både deklarationen og funktionen løftet til toppen. Dette gør det muligt at kalde funktionen før dens faktiske deklaration i koden.
      </p>

      <CodeBlock
        code={`// Hoisting af funktioner
hello(); // "Hej verden!"

function hello() {
  console.log("Hej verden!");
}`} 
        language="javascript"
      />

      <h2 className="text-base">Eksempel: Hoisting af funktioner</h2>
      <p className="text-xs">
        I dette eksempel kan vi kalde funktionen <code>hello()</code> før dens deklaration. JavaScript løfter hele funktionen til toppen, så vi kan bruge den hvor som helst i koden.
      </p>

      <h2 className="text-base">Hoisting med <code>let</code> og <code>const</code></h2>
      <p className="text-xs">
        Hoisting opfører sig anderledes med <code>let</code> og <code>const</code>. Selvom de bliver løftet til toppen af deres scope, får de ikke en initialisering som med <code>var</code>. Hvis du forsøger at få adgang til dem før de er initialiseret, vil du få en <code>ReferenceError</code>.
      </p>

      <CodeBlock
        code={`// Hoisting med let og const
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;`}
        language="javascript"
      />

      <h2 className="text-base">Eksempel: Hoisting med let og const</h2>
      <p className="text-xs">
        Her vil vi få en fejl, fordi <code>let</code> og <code>const</code> ikke tillader at blive brugt før deres initialisering, selvom de er hoisted til toppen af scope.
      </p>

      <h2 className="text-base">Fordele ved at forstå Hoisting</h2>
      <ul className="text-xs">
        <li><strong>Fejlfinding:</strong> Forståelse af hoisting hjælper med at undgå fejl, som kan opstå, når variabler eller funktioner bliver brugt før deres deklaration.</li>
        <li><strong>Bedre kodedesign:</strong> At være opmærksom på hoisting giver mulighed for at skrive mere præcise og fejlfri kode.</li>
        <li><strong>Forståelse af JavaScript:</strong> Hoisting er et grundlæggende koncept, som du skal forstå for effektivt at kunne arbejde med JavaScript.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Hoisting er et vigtigt fænomen i JavaScript, som kan føre til uventede resultater, hvis det ikke forstås korrekt. For variabler, der er erklæret med <code>var</code>, bliver deklarationen løftet til toppen, men initialiseringen sker stadig i den oprindelige rækkefølge. Funktionen erklæret med <code>function</code> bliver også løftet med både deklaration og implementering, mens <code>let</code> og <code>const</code> kun bliver løftet som "temporal dead zone" og kan ikke bruges før deres initialisering.
      </p>
    </div>
  );
}
