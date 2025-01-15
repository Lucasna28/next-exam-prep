import CodeBlock from "@/components/CodeBlock";

export default function CodeSplittingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Code Splitting</h1>
      <p className="text-xs">
        Code splitting opdeler koden i mindre bidder, så kun de nødvendige bidder indlæses, hvilket reducerer initial load-tid og optimerer performance.
      </p>

      <h2 className="text-base">Eksempel på Code Splitting i Next.js</h2>
      <CodeBlock
        code={`import dynamic from "next/dynamic";

// Dynamically import a large component
const LargeComponent = dynamic(() => import("./LargeComponent"));

export default function Page() {
  return <LargeComponent />;
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Code Splitting</h2>
      <ul className="text-xs">
        <li><strong>Reduceret bundle størrelse:</strong> Kun nødvendige komponenter indlæses.</li>
        <li><strong>Hurtigere initial loading:</strong> Koden opdeles, så kun den nødvendige kode hentes først.</li>
        <li><strong>Optimeret performance:</strong> Komponenter og scripts indlæses kun, når de skal bruges.</li>
      </ul>

      <h2 className="text-base">Brug af dynamic() i Next.js</h2>
      <p className="text-xs">
        I Next.js er code splitting automatiseret via Webpack, og du kan udnytte <code>dynamic()</code> til at lade større komponenter blive hentet asynkront.
      </p>
    </div>
  );
}
