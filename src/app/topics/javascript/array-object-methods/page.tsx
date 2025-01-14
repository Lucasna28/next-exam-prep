import CodeBlock from "@/components/CodeBlock";

export default function ArrayObjectMethodsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Array og Object Methods</h1>
      <p className="text-xs">
        JavaScript tilbyder en række indbyggede metoder til både arrays og objekter, som gør det nemt at manipulere data. Disse metoder kan hjælpe med at udføre almindelige operationer som at filtrere, mappe, finde, reducere og ændre strukturen af arrays og objekter. Vi vil gennemgå nogle af de mest anvendte metoder.
      </p>

      <h2 className="text-base">Array Metoder</h2>

      <h3 className="text-base">map()</h3>
      <p className="text-xs">
        <code>map()</code> metoden bruges til at iterere over et array og transformere hvert element i et nyt array. Det returnerede array indeholder de transformerede elementer.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]`} 
        language="javascript"
      />

      <h3 className="text-base">filter()</h3>
      <p className="text-xs">
        <code>filter()</code> metoden bruges til at filtrere et array baseret på en betingelse, og returnere et nyt array kun med de elementer, der opfylder betingelsen.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]`} 
        language="javascript"
      />

      <h3 className="text-base">reduce()</h3>
      <p className="text-xs">
        <code>reduce()</code> metoden bruges til at akkumulere et array til en enkelt værdi. Den tager en callback-funktion med to parametre: en accumulator og det aktuelle array-element.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10`} 
        language="javascript"
      />

      <h3 className="text-base">find()</h3>
      <p className="text-xs">
        <code>find()</code> metoden returnerer det første element i et array, der opfylder en given betingelse.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(num => num > 3);

console.log(found); // 4`} 
        language="javascript"
      />

      <h2 className="text-base">Object Metoder</h2>

      <h3 className="text-base">Object.keys()</h3>
      <p className="text-xs">
        <code>Object.keys()</code> metoden returnerer et array med alle nøglerne i et objekt.
      </p>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const keys = Object.keys(person);

console.log(keys); // ["name", "age"]`} 
        language="javascript"
      />

      <h3 className="text-base">Object.values()</h3>
      <p className="text-xs">
        <code>Object.values()</code> metoden returnerer et array med alle værdierne i et objekt.
      </p>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const values = Object.values(person);

console.log(values); // ["Alice", 25]`} 
        language="javascript"
      />

      <h3 className="text-base">Object.entries()</h3>
      <p className="text-xs">
        <code>Object.entries()</code> metoden returnerer et array af array-par, hvor hvert array indeholder en nøgle og dens værdi.
      </p>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const entries = Object.entries(person);

console.log(entries); // [["name", "Alice"], ["age", 25]]`} 
        language="javascript"
      />

      <h2 className="text-base">Andre nyttige metoder</h2>

      <h3 className="text-base">forEach()</h3>
      <p className="text-xs">
        <code>forEach()</code> metoden bruges til at iterere over hvert element i et array og udføre en handling for hvert element, men den returnerer ikke noget værdi.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));`} 
        language="javascript"
      />

      <h3 className="text-base">some() og every()</h3>
      <p className="text-xs">
        <code>some()</code> returnerer <code>true</code> hvis mindst et element i arrayet opfylder betingelsen, mens <code>every()</code> returnerer <code>true</code> kun hvis alle elementer opfylder betingelsen.
      </p>
      <CodeBlock
        code={`const numbers = [1, 2, 3, 4];

const someEven = numbers.some(num => num % 2 === 0);
const everyEven = numbers.every(num => num % 2 === 0);

console.log(someEven); // true
console.log(everyEven); // false`} 
        language="javascript"
      />

      <h2 className="text-base">Fordele ved at bruge Array og Object Metoder</h2>
      <ul className="text-xs">
        <li><strong>Reducerer kodekompleksitet:</strong> Mange af disse metoder giver enklere og mere læsbar kode end traditionelle loops.</li>
        <li><strong>Funktionsbaseret programmering:</strong> Metoder som <code>map()</code>, <code>filter()</code>, og <code>reduce()</code> opfordrer til funktionsbaseret programmering og er meget fleksible.</li>
        <li><strong>Lettere vedligeholdelse:</strong> At bruge indbyggede metoder gør koden lettere at vedligeholde, da de er veldokumenterede og velkendte.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        JavaScript’s array- og object-metoder giver en stor fordel i forhold til at arbejde med data. De gør det muligt at udføre komplekse operationer som filtrering, transformation og reduktion af data med meget mindre kode og med højere læsbarhed. At mestre disse metoder er essentielt for effektivt JavaScript-programmering.
      </p>
    </div>
  );
}
