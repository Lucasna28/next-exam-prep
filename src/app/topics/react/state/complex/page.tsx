import CodeBlock from "@/components/CodeBlock";

export default function ComplexStatePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Complex State i React</h1>
      <p className="text-xs">
        Håndtering af kompleks state i React kræver god struktur og forståelse
        af immutabilitet. Her ser vi på forskellige strategier til at håndtere
        nested objects og arrays.
      </p>

      <h2 className="text-base">Nested Objects</h2>
      <CodeBlock
        language="typescript"
        code={`interface User {
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const [user, setUser] = useState<User>({
  name: 'John',
  address: {
    street: 'Main St',
    city: 'Copenhagen',
    country: 'Denmark'
  },
  preferences: {
    theme: 'light',
    notifications: true
  }
});

// Opdater nested værdier
const updateCity = (newCity: string) => {
  setUser(prev => ({
    ...prev,
    address: {
      ...prev.address,
      city: newCity
    }
  }));
};`}
      />

      <h2 className="text-base">Arrays af Objects</h2>
      <CodeBlock
        language="typescript"
        code={`interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  tags: string[];
}

const [todos, setTodos] = useState<TodoItem[]>([]);

// Tilføj ny todo
const addTodo = (text: string) => {
  setTodos(prev => [
    ...prev,
    {
      id: Date.now(),
      text,
      completed: false,
      tags: []
    }
  ]);
};

// Toggle completed status
const toggleTodo = (id: number) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

// Tilføj tag til specifik todo
const addTag = (todoId: number, tag: string) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === todoId
        ? { ...todo, tags: [...todo.tags, tag] }
        : todo
    )
  );
};`}
      />

      <h2 className="text-base">Tips til Complex State</h2>
      <ul className="text-xs">
        <li>Del kompleks state op i mindre dele</li>
        <li>Overvej at bruge useReducer for kompleks logik</li>
        <li>Brug TypeScript interfaces for bedre type-sikkerhed</li>
        <li>Lav hjælpefunktioner til almindelige opdateringer</li>
        <li>Hold state så flad som muligt</li>
      </ul>
    </div>
  );
}
