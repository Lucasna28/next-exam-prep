import CodeBlock from "@/components/CodeBlock";

export default function DestructuringPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Destructuring</h1>
      <p className="text-xs">
        Destructuring i JavaScript er en praktisk syntaks, der gør det muligt at udtrække værdier fra arrays og objekter og gemme dem i individuelle variabler. Det reducerer behovet for flere linjer kode og gør koden mere læsbar.
      </p>

      <h2 className="text-base">Destructuring Arrays</h2>
      <p className="text-xs">
        Ved hjælp af destructuring kan du hurtigt udtrække værdier fra et array og tildele dem til variabler. Dette kan være især nyttigt, når du arbejder med funktioner, der returnerer flere værdier som et array.
      </p>

      <h3 className="text-base">Eksempel: Destructuring af et Array</h3>
      <CodeBlock
        code={`const numbers = [1, 2, 3];
const [first, second] = numbers;

console.log(first); // 1
console.log(second); // 2`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruges destructuring til at tildele de første to elementer fra <code>numbers</code> arrayet til variablerne <code>first</code> og <code>second</code>.
      </p>

      <h3 className="text-base">Eksempel: Destructuring med Default Værdier</h3>
      <CodeBlock
        code={`const numbers = [1];
const [first, second = 2] = numbers;

console.log(first); // 1
console.log(second); // 2`} 
        language="javascript"
      />
      <p className="text-xs">
        Du kan også tildele standardværdier i tilfælde af, at et element i arrayet ikke findes.
      </p>

      <h2 className="text-base">Destructuring Objekter</h2>
      <p className="text-xs">
        Destructuring kan også anvendes på objekter. Her kan du udtrække specifikke egenskaber og tildele dem til variabler. Det er meget nyttigt, når du arbejder med store objekter, hvor du kun har brug for nogle af egenskaberne.
      </p>

      <h3 className="text-base">Eksempel: Destructuring af et Objekt</h3>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const { name, age } = person;

console.log(name); // "Alice"
console.log(age); // 25`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruges destructuring til at udtrække egenskaberne <code>name</code> og <code>age</code> fra objektet <code>person</code>.
      </p>

      <h3 className="text-base">Eksempel: Destructuring med Renaming</h3>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const { name: fullName, age: yearsOld } = person;

console.log(fullName); // "Alice"
console.log(yearsOld); // 25`} 
        language="javascript"
      />
      <p className="text-xs">
        Hvis du ønsker at omdøbe egenskaberne under destructuring, kan du gøre det ved at bruge kolon-syntaksen. I eksemplet her omdøber vi <code>name</code> til <code>fullName</code> og <code>age</code> til <code>yearsOld</code>.
      </p>

      <h2 className="text-base">Destructuring i Funktionsparametre</h2>
      <p className="text-xs">
        Destructuring er også nyttigt i funktionsparametre, hvor du kan udtrække specifikke værdier fra objekter eller arrays, der sendes som argumenter.
      </p>

      <h3 className="text-base">Eksempel: Destructuring i Funktionsparametre</h3>
      <CodeBlock
        code={`function greet({ name, age }) {
  console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);
}

const person = { name: "Alice", age: 25 };
greet(person);`} 
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel bruger vi destructuring direkte i funktionsparametrene for at udtrække <code>name</code> og <code>age</code> fra objektet, der sendes som argument.
      </p>

      <h2 className="text-base">Destructuring i Arrays og Objekter Sammen</h2>
      <p className="text-xs">
        Du kan også kombinere destructuring af både arrays og objekter, hvilket giver mulighed for meget fleksible løsninger, når du arbejder med komplekse data.
      </p>

      <h3 className="text-base">Eksempel: Kombinering af Array og Objekt Destructuring</h3>
      <CodeBlock
        code={`const person = { name: "Alice", age: 25 };
const hobbies = ["reading", "coding"];
const { name, age } = person;
const [firstHobby, secondHobby] = hobbies;

console.log(name); // "Alice"
console.log(firstHobby); // "reading"`} 
        language="javascript"
      />
      <p className="text-xs">
        Her kombinerer vi både objekt- og array-destructuring for at udtrække både en persons data og en liste af hobbyer.
      </p>

      <h2 className="text-base">Fordele ved Destructuring</h2>
      <ul className="text-xs">
        <li><strong>Øger læsbarheden:</strong> Destructuring gør koden mere kompakt og nemmere at læse.</li>
        <li><strong>Reducerer boilerplate-kode:</strong> Det sparer tid ved at undgå gentagne opkald til objekt- eller array-egenskaber.</li>
        <li><strong>Øger fleksibiliteten:</strong> Du kan nemt tilpasse hvilken data du vil udtrække.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Destructuring er en kraftfuld funktion i JavaScript, der gør det lettere at arbejde med data, især når du arbejder med store objekter eller arrays. Det forbedrer koden både i form af læsbarhed og ved at gøre det nemmere at udtrække præcist de data, du har brug for. Det er et uundværligt værktøj i moderne JavaScript-udvikling.
      </p>
    </div>
  );
}
