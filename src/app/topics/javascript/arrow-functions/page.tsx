import CodeBlock from "@/components/CodeBlock";

export default function ArrowFunctionsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Arrow Functions</h1>
      <p className="text-xs">
        Arrow functions i JavaScript er en kortere syntaks til at skrive
        funktioner. De blev introduceret i ECMAScript 6 (ES6) og tilbyder en
        mere kompakt måde at definere funktioner på. De har en række særlige
        egenskaber, der adskiller dem fra traditionelle funktioner, især når det
        kommer til håndtering af <code>this</code>.
      </p>

      <h2 className="text-base">Hvordan Arrow Functions virker</h2>
      <p className="text-xs">
        En almindelig funktion defineres normalt sådan her:
      </p>
      <CodeBlock
        code={`function add(a, b) {
  return a + b;
}`}
        language="javascript"
      />
      <p className="text-xs">
        En arrow function (pilfunktion) derimod, kan skrives på denne måde:
      </p>
      <CodeBlock code={`const add = (a, b) => a + b;`} language="javascript" />
      <p className="text-xs">
        Den vigtigste forskel her er den kortere syntaks, hvor du undgår at
        bruge <code>function</code> nøgleordet. Arrow functions returnerer
        implicit værdien af udtrykket, hvis der kun er én linje i funktionen.
      </p>

      <h2 className="text-base">Fordele ved Arrow Functions</h2>
      <ul className="text-xs">
        <li>
          <strong>Kortere syntaks:</strong> Arrow functions gør koden mere
          kompakt og læsbar.
        </li>
        <li>
          <strong>Implicit return:</strong> Hvis der kun er én linje i
          funktionen, bliver resultatet automatisk returneret, hvilket sparer
          dig for at skrive <code>return</code>.
        </li>
        <li>
          <strong>
            Ingen egen <code>this</code> binding:
          </strong>{" "}
          En af de største forskelle er, at arrow functions ikke har deres egen{" "}
          <code>this</code>-værdi. De binder <code>this</code> til den omgivende
          kontekst.
        </li>
      </ul>

      <h2 className="text-base">Eksempel på Arrow Function</h2>
      <p className="text-xs">
        Her er et simpelt eksempel på en arrow function, der lægger to tal
        sammen:
      </p>
      <CodeBlock
        code={`const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // 6`}
        language="javascript"
      />
      <p className="text-xs">
        I dette eksempel definerer vi en arrow function kaldet{" "}
        <code>multiply</code>, som tager to argumenter, <code>a</code> og{" "}
        <code>b</code>, og returnerer deres produkt.
      </p>

      <h2 className="text-base">
        Arrow Functions og <code>this</code>
      </h2>
      <p className="text-xs">
        En vigtig forskel ved arrow functions er, at de ikke opretter deres egen{" "}
        <code>this</code> værdi. I stedet binder de <code>this</code> fra deres
        omgivende kontekst (som den funktion, de blev oprettet i).
      </p>
      <p className="text-xs">
        I en almindelig funktion ville <code>this</code> referere til den
        funktion, hvor den blev kaldt, men i en arrow function refererer{" "}
        <code>this</code> til den oprindelige kontekst, hvor funktionen blev
        oprettet.
      </p>
      <CodeBlock
        code={`function Person() {
  this.name = "Alice";
  
  setTimeout(function() {
    console.log(this.name); // undefined
  }, 1000);
}

new Person();

function PersonWithArrow() {
  this.name = "Bob";
  
  setTimeout(() => {
    console.log(this.name); // "Bob"
  }, 1000);
}

new PersonWithArrow();`}
        language="javascript"
      />
      <p className="text-xs">
        I det første eksempel, hvor vi bruger en almindelig funktion, vil{" "}
        <code>this</code> i <code>setTimeout</code> referere til{" "}
        <code>window</code> (eller <code>undefined</code> i strict mode), da den
        ikke er bundet til <code>Person</code>-funktionen. I det andet eksempel,
        hvor vi bruger en arrow function, vil <code>this</code> referere til den
        oprindelige kontekst, som er <code>PersonWithArrow</code> funktionen.
      </p>

      <h2 className="text-base">Syntaks for Arrow Functions</h2>
      <p className="text-xs">
        Arrow functions har en meget kompakt syntaks. Her er nogle eksempler på,
        hvordan de kan bruges:
      </p>
      <ul className="text-xs">
        <li>
          <strong>Enkel funktion uden parametre:</strong>{" "}
          <code>() ={">"} 'Hello World'</code>
        </li>
        <li>
          <strong>Enkel funktion med ét parameter:</strong>{" "}
          <code>x ={">"} x * 2</code>
        </li>
        <li>
          <strong>Enkel funktion med flere parametre:</strong>{" "}
          <code>(x, y) =&gt; x + y</code>
        </li>
        <li>
          <strong>Funktion med flere linjer:</strong>{" "}
          <code>
            (x, y) =&gt; {"{"} return x + y; {"}"}
          </code>
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Arrow functions giver en kortere og mere læsbar måde at skrive
        funktioner på i JavaScript. De gør det lettere at arbejde med
        funktioner, især når du arbejder med <code>this</code> i callbacks og
        event handlers. De er blevet et af de mest populære funktioner i moderne
        JavaScript.
      </p>
    </div>
  );
}
