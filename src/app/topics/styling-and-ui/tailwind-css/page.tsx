import CodeBlock from "@/components/CodeBlock";

export default function TailwindCSSPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">Tailwind CSS</h1>
      <p className="text-base">
        Tailwind CSS er et utility-first CSS framework, der gør det muligt at designe direkte i dit markup med klassebaserede styles. Det er kendt for sin fleksibilitet og hastighed, når det kommer til at bygge moderne og responsive brugergrænseflader.
      </p>

      <h2 className="text-base">Fordele ved Tailwind CSS</h2>
      <ul className="text-base">
        <li>
          <strong>Hurtigere udvikling:</strong> Du kan hurtigt opbygge UI uden at skrive tilpassede CSS-regler.
        </li>
        <li>
          <strong>Utility-first tilgang:</strong> Tailwind leverer små, genanvendelige CSS-klasser til præcise styles.
        </li>
        <li>
          <strong>Responsiv design:</strong> Indbygget understøttelse af breakpoints og tilpassede skærmstørrelser.
        </li>
      </ul>

      <h2 className="text-base">Installation</h2>
      <p className="text-base">For at komme i gang med Tailwind CSS kan du installere det med npm:</p>
      <CodeBlock
        code={`npm install tailwindcss postcss autoprefixer
npx tailwindcss init`}
        language="bash"
      />

      <p className="text-base">
        Konfigurer derefter din <code>tailwind.config.js</code> fil, og tilføj Tailwind CSS til dit projekt ved at inkludere det i din <code>index.css</code> fil:
      </p>
      <CodeBlock
        code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        language="css"
      />

      <h2 className="text-base">Eksempel på brug</h2>
      <p className="text-base">Her er et simpelt eksempel på en knap stylet med Tailwind CSS:</p>
      <CodeBlock
        code={`export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Klik mig
    </button>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Responsivt design</h2>
      <p className="text-base">
        Tailwind gør det nemt at implementere responsivt design ved at bruge breakpoint-klasser:
      </p>
      <CodeBlock
        code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-gray-200 p-4">Indhold 1</div>
  <div className="bg-gray-300 p-4">Indhold 2</div>
  <div className="bg-gray-400 p-4">Indhold 3</div>
  <div className="bg-gray-500 p-4">Indhold 4</div>
</div>`}
        language="html"
      />

      <h2 className="text-base">Fordele og begrænsninger</h2>
      <p className="text-base">
        Mens Tailwind CSS tilbyder stor fleksibilitet, kan det føre til "class soup" – en overflod af klasser i HTML, hvilket kan gøre koden sværere at læse. Brug af komponenter kan hjælpe med at reducere dette.
      </p>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        Tailwind CSS er en kraftfuld løsning for udviklere, der ønsker hastighed og præcision i deres UI-design. Det er især nyttigt til prototyper og større projekter, hvor konsistens og skalerbarhed er vigtige.
      </p>
    </div>
  );
}
