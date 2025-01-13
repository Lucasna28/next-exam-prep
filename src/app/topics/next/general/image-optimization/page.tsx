import CodeBlock from "@/components/CodeBlock";

export default function ImageOptimizationPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Image Optimization i Next.js</h1>

      <h2 className="text-base">Hvad er Image Optimization?</h2>
      <p className="text-xs">
        Image Optimization i Next.js hjælper med automatisk at optimere billeder for bedre performance. Ved at bruge komponenten <code>next/image</code>, kan du levere billeder i moderne formater som WebP, håndtere responsiv skalering, og udnytte lazy loading.
      </p>

      <h2 className="text-base">Eksempel: Brug af <code>next/image</code></h2>
      <p className="text-xs">
        Next.js tilbyder en simpel måde at optimere billeder via <code>Image</code>-komponenten. Her er et eksempel:
      </p>

      <CodeBlock
        code={`import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <Image
        src="/example.jpg"
        alt="Eksempel billede"
        width={800}
        height={600}
      />
    </div>
  );
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer det?</h3>
      <ul className="text-xs">
        <li><strong>src:</strong> Billedets kilde kan være lokal (i din public-mappe) eller en ekstern URL.</li>
        <li><strong>width og height:</strong> Du kan specificere billedets bredde og højde for at sikre, at det gengives korrekt.</li>
        <li><strong>Lazy loading:</strong> Billeder indlæses kun, når de er synlige i viewporten, hvilket forbedrer performance.</li>
      </ul>

      <h5 className="text-base">Eksempel: Responsivt billede</h5>
      <p className="text-xs">
        Next.js gør det nemt at håndtere responsive billeder ved at bruge egenskaben <code>layout="responsive"</code>. Dette tilpasser billedets størrelse dynamisk baseret på containerens bredde.
      </p>

      <CodeBlock
        code={`import Image from 'next/image';

export default function ResponsiveImage() {
  return (
    <div>
      <Image
        src="/example.jpg"
        alt="Responsivt billede"
        layout="responsive"
        width={16}
        height={9}
      />
    </div>
  );
}`}
        language="javascript"
      />

      <h3 className="text-sm">Fordele ved Image Optimization</h3>
      <ul className="text-xs">
        <li><strong>Performance:</strong> Automatisk konvertering til moderne billedformater som WebP forbedrer sideindlæsningstiden.</li>
        <li><strong>Lazy loading:</strong> Reducerer initial load tid ved kun at indlæse billeder, når de bliver synlige.</li>
        <li><strong>Responsiv design:</strong> Dynamisk skalering af billeder sikrer, at de ser skarpe ud på alle skærmstørrelser og enheder.</li>
        <li><strong>Indbygget caching:</strong> Optimerede billeder gemmes i cache og leveres hurtigt til brugeren.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Image Optimization i Next.js gør det nemt at levere billeder, der er hurtige og skalerbare, uden ekstra opsætning. Ved at bruge <code>next/image</code>-komponenten kan du automatisk optimere billeder for moderne webstandarder, reducere indlæsningstiden og levere en bedre brugeroplevelse.
      </p>
    </div>
  );
}
