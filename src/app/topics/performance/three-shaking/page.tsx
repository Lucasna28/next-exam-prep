import CodeBlock from "@/components/CodeBlock";

export default function TreeShakingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Tree Shaking</h1>
      <p className="text-xs">
        Tree shaking er en optimeringsteknik, der anvendes under bundling af JavaScript-koden for at fjerne ubrugt kode. Dette resulterer i en mindre bundel, som kan forbedre indlæsningstiden og ydeevnen af applikationen.
      </p>

      <h2 className="text-base">Hvordan Tree Shaking fungerer</h2>
      <p className="text-xs">
        Tree shaking fungerer ved at analysere din kode for ubrugte moduler og funktioner. Under bundling vil disse ubrugte elementer blive fjernet, så de ikke er med i den endelige bundle. Dette hjælper med at reducere størrelsen på den JavaScript-fil, der sendes til browseren, og forbedrer performance.
      </p>

      <h2 className="text-base">Eksempel på Tree Shaking i Next.js</h2>
      <CodeBlock
        code={`// utils.js
export const usedFunction = () => {
  console.log("This function is used");
};

export const unusedFunction = () => {
  console.log("This function is not used");
};

// In your Next.js component
import { usedFunction } from "./utils";

usedFunction();`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Tree Shaking</h2>
      <ul className="text-xs">
        <li><strong>Reduceret bundelstørrelse:</strong> Ved at fjerne ubrugt kode reduceres størrelsen på den bundne JavaScript-fil.</li>
        <li><strong>Hurtigere indlæsning:</strong> Mindre kode betyder, at browseren skal hente og parse færre filer, hvilket resulterer i hurtigere indlæsningstid.</li>
        <li><strong>Forbedret performance:</strong> Færre filer og mindre kode resulterer i en mere responsiv applikation.</li>
      </ul>

      <h2 className="text-base">Next.js og Tree Shaking</h2>
      <p className="text-xs">
        Next.js understøtter automatisk tree shaking via Webpack. Når du bruger ES6-moduler i din kode, kan Next.js fjerne de ubrugte moduler under bundlingen, hvilket optimerer den endelige bundle.
      </p>
    </div>
  );
}
