import CodeBlock from '@/components/CodeBlock';

export default function CodeLintingFormattingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Code Linting og Formattering i Next.js</h1>
      <p className="text-xs">
        Code linting og formattering er vigtige værktøjer i moderne webudvikling, som hjælper med at sikre, at koden er ensartet og fri for fejl. Linting identificerer potentielle fejl i koden, mens formattering sørger for, at koden følger et konsekvent stilguide.
      </p>

      <h2 className="text-base">Hvad er Linting?</h2>
      <p className="text-xs">
        Linting er processen med at analysere koden for at finde syntaktiske fejl, stilistiske uoverensstemmelser og potentielle bugs. Det er en automatisk måde at sikre, at din kode følger et sæt regler og standarder.
      </p>

      <h2 className="text-base">Hvad er Formattering?</h2>
      <p className="text-xs">
        Formattering er processen med at justere kodeens udseende, så den følger en fastlagt stilguide. For eksempel kan det sikre, at alle funktioner bruger den samme mængde indrykning, og at der er ensartede linjeskift og mellemrum.
      </p>

      <h3 className="text-base">ESLint i Next.js</h3>
      <p className="text-xs">
        ESLint er et populært linting-værktøj, som bruges til at finde og rette syntaksfejl og potentielle bugs i JavaScript-kode. I Next.js er ESLint automatisk inkluderet og kan konfigureres i din applikation.
      </p>

      <h4 className="text-base">Installering af ESLint</h4>
      <p className="text-xs">
        Du kan nemt installere ESLint i dit Next.js-projekt ved at køre følgende kommando:
      </p>
      <CodeBlock
        code={`// Installér ESLint i Next.js projekt
npm install eslint --save-dev`}
        language="bash"
      />

      <h4 className="text-base">Konfiguration af ESLint</h4>
      <p className="text-xs">
        Efter installation kan du konfigurere ESLint ved at tilføje en <code>.eslintrc.json</code> eller <code>.eslintrc.js</code> fil i roden af dit projekt. Her er et eksempel på en simpel konfiguration:
      </p>
      <CodeBlock
        code={`// .eslintrc.json
{
  "extends": ["next", "eslint:recommended"],
  "rules": {
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off"
  }
}`}
        language="json"
      />

      <h3 className="text-base">Prettier i Next.js</h3>
      <p className="text-xs">
        Prettier er et formatteringsværktøj, der automatisk formaterer din kode baseret på et sæt stilregler. Det kan bruges sammen med ESLint for at sikre, at din kode er både korrekt og ensartet formateret.
      </p>

      <h4 className="text-base">Installering af Prettier</h4>
      <p className="text-xs">
        Installér Prettier ved at køre følgende kommando:
      </p>
      <CodeBlock
        code={`// Installér Prettier i Next.js projekt
npm install prettier --save-dev`}
        language="bash"
      />

      <h4 className="text-base">Konfiguration af Prettier</h4>
      <p className="text-xs">
        Opret en <code>.prettierrc</code> fil i dit projekts rodmappe for at konfigurere Prettier. Her er et eksempel:
      </p>
      <CodeBlock
        code={`// .prettierrc
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "es5"
}`}
        language="json"
      />

      <h3 className="text-base">Integrering af ESLint og Prettier</h3>
      <p className="text-xs">
        Du kan kombinere ESLint og Prettier, så de arbejder sammen. Installér ESLint-plugin til Prettier, som hjælper med at undgå konflikter mellem de to værktøjer.
      </p>
      <CodeBlock
        code={`// Installér ESLint plugin til Prettier
npm install eslint-plugin-prettier eslint-config-prettier --save-dev`}
        language="bash"
      />

      <p className="text-xs">
        Tilføj derefter Prettier-konfigurationen i din ESLint-konfigurationsfil:
      </p>
      <CodeBlock
        code={`// .eslintrc.json
{
  "extends": ["next", "eslint:recommended", "plugin:prettier/recommended"],
  "rules": {
    "no-unused-vars": "warn"
  }
}`}
        language="json"
      />

      <h3 className="text-base">Fordele ved Linting og Formattering</h3>
      <ul className="text-xs">
        <li><strong>Bedre kodekvalitet:</strong> Linting hjælper med at fange fejl tidligt, og formattering sikrer ensartet stil.</li>
        <li><strong>Fælles kodebase:</strong> Giver udviklingsteams et fælles grundlag, som gør det lettere at arbejde på samme projekt.</li>
        <li><strong>Effektiv fejlfinding:</strong> Linting advarer om potentielle problemer i koden, hvilket kan spare tid under udviklingen.</li>
        <li><strong>Automatisering:</strong> Både linting og formattering kan automatiseres, hvilket sikrer, at koden altid følger de samme regler.</li>
      </ul>

      <h3 className="text-base">Opsummering</h3>
      <p className="text-xs">
        Code linting og formattering er to vigtige aspekter af moderne webudvikling, som hjælper med at sikre, at koden er fejlfri og følger en ensartet stil. Ved at bruge værktøjer som ESLint og Prettier kan du automatisere disse processer og sikre høj kvalitet i din kode.
      </p>
    </div>
  );
}
