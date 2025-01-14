import CodeBlock from "@/components/CodeBlock";

export default function SpreadRestOperatorsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Spread og Rest Operators</h1>
      <p className="text-xs">
        Spread og Rest operators, der begge bruger tre prikker (<code>...</code>), blev introduceret i ECMAScript 6 (ES6) og er meget nyttige til at arbejde med arrays, objekter og funktioner i JavaScript. De deler nogle syntaktiske ligheder, men bruges på forskellige måder afhængigt af konteksten.
      </p>

      <h2 className="text-base">Spread Operator</h2>
      <p className="text-xs">
        Spread operatoren (<code>...</code>) bruges til at sprede værdierne af en array eller et objekt ud i en ny array eller et objekt. Den hjælper med at oprette kopier af objekter eller arrays, eller til at kombinere flere arrays eller objekter.
      </p>

      <h3 className="text-base">Eksempel: Sprede et Array</h3>
      <CodeBlock
        code={`const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel spreder vi værdierne fra <code>numbers</code> arrayet ud i et nyt array <code>newNumbers</code>, og tilføjer derefter yderligere elementer.
      </p>

      <h3 className="text-base">Eksempel: Sprede et Objekt</h3>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };

console.log(updatedPerson); // { name: "Alice", age: 26 }`} 
        language="javascript"
      />
      <p className="text-xs">
        Her spreder vi et objekt <code>person</code> ud i et nyt objekt <code>updatedPerson</code>, og ændrer derefter <code>age</code> feltet.
      </p>

      <h2 className="text-base">Rest Operator</h2>
      <p className="text-xs">
        Rest operatoren bruges til at samle flere elementer i en array eller objekt. I stedet for at sprede værdierne ud, samler rest operatoren argumenter eller elementer sammen i en enkelt struktur.
      </p>

      <h3 className="text-base">Eksempel: Samle Rest Argumenter i en Funktion</h3>
      <CodeBlock
        code={`function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruger vi rest operatoren til at samle et vilkårligt antal argumenter i en <code>numbers</code> array, som derefter bliver summen af alle argumenterne i funktionen <code>sum</code>.
      </p>

      <h3 className="text-base">Eksempel: Rest Operator i Objekter</h3>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25, city: "New York" };
const { name, ...rest } = person;

console.log(name); // "Alice"
console.log(rest); // { age: 25, city: "New York" }`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruger vi rest operatoren til at udtrække nogle værdier fra et objekt og samle resten i en ny variabel <code>rest</code>.
      </p>

      <h2 className="text-base">Forskellen mellem Spread og Rest</h2>
      <p className="text-xs">
        Den vigtigste forskel mellem Spread og Rest operators ligger i konteksten, hvor de bruges. Spread bruges til at sprede værdier ud (arrays eller objekter), mens Rest bruges til at samle værdier sammen i et array eller objekt.
      </p>

      <h3 className="text-base">Forskellen i Kodeeksempler</h3>
      <ul className="text-xs">
        <li><strong>Spread:</strong> Spreder værdierne fra en eksisterende array eller objekt til et nyt objekt/array.</li>
        <li><strong>Rest:</strong> Samler et vilkårligt antal elementer i en array eller et objekt.</li>
      </ul>

      <h2 className="text-base">Eksempler på Kombination af Spread og Rest</h2>
      <p className="text-xs">
        Du kan kombinere både spread og rest operators i ét udtryk for at opnå mere kompleks funktionalitet.
      </p>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25, city: "New York" };

const { name, ...rest } = person;
const updatedPerson = { ...rest, city: "Los Angeles" };

console.log(updatedPerson); // { age: 25, city: "Los Angeles" }`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruger vi både rest operatoren til at udtrække dele af objektet og spread operatoren til at opdatere objektet.
      </p>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Spread og Rest operators er ekstremt nyttige i JavaScript til at arbejde med arrays og objekter. De gør koden mere kompakt og lettere at forstå, samtidig med at de øger fleksibiliteten og funktionaliteten. Hvis du arbejder med variabelt antal argumenter, sammensmeltning af objekter eller arrays, eller opdatering af data på en enkel måde, er disse operators uundværlige værktøjer i moderne JavaScript-udvikling.
      </p>
    </div>
  );
}
