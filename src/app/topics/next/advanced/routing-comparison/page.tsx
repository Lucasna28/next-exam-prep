import Link from "next/link";

export default function AppVsPagesOverview() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">App Router vs. Pages Router i Next.js</h1>
      <p className="text-xs">
        Next.js introducerer en ny <code>app/</code> struktur i version 13, der giver forbedrede funktioner som serverkomponenter og layouts. Samtidig understøtter Next.js stadig den klassiske <code>pages/</code> struktur.
      </p>

      <h2 className="text-base">Forskellen mellem App Router og Pages Router</h2>
      <ul className="text-xs">
        <li>
          <strong>App Router:</strong> Den nyeste routing-struktur med avancerede funktioner som layouts, streaming og serverkomponenter.
        </li>
        <li>
          <strong>Pages Router:</strong> Den klassiske struktur, der er kendt for sin enkelhed og brede brug.
        </li>
      </ul>

      <h2 className="text-base">Læs mere</h2>
      <ul className="text-xs">
        <li>
          <Link href="/topics/next/advanced/routing-comparison/approuter">
            Læs om App Router
          </Link>
        </li>
        <li>
          <Link href="/topics/next/advanced/routing-comparison/pagesrouter">
            Læs om Pages Router
          </Link>
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Både <code>app/</code> og <code>pages/</code> strukturerne har deres styrker og svagheder. Klik på linksene ovenfor for at lære mere om hver struktur.
      </p>
    </div>
  );
}
