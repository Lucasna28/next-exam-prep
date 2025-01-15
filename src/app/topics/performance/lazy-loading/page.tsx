import CodeBlock from "@/components/CodeBlock";

export default function LazyLoadingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Lazy Loading</h1>
      <p className="text-xs">
        Lazy loading gør det muligt at indlæse komponenter kun når de er nødvendige, hvilket hjælper med at reducere initial load-tiden og forbedrer performance.
      </p>

      <h2 className="text-base">Eksempel på Lazy Loading i Next.js</h2>
      <CodeBlock
        code={`import dynamic from "next/dynamic";

// Dynamically import the component
const LazyLoadedComponent = dynamic(() => import("./LazyComponent"), { ssr: false });

export default function Page() {
  return <LazyLoadedComponent />;
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Lazy Loading</h2>
      <ul className="text-xs">
        <li><strong>Reduceret initial load:</strong> Kun nødvendige komponenter indlæses først.</li>
        <li><strong>Hurtigere opstart:</strong> Mindre JavaScript hentes først, hvilket gør applikationen hurtigere at starte.</li>
        <li><strong>Forbedret brugeroplevelse:</strong> Komponenter indlæses, når de skal bruges, hvilket betyder mindre ventetid for brugeren.</li>
      </ul>

      <h2 className="text-base">Brug af dynamic() i Next.js</h2>
      <p className="text-xs">
        Next.js gør det nemt at implementere lazy loading ved at bruge <code>dynamic()</code>. Dette tillader asynkron indlæsning af komponenter, og du kan vælge at deaktivere server-side rendering (SSR) ved at bruge <code>{`ssr: false`}</code>.
      </p>
    </div>
  );
}
