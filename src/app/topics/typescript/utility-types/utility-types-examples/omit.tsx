// import CodeBlock from "@/components/CodeBlock";

// export default function OmitExamplePage() {
//   return (
//     <div className="prose lg:prose-xs">
//       <h1 className="text-lg">Omit Utility Type</h1>
//       <p className="text-xs">
//         <code>Omit</code> utility type bruges til at skabe en ny type, hvor specifikke egenskaber er udeladt fra en eksisterende type.
//       </p>

//       <h2 className="text-base">Eksempel: Omit</h2>
//       <CodeBlock
//         code={`interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// type PersonWithoutEmail = Omit<Person, 'email'>;

// const person: PersonWithoutEmail = {
//   name: 'John',
//   age: 30,
//   // email er fjernet
// };`}
//         language="typescript"
//       />

//       <h2 className="text-base">Hvordan virker Omit?</h2>
//       <ul className="text-xs">
//         <li><strong>Syntax:</strong> <code>Omit<Type, 'key'></code>, hvor <code>Type</code> er den oprindelige type og <code>'key'</code> er den egenskab, der skal fjernes.</li>
//         <li><strong>Brug:</strong> Bruges, når du vil arbejde med en type uden en eller flere specifikke egenskaber.</li>
//       </ul>
//     </div>
//   );
// }
