import CodeBlock from "@/components/CodeBlock";

export default function StatePage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>State i React</h1>

      <p>
        State er en komponents interne data som kan ændres over tid. Når state
        opdateres, re-renderes komponenten automatisk.
      </p>

      <h2>useState Hook</h2>
      <CodeBlock
        language="typescript"
        code={`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Antal: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Forøg
      </button>
      <button onClick={() => setCount(0)}>
        Nulstil
      </button>
    </div>
  );
}`}
      />

      <h2>Complex State</h2>
      <CodeBlock
        language="typescript"
        code={`interface User {
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

function UserProfile() {
  const [user, setUser] = useState<User>({
    name: 'John',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true
    }
  });

  const toggleTheme = () => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        theme: prev.preferences.theme === 'light' ? 'dark' : 'light'
      }
    }));
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={toggleTheme}>
        Skift tema
      </button>
    </div>
  );
}`}
      />

      <h2>State Best Practices</h2>
      <ul>
        <li>Hold state så lokalt som muligt</li>
        <li>Brug TypeScript til at definere state typer</li>
        <li>Undgå unødvendig state</li>
        <li>Brug funktionel opdatering ved afhængig state</li>
      </ul>
    </div>
  );
}
