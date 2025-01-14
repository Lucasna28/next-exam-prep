import Link from "next/link";

export default function LinkHeadPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Introduktion til Link og Head komponenter i Next.js</h1>
      <p className="text-xs">
        Next.js tilbyder kraftfulde komponenter som <code>Link</code> og <code>Head</code>, der hjælper med henholdsvis navigation og manipulation af dokumentets metadata. Disse komponenter gør udviklingen mere effektiv og fleksibel.
      </p>

      <h2 className="text-base">Komponenter</h2>
      <ul className="text-xs">
        <li>
          <strong>Link komponent:</strong> Bruges til at navigere mellem sider i Next.js.
        </li>
        <li>
          <strong>Head komponent:</strong> Bruges til at manipulere dokumentets <code>&lt;head&gt;</code> sektion, som meta-tags, titel og scripts.
        </li>
      </ul>

      <h2 className="text-base">Læs mere</h2>
      <ul className="text-xs">
        <li>
          <Link href="/topics/next/advanced/link-head/linkcomponent">
            Læs om Link komponenten
          </Link>
        </li>
        <li>
          <Link href="/topics/next/advanced/link-head/headcomponent">
            Læs om Head komponenten
          </Link>
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Ved at bruge <code>Link</code> og <code>Head</code> kan du forbedre både navigationen og metadatahåndteringen i din applikation. Klik på linksene ovenfor for at lære mere.
      </p>
    </div>
  );
}
