import CodeBlock from "@/components/CodeBlock";

export default function GlobalVsComponentStylesPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">Global Styles vs. Component-Scoped Styles</h1>
      <p className="text-base">
        Når man arbejder med styling i moderne webprojekter, står man ofte over for valget mellem globale styles og komponent-specifikke styles. Hver tilgang har sine fordele og ulemper afhængigt af projektets krav.
      </p>

      <h2 className="text-base">Globale Styles</h2>
      <p className="text-base">
        Globale styles gælder for hele applikationen og bruges ofte til grundlæggende styling som farver, typografi og layout, der går på tværs af alle komponenter.
      </p>
      <h3 className="text-base">Eksempel</h3>
      <CodeBlock
        code={`/* global.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #3498db;
}`}
        language="css"
      />
      <p className="text-base">
        Disse styles importeres normalt i en rodfil som <code>_app.js</code> eller <code>index.js</code>.
      </p>
      <CodeBlock
        code={`import "./global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}`}
        language="javascript"
      />

      <h2 className="text-base">Component-Scoped Styles</h2>
      <p className="text-base">
        Komponent-specifikke styles anvender scoping, så de kun gælder for en bestemt komponent. Dette hjælper med at undgå konflikter mellem styles i større projekter.
      </p>
      <h3 className="text-base">CSS Modules Eksempel</h3>
      <CodeBlock
        code={`/* Button.module.css */
.button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #2980b9;
}`}
        language="css"
      />
      <CodeBlock
        code={`// Button.js
import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.button}>Klik mig</button>;
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele og Ulemper</h2>
      <h3 className="text-base">Globale Styles</h3>
      <ul className="text-base">
        <li>
          <strong>Fordel:</strong> Nem håndtering af fælles styles som reset og typografi.
        </li>
        <li>
          <strong>Ulempe:</strong> Risiko for style-konflikter i større projekter.
        </li>
      </ul>
      <h3 className="text-base">Component-Scoped Styles</h3>
      <ul className="text-base">
        <li>
          <strong>Fordel:</strong> Ingen style-konflikter, da styles er isolerede.
        </li>
        <li>
          <strong>Ulempe:</strong> Kan føre til gentagelse af kode i visse tilfælde.
        </li>
      </ul>

      <h2 className="text-base">Hvornår Skal Hvad Bruges?</h2>
      <p className="text-base">
        Globale styles er gode til grundlæggende layout og typografi, mens komponent-scoped styles bør bruges til at style individuelle komponenter for bedre vedligeholdelse og modularitet.
      </p>
    </div>
  );
}
