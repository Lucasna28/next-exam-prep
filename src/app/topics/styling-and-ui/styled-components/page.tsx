import CodeBlock from "@/components/CodeBlock";

export default function StyledComponentsPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">Styled Components</h1>
      <p className="text-base">
        Styled Components er en populær CSS-in-JS løsning, der giver mulighed for at skrive styles direkte i dine JavaScript- eller TypeScript-filer. Det bruger template literals til at definere komponent-specifikke stilarter, som derefter bliver tilføjet som unikke klasser i DOM'en.
      </p>

      <h2 className="text-base">Fordele ved Styled Components</h2>
      <ul className="text-base">
        <li>
          <strong>Scoped styles:</strong> Alle stilarter er isolerede til den specifikke komponent.
        </li>
        <li>
          <strong>Dynamiske styles:</strong> Du kan nemt tilpasse styles baseret på props.
        </li>
        <li>
          <strong>CSS-in-JS:</strong> Ingen eksterne CSS-filer er nødvendige, hvilket gør det lettere at vedligeholde.
        </li>
      </ul>

      <h2 className="text-base">Eksempel</h2>
      <p className="text-base">
        Her er et simpelt eksempel på, hvordan du kan bruge Styled Components til at style en knap:
      </p>
      <CodeBlock
        code={`// installation
npm install styled-components

// komponentfil
import styled from 'styled-components';

const Button = styled.button\`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
\`;

export default function App() {
  return <Button>Klik mig</Button>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan virker det?</h2>
      <p className="text-base">
        Styled Components genererer unikke klasse-navne og tilføjer dem dynamisk til DOM'en. Det sikrer, at styles ikke kolliderer med hinanden.
      </p>

      <h2 className="text-base">Brug af Props til Dynamiske Styles</h2>
      <p className="text-base">
        Du kan bruge props til at justere styles dynamisk:
      </p>
      <CodeBlock
        code={`const Button = styled.button\`
  background-color: \${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
\`;

export default function App() {
  return (
    <div>
      <Button primary>Primær Knap</Button>
      <Button>Sekundær Knap</Button>
    </div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Begrænsninger</h2>
      <ul className="text-base">
        <li>
          Kan tilføje kompleksitet i store projekter med mange styles.
        </li>
        <li>
          Større runtime overhead sammenlignet med præ-kompilerede CSS-løsninger.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        Styled Components er en fleksibel og kraftfuld løsning for moderne UI-udvikling, især når du ønsker dynamiske og scoped styles. Det er dog vigtigt at overveje performance og projektets størrelse, før du vælger det som din primære styling-metode.
      </p>
    </div>
  );
}
