import CodeBlock from "@/components/CodeBlock";

export default function PrototypePrototypalInheritancePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Prototype og Prototypal Inheritance</h1>
      <p className="text-xs">
        JavaScript benytter en prototypal arv, hvor objekter kan arve egenskaber og metoder fra andre objekter. I stedet for klassisk arv, som i sprog som Java eller C#, arbejder JavaScript med et prototypalt system, hvor hver instans af et objekt har en reference til et andet objekt (dens prototype), og de kan dele funktionalitet via denne prototype.
      </p>

      <h2 className="text-base">Hvad er Prototypal Inheritance?</h2>
      <p className="text-xs">
        Prototypal arv betyder, at objekter kan dele funktionalitet via deres prototype. Alle JavaScript-objekter har en prototype, og de kan arve metoder og egenskaber fra denne prototype. Dette gør det muligt at skabe objekter, der er baseret på andre objekter.
      </p>

      <h3 className="text-base">Eksempel: Prototypal Inheritance</h3>
      <p className="text-xs">
        I det følgende eksempel opretter vi et objekt, der arver funktionalitet fra en prototype.
      </p>
      <CodeBlock
        code={`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound`} 
        language="javascript"
      />

      <h2 className="text-base">Hvordan fungerer Prototype i JavaScript?</h2>
      <p className="text-xs">
        I JavaScript er alle objekter forbundet med en prototype. Når du prøver at tilgå en egenskab på et objekt, og denne egenskab ikke findes på objektet, vil JavaScript kigge på objektets prototype og prøve at finde egenskaben der. Dette betyder, at funktioner og egenskaber kan deles mellem objekter.
      </p>

      <h3 className="text-base">Eksempel på Prototype Chain</h3>
      <p className="text-xs">
        Hvis du forsøger at få adgang til en egenskab på et objekt, som ikke findes på objektet selv, vil JavaScript kigge i prototypen og så videre op i prototypens prototype, indtil det når <code>null</code>.
      </p>
      <CodeBlock
        code={`function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Buddy makes a sound
console.log(dog.breed); // Golden Retriever`} 
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Prototypal Inheritance</h2>
      <ul className="text-xs">
        <li><strong>Effektivitet:</strong> Det sparer hukommelse, da metoder og egenskaber deles mellem objekter i stedet for at blive duplikeret for hvert objekt.</li>
        <li><strong>Fleksibilitet:</strong> Prototypal arv tillader dynamisk at ændre objekters prototype og funktionalitet, hvilket gør det nemt at tilføje eller ændre metoder på et senere tidspunkt.</li>
        <li><strong>Enkel struktur:</strong> Der er ingen behov for at oprette komplekse klassesystemer, og det er nemt at forstå, hvordan objekter arver egenskaber og metoder.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Prototypal arv i JavaScript gør det muligt at dele funktionalitet mellem objekter uden at skulle duplikere koden. Dette gør det muligt at oprette hierarkier af objekter, der kan dele metoder og egenskaber via prototyper, hvilket kan føre til mere effektiv og fleksibel kode.
      </p>
    </div>
  );
}
