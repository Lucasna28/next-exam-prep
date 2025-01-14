import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function LinkComponentPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Link Komponent i Next.js</h1>
      <p className="text-xs">
        <code>Link</code> komponenten bruges til at navigere mellem sider i en Next.js applikation. Det sikrer hurtigere navigation ved at udnytte client-side routing.
      </p>

      <h2 className="text-base">Eksempel: Brug af Link</h2>
      <p className="text-xs">
        Her er et eksempel på, hvordan du bruger <code>Link</code> til at navigere mellem sider:
      </p>
      <CodeBlock
        code={`import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Velkommen til min side</h1>
      <Link href="/om-os">Læs mere om os</Link>
    </div>
  );
}`}
        language="javascript"
      />

      <h5 className="text-base">Eksempel: Styling med Link</h5>
      <p className="text-xs">
        Du kan også style links ved at bruge Tailwind eller andre CSS-frameworks:
      </p>
      <CodeBlock
        code={`<Link href="/kontakt">
  <a className="text-blue-500 hover:underline">Kontakt os</a>
</Link>`}
        language="javascript"
      />

      <h2 className="text-base">Hvorfor bruge Link komponenten?</h2>
      <ul className="text-xs">
        <li>
          <strong>Hurtigere navigation:</strong> Client-side routing gør navigering mellem sider hurtigere.
        </li>
        <li>
          <strong>SEO-venlig:</strong> <code>Link</code> genererer standard HTML <code>&lt;a&gt;</code>-tags, som er SEO-optimerede.
        </li>
        <li>
          <strong>Forbedret brugeroplevelse:</strong> Brugere får en glidende og hurtig navigationsoplevelse.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        <code>Link</code> komponenten gør det nemt at navigere mellem sider i en Next.js applikation, mens den forbedrer ydeevnen og brugeroplevelsen. Brug den til at skabe sømløs navigation i din applikation.
      </p>
    </div>
  );
}
