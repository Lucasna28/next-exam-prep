import CodeBlock from "@/components/CodeBlock";

export default function TypeNarrowingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Type Narrowing i TypeScript</h1>
      <p className="text-xs">
        <strong>Type Narrowing</strong> i TypeScript refererer til processen, hvor du begrænser en type til en mere specifik type ved hjælp af kontrolstrukturer som <code>if</code>, <code>switch</code> eller <code>typeof</code>. TypeScript hjælper med at bestemme den mest præcise type baseret på betingelser, hvilket giver en mere præcis typekontrol.
      </p>

      <h2 className="text-base">Eksempel: Type Narrowing med <code>typeof</code></h2>
      <p className="text-xs">
        TypeScript kan bruge operatoren <code>typeof</code> til at indsnævre typen af en variabel baseret på dens værdi.
      </p>

      <CodeBlock
        code={`function printLength(value: string | string[]) {
  if (typeof value === 'string') {
    console.log(value.length); // TypeScript ved, at 'value' er en 'string'
  } else {
    console.log(value.length); // TypeScript ved, at 'value' er en 'string[]'
  }
}

printLength("Hello"); // 5
printLength(["Hello", "World"]); // 2`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Type Narrowing?</h3>
      <p className="text-xs">
        Når du bruger kontrolstrukturer som <code>if</code> eller <code>typeof</code> til at tjekke typen af en værdi, vil TypeScript automatisk begrænse typen til det mere specifikke tilfælde. I eksemplet ovenfor bestemmer TypeScript, om <code>value</code> er en <code>string</code> eller et <code>string[]</code> og giver dig mulighed for at få adgang til den specifikke egenskab som <code>length</code>.
      </p>

      <h2 className="text-base">Eksempel: Type Narrowing med <code>instanceof</code></h2>
      <p className="text-xs">
        Du kan også bruge <code>instanceof</code> til at tjekke, om et objekt er en instans af en bestemt klasse. Dette hjælper TypeScript med at bestemme objektets type og give præcise oplysninger om objektets egenskaber.
      </p>

      <CodeBlock
        code={`class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeNoise(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript ved, at 'animal' er en 'Dog'
  } else {
    animal.meow(); // TypeScript ved, at 'animal' er en 'Cat'
  }
}

makeNoise(new Dog()); // 'Woof!'
makeNoise(new Cat()); // 'Meow!'`}
        language="typescript"
      />

      <h3 className="text-sm">Fordele ved Type Narrowing</h3>
      <ul className="text-xs">
        <li><strong>Præcision:</strong> Type Narrowing giver mere præcise typer i betingede situationer, hvilket forbedrer typekontrollen og hjælper med at undgå fejl.</li>
        <li><strong>Forbedret fejlfinding:</strong> Når typerne er mere specifikke, bliver det lettere at finde fejl og problemer i koden.</li>
        <li><strong>Fleksibilitet:</strong> Type Narrowing giver mulighed for at håndtere flere typer i forskellige betingelser, hvilket gør koden mere fleksibel.</li>
      </ul>

      <h2 className="text-base">Eksempel: Type Narrowing med <code>switch</code></h2>
      <p className="text-xs">
        Du kan bruge <code>switch</code> til at indsnævre typen baseret på forskellige cases. Dette kan være nyttigt, når du arbejder med flere typer og ønsker at håndtere dem på en struktureret måde.
      </p>

      <CodeBlock
        code={`type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape) {
  switch (shape) {
    case 'circle':
      return Math.PI * 10 * 10; // TypeScript ved, at 'shape' er 'circle'
    case 'square':
      return 10 * 10; // TypeScript ved, at 'shape' er 'square'
    case 'triangle':
      return 0.5 * 10 * 10; // TypeScript ved, at 'shape' er 'triangle'
  }
}

console.log(getArea('circle')); // 314.159...
console.log(getArea('square')); // 100`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Type Narrowing er en kraftfuld teknik i TypeScript, som giver dig mulighed for at indsnævre typer til mere præcise former baseret på kontrolstrukturer. Ved at bruge teknikker som <code>typeof</code>, <code>instanceof</code>, og <code>switch</code> kan du sikre, at du arbejder med den mest præcise type i hver situation, hvilket resulterer i færre fejl og mere præcise typer i din applikation.
      </p>
    </div>
  );
}
