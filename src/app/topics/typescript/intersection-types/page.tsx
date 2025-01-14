import CodeBlock from "@/components/CodeBlock";

export default function IntersectionTypesPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Intersection Types i TypeScript</h1>
      <p className="text-xs">
        <strong>Intersection Types</strong> i TypeScript giver dig mulighed for at kombinere flere typer til en enkelt type. Dette gør det muligt at oprette en type, der har alle egenskaber og funktioner fra de involverede typer. Intersection Types er nyttige, når du vil kombinere funktionaliteter fra flere kilder i én type.
      </p>

      <h2 className="text-base">Eksempel: Intersection Type</h2>
      <p className="text-xs">
        I eksemplet nedenfor kombineres to typer - <code>Person</code> og <code>Employee</code> - til én type, som både har egenskaberne fra <code>Person</code> og <code>Employee</code>.
      </p>

      <CodeBlock
        code={`type Person = {
  name: string;
  age: number;
};

type Employee = {
  jobTitle: string;
  salary: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "John",
  age: 30,
  jobTitle: "Software Engineer",
  salary: 70000
};`}
        language="typescript"
      />

      <h3 className="text-sm">Hvordan fungerer Intersection Types?</h3>
      <p className="text-xs">
        Intersection Types kombinerer flere typer ved hjælp af &-symbolet (ampersand). I eksemplet ovenfor, har <code>EmployeeDetails</code> både egenskaberne fra <code>Person</code> og <code>Employee</code>. 
      </p>

      <h3 className="text-sm">Fordele ved Intersection Types</h3>
      <ul className="text-xs">
        <li><strong>Kombinerer funktionaliteter:</strong> Intersection Types gør det muligt at kombinere flere typer og få adgang til funktionerne fra hver enkelt.</li>
        <li><strong>Bedre typekontrol:</strong> Det giver en stærkere typekontrol, da du kan kombinere flere krav på én gang.</li>
        <li><strong>Øger fleksibiliteten:</strong> Intersection Types gør det muligt at opbygge komplekse objekter, der har flere facetter.</li>
      </ul>

      <h3 className="text-sm">Eksempel: Kombination af flere typer</h3>
      <p className="text-xs">
        Du kan også kombinere mere komplekse typer ved hjælp af Intersection Types, som f.eks. funktionstyper eller klasser.
      </p>
      <CodeBlock
        code={`type Contact = {
  email: string;
};

type Address = {
  city: string;
  country: string;
};

type ContactInfo = Contact & Address;

const contactInfo: ContactInfo = {
  email: "john@example.com",
  city: "New York",
  country: "USA"
};`}
        language="typescript"
      />

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Intersection Types giver dig mulighed for at bygge komplekse typer, der kan kombinere flere datatyper. Det er en meget kraftfuld funktion i TypeScript, der gør din kode mere fleksibel og udtryksfuld. Ved at bruge Intersection Types kan du definere typer, der skal opfylde kravene fra flere forskellige kilder samtidigt.
      </p>
    </div>
  );
}
