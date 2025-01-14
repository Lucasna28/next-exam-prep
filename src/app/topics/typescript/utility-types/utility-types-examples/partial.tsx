// import CodeBlock from "@/components/CodeBlock";

// export default function PartialExamplePage() {
//   return (
//     <div className="prose lg:prose-xs">
//       <h1 className="text-lg">Partial Utility Type</h1>
//       <p className="text-xs">
//         <code>Partial</code> utility type bruges til at gøre alle egenskaber i en type valgfrie. Dette er nyttigt, når du kun vil opdatere nogle af egenskaberne i et objekt.
//       </p>

//       <h2 className="text-base">Eksempel: Partial</h2>
//       <CodeBlock
//         code={`interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// const updatePerson = (person: Person, update: Partial<Person>) => {
//   return { ...person, ...update };
// };

// const person = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com',
// };

// const updatedPerson = updatePerson(person, { age: 31 });`}
//         language="typescript"
//       />

//       <h2 className="text-base">Hvordan virker Partial?</h2>
//       <ul className="text-xs">
//         <li><strong>Syntax:</strong> <code>Partial<Type></code>, hvor <code>Type</code> er den oprindelige type, og alle egenskaber bliver gjort valgfrie.</li>
//         <li><strong>Brug:</strong> Bruges, når du kun vil opdatere nogle af egenskaberne i et objekt uden at specificere alle værdier.</li>
//       </ul>
//     </div>
//   );
// }
