import CodeBlock from "@/components/CodeBlock";

export default function PropsPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Props i React</h1>

      <p>
        Props (Properties) er den fundamentale måde at sende data mellem
        komponenter i React. De fungerer som argumenter til en komponent og
        følger et envejs dataflow fra parent til child.
      </p>

      <h2>Grundlæggende Koncept</h2>
      <p>
        Tænk på props som attributter du sender til en komponent, ligesom HTML
        attributter. De er read-only, hvilket betyder at en child komponent
        aldrig må ændre sine props.
      </p>

      <h2>Simpelt Props Eksempel</h2>
      <CodeBlock
        language="typescript"
        code={`// Velkomst komponent med props
interface WelcomeProps {
  name: string;
  greeting?: string; // Optional prop med ?
}

function Welcome({ name, greeting = "Hej" }: WelcomeProps) {
  return <h1>{greeting}, {name}!</h1>;
}

// Brug af Welcome komponenten
function App() {
  return (
    <div>
      <Welcome name="Anders" />
      <Welcome name="Marie" greeting="Goddag" />
    </div>
  );
}`}
      />

      <h2>Avanceret Props Håndtering</h2>
      <CodeBlock
        language="typescript"
        code={`// Mere kompleks komponent med forskellige prop typer
interface UserCardProps {
  user: {
    name: string;
    email: string;
    age: number;
  };
  onEdit: (id: string) => void;
  isAdmin?: boolean;
  children: React.ReactNode;
}

function UserCard({ user, onEdit, isAdmin = false, children }: UserCardProps) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Alder: {user.age}</p>
      
      {isAdmin && (
        <button onClick={() => onEdit(user.id)}>
          Rediger
        </button>
      )}
      
      <div className="content">
        {children}
      </div>
    </div>
  );
}`}
      />

      <h2>Props Best Practices</h2>
      <ul>
        <li>
          <strong>TypeScript Interfaces:</strong> Definer altid prop typer med
          TypeScript interfaces for bedre type-sikkerhed og dokumentation
        </li>
        <li>
          <strong>Default Værdier:</strong> Brug default værdier for valgfrie
          props for at undgå undefined fejl
        </li>
        <li>
          <strong>Destructuring:</strong> Brug destructuring i parameter listen
          for mere læsbar kode
        </li>
        <li>
          <strong>Props Validering:</strong> Valider props med TypeScript og
          runtime checks hvor nødvendigt
        </li>
      </ul>

      <h2>Almindelige Props Mønstre</h2>
      <h3>1. Children Props</h3>
      <CodeBlock
        language="typescript"
        code={`// Container komponent med children
function Container({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

// Brug af Container
function App() {
  return (
    <Container title="Min Sektion">
      <p>Dette er indholdet</p>
      <button>Klik Her</button>
    </Container>
  );
}`}
      />

      <h3>2. Render Props</h3>
      <CodeBlock
        language="typescript"
        code={`// Render prop mønster
interface DataRendererProps {
  render: (data: string) => React.ReactNode;
}

function DataRenderer({ render }: DataRendererProps) {
  const data = "Nogle data";
  return <>{render(data)}</>;
}

// Brug af render prop
function App() {
  return (
    <DataRenderer 
      render={(data) => <div>Data: {data}</div>}
    />
  );
}`}
      />

      <h2>Almindelige Fejl at Undgå</h2>
      <ul>
        <li>
          <strong>Mutation af Props:</strong> Aldrig modificer props direkte i
          en komponent
        </li>
        <li>
          <strong>Prop Drilling:</strong> Undgå at sende props gennem mange lag
          af komponenter
        </li>
        <li>
          <strong>Store Prop Objekter:</strong> Del store prop objekter op i
          mindre, mere specifikke props
        </li>
        <li>
          <strong>Manglende TypeScript:</strong> Altid definer prop typer for
          bedre vedligeholdelse
        </li>
      </ul>

      <h2>Debugging Props</h2>
      <p>
        Når du debugger props-relaterede problemer, kan du bruge console.log
        eller React DevTools til at inspicere props værdier:
      </p>
      <CodeBlock
        language="typescript"
        code={`function DebuggingComponent(props: any) {
  console.log('Component props:', props);
  // eller
  useEffect(() => {
    console.log('Props changed:', props);
  }, [props]);

  return <div>...</div>;
}`}
      />
    </div>
  );
}
