import CodeBlock from "@/components/CodeBlock";

export default function BundleAnalyzerPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Bundle Analyzer</h1>
      <p className="text-xs">
        Bundle Analyzer er et værktøj, der hjælper med at analysere størrelsen på dine JavaScript-bundles. Det giver dig indsigt i, hvilke moduler der fylder mest, og hjælper med at optimere din bundle-størrelse.
      </p>

      <h2 className="text-base">Hvordan Bundle Analyzer fungerer</h2>
      <p className="text-xs">
        Når du bygger din applikation, kan du bruge et bundle analyzer-værktøj til at visualisere, hvilke moduler der bidrager mest til størrelsen af din bundle. Dette hjælper dig med at identificere og optimere store eller unødvendige moduler.
      </p>

      <h2 className="text-base">Eksempel på at bruge Bundle Analyzer i Next.js</h2>
      <CodeBlock
        code={`// Install Webpack Bundle Analyzer
// npm install --save-dev @next/bundle-analyzer

// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved at bruge Bundle Analyzer</h2>
      <ul className="text-xs">
        <li><strong>Visualisering af bundlen:</strong> Giver et klart billede af, hvilke moduler der fylder mest.</li>
        <li><strong>Optimering af bundle-størrelse:</strong> Hjælper med at reducere bundlens størrelse ved at identificere store moduler, der kan opdeles eller fjernes.</li>
        <li><strong>Bedre performance:</strong> En mindre bundle betyder hurtigere indlæsningstider og bedre performance for din applikation.</li>
      </ul>

      <h2 className="text-base">Hvordan du aktiverer Bundle Analyzer i Next.js</h2>
      <p className="text-xs">
        For at bruge Webpack Bundle Analyzer i Next.js, skal du installere <code>@next/bundle-analyzer</code> og derefter opdatere din <code>next.config.js</code> fil som vist i eksemplet ovenfor. Når du kører din build med <code>ANALYZE=true</code>, vil du få en visuel repræsentation af din bundle.
      </p>
    </div>
  );
}
