import CodeBlock from "@/components/CodeBlock";

export default function CSSModulesPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">CSS Modules</h1>
      <p className="text-base">
        CSS Modules er en metode til at skrive scoped CSS, hvor hver CSS-fil kun påvirker den specifikke komponent, den er knyttet til. Dette hjælper med at undgå konflikter mellem forskellige CSS-klasser i større applikationer.
      </p>

      <h2 className="text-base">Fordele ved CSS Modules</h2>
      <ul className="text-base">
        <li>
          <strong>Scoped styles:</strong> CSS-klasser er kun tilgængelige for den tilhørende komponent.
        </li>
        <li>
          <strong>Navnekonvention:</strong> CSS Modules genererer unikke klasse-navne for at forhindre konflikter.
        </li>
        <li>
          <strong>Let integration:</strong> Fungerer godt med moderne JavaScript-frameworks som React.
        </li>
      </ul>

      <h2 className="text-base">Eksempel</h2>
      <p className="text-base">
        Et simpelt eksempel på en komponent, der bruger CSS Modules:
      </p>
      <CodeBlock
        code={`// styles/Button.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

// components/Button.jsx
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.button}>Klik mig</button>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Hvordan virker det?</h2>
      <p className="text-base">
        CSS Modules omdanner dine klasse-navne til unikke identifikatorer under build-processen. Det sikrer, at stilarterne kun påvirker den tilsigtede komponent og ingen andre.
      </p>

      <h2 className="text-base">Opsætning i Next.js</h2>
      <p className="text-base">
        For at bruge CSS Modules i Next.js, skal du blot navngive dine CSS-filer med
        <code>.module.css</code>-suffikset. Next.js konfigurerer automatisk projektet til at understøtte CSS Modules.
      </p>

      <CodeBlock
        code={`// Eksempel på en filstruktur:
components/
  Button.jsx
  styles/
    Button.module.css`}
        language="plaintext"
      />

      <h2 className="text-base">Begrænsninger</h2>
      <ul className="text-base">
        <li>
          Ikke velegnet til globale styles uden yderligere konfiguration.
        </li>
        <li>
          Kan kræve mere opsætning og vedligeholdelse i større projekter.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        CSS Modules er en kraftfuld måde at håndtere styles på i komponent-baserede applikationer, især når du vil undgå stil-konflikter og holde dine komponenter isolerede.
      </p>
    </div>
  );
}
