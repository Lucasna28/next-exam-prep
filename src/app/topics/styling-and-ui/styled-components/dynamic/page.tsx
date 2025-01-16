"use client";

import CodeBlock from "@/components/CodeBlock";
import styled from "styled-components";

// Eksempel komponenter
const Button = styled.button<{ $variant?: "primary" | "secondary" | "danger" }>`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Dynamisk baggrundsfarve baseret på variant */
  background-color: ${(props) => {
    switch (props.$variant) {
      case "secondary":
        return "#6B7280";
      case "danger":
        return "#EF4444";
      default:
        return "#3B82F6";
    }
  }};

  /* Dynamisk hover effekt */
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  /* Tekst farve */
  color: white;
`;

const ExampleContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: ${(props) =>
    props.theme.mode === "dark" ? "#1F2937" : "#F3F4F6"};
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export default function StyledComponentsDynamicPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Dynamisk Styling med Styled Components</h1>
      <p className="text-xs">
        Styled Components giver dig mulighed for at skabe dynamiske styles
        baseret på props, temaer og tilstande. Her er hvordan du kan bruge det i
        praksis:
      </p>

      <h2 className="text-base">Live Eksempel</h2>
      <ExampleContainer>
        <Button>Normal</Button>
        <Button $variant="secondary">Sekundær</Button>
        <Button $variant="danger">Danger</Button>
      </ExampleContainer>

      <h2 className="text-base">Koden bag eksemplet</h2>
      <CodeBlock
        code={`import styled from 'styled-components';

const Button = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>\`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Dynamisk baggrundsfarve baseret på variant */
  background-color: \${props => {
    switch (props.$variant) {
      case 'secondary':
        return '#6B7280';
      case 'danger':
        return '#EF4444';
      default:
        return '#3B82F6';
    }
  }};

  /* Dynamisk hover effekt */
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  /* Tekst farve */
  color: white;
\`;

// Brug i komponenten:
<Button>Normal</Button>
<Button $variant="secondary">Sekundær</Button>
<Button $variant="danger">Danger</Button>`}
        language="typescript"
      />

      <h2 className="text-base">Props i Styled Components</h2>
      <p className="text-xs">
        Du kan sende props til dine styled components og bruge dem til at ændre
        styling:
      </p>
      <ul className="text-xs">
        <li>
          Brug $ prefix for at undgå DOM warnings (f.eks. $variant i stedet for
          variant)
        </li>
        <li>Props kan bruges i template literals med ${"{props => ...}"}</li>
        <li>Du kan bruge TypeScript for type-sikkerhed</li>
      </ul>

      <h2 className="text-base">Avancerede Teknikker</h2>
      <CodeBlock
        code={`// Arv fra andre komponenter
const ExtendedButton = styled(Button)\`
  padding: 1rem 2rem;
  font-size: 1.25rem;
\`;

// Betinget styling
const Container = styled.div<{ $isActive: boolean }>\`
  background: \${props => props.$isActive ? '#E5E7EB' : 'transparent'};
  padding: 1rem;
\`;

// Theme support
const ThemedButton = styled.button\`
  background: \${props => props.theme.primaryColor};
  color: \${props => props.theme.textColor};
\`;`}
        language="typescript"
      />

      <h2 className="text-base">Best Practices</h2>
      <ul className="text-xs">
        <li>Hold styled components i separate filer for bedre organisering</li>
        <li>Brug beskrivende navne for dine komponenter</li>
        <li>Udnyt theme provider for konsistent styling</li>
        <li>Brug TypeScript interfaces for props</li>
      </ul>
    </div>
  );
}
