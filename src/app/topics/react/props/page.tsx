import CodeBlock from "@/components/CodeBlock";

export default function PropsPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Props i React</h1>

      <p>
        Props (Properties) er den primære måde at sende data mellem komponenter
        i React. De er read-only og følger en envejs dataflow fra parent til
        child komponenter.
      </p>

      <h2>Grundlæggende Props</h2>
      <CodeBlock
        language="typescript"
        code={`// Parent Component
function Parent() {
  return <Child name="John" age={25} isAdmin={true} />;
}

// Child Component
interface ChildProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

function Child({ name, age, isAdmin }: ChildProps) {
  return (
    <div>
      <h2>Bruger: {name}</h2>
      <p>Alder: {age}</p>
      {isAdmin && <span>Admin Bruger</span>}
    </div>
  );
}`}
      />

      <h2>Props Best Practices</h2>
      <ul>
        <li>Brug TypeScript interfaces til at definere prop typer</li>
        <li>Hold props så simple som muligt</li>
        <li>Undgå at modificere props direkte</li>
        <li>Brug default værdier når det giver mening</li>
      </ul>

      <h2>Children Props</h2>
      <CodeBlock
        language="typescript"
        code={`// Container Component
interface ContainerProps {
  children: React.ReactNode;
  title: string;
}

function Container({ children, title }: ContainerProps) {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

// Brug af Container
function App() {
  return (
    <Container title="Min App">
      <p>Dette er child content</p>
    </Container>
  );
}`}
      />
    </div>
  );
}
