// import CodeBlock from "@/components/CodeBlock";

// export default function PickExamplePage() {
//   return (
//     <div className="prose lg:prose-xs">
//       <h1 className="text-lg">Pick Utility Type</h1>
//       <p className="text-xs">
//         <code>Pick</code> utility type bruges til at skabe en ny type, som kun inkluderer specifikke egenskaber fra en eksisterende type.
//       </p>

//       <h2 className="text-base">Eksempel: Pick</h2>
//       <CodeBlock
//         code={`interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// type PersonNameAndAge = Pick<Person, 'name' | 'age'>;

// const person: PersonNameAndAge = {
//   name: 'John',
//   age: 30,
// };`}
//         language="typescript"
//       />

//       <h2 className="text-base">Hvordan virker Pick?</h2>
//       <ul className="text-xs">
//         <li><strong>Syntax:</strong> <code>Pick<Type, 'key1' | 'key2'></code>, hvor <code>Type</code> er den oprindelige type, og du angiver de egenskaber, du vil vælge.</li>
//         <li><strong>Brug:</strong> Bruges, når du kun vil have et subset af egenskaber fra en type.</li>
//       </ul>
//     </div>
//   );
// }
