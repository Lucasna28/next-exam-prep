import CodeBlock from "@/components/CodeBlock";

export default function ContextAPIPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Context API i React</h1>

      <p>
        Context API giver mulighed for at dele data gennem komponent-træet uden
        at sende props manuelt gennem hvert niveau.
      </p>

      <h2>Oprettelse af Context</h2>
      <CodeBlock
        language="typescript"
        code={`// ThemeContext.tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
      />

      <h2>Brug af Context</h2>
      <CodeBlock
        language="typescript"
        code={`function ThemeButton() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeButton must be used within ThemeProvider');

  return (
    <button onClick={context.toggleTheme}>
      Current theme: {context.theme}
    </button>
  );
}`}
      />

      <h3>Hvornår Bruges Context?</h3>
      <ul>
        <li>Globale temaer</li>
        <li>Bruger præferencer</li>
        <li>Autentifikation</li>
        <li>Lokalisering</li>
      </ul>
    </div>
  );
}
