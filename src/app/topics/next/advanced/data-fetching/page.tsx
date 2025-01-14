import Link from "next/link";

export default function DataFetchingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Introduktion til Data Fetching i Next.js</h1>

      <p className="text-xs">
        Data Fetching i Next.js giver fleksibilitet til at hente data på forskellige måder afhængigt af dine behov. Uanset om det er på serveren, ved build-tidspunktet eller dynamisk genereret, har Next.js de rigtige værktøjer til opgaven. Nedenfor finder du en oversigt over de vigtigste metoder og links til deres respektive sider:
      </p>

      <h2 className="text-base">Hvad er Data Fetching?</h2>
      <p className="text-xs">
        Next.js tilbyder flere måder at hente data på, hver med sine egne styrker og anvendelsestilfælde:
      </p>
      <ul className="text-xs">
        <li>
          <strong>getServerSideProps:</strong> Henter data ved hver request på serveren.
        </li>
        <li>
          <strong>getStaticProps:</strong> Henter data under build-tidspunktet for statiske sider.
        </li>
        <li>
          <strong>getStaticPaths:</strong> Bruges sammen med <code>getStaticProps</code> til at generere dynamiske ruter.
        </li>
      </ul>

      <h2 className="text-base">Se mere om de enkelte metoder</h2>
      <ul className="text-xs">
        <li>
          <Link href="/topics/next/advanced/data-fetching/serversideprops">
            Server-side Rendering med getServerSideProps
          </Link>
        </li>
        <li>
          <Link href="/topics/next/advanced/data-fetching/staticprops">
            Statisk Side Generering med getStaticProps
          </Link>
        </li>
        <li>
          <Link href="/topics/next/advanced/data-fetching/staticpaths">
            Dynamiske Ruter med getStaticPaths
          </Link>
        </li>
      </ul>

      <h2 className="text-base">Hvornår skal du bruge hvad?</h2>
      <ul className="text-xs">
        <li>
          <strong>getServerSideProps:</strong> Brug dette til sider, der kræver opdaterede data ved hver anmodning, f.eks. dashboards eller profiler.
        </li>
        <li>
          <strong>getStaticProps:</strong> Velegnet til sider med statiske data, som f.eks. blogindlæg eller produktkataloger.
        </li>
        <li>
          <strong>getStaticPaths:</strong> Brug dette til at generere dynamiske ruter baseret på data, som f.eks. specifikke produkt- eller blogindlægssider.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Data Fetching i Next.js giver dig mulighed for at tilpasse dine sider til forskellige behov. Klik på linksene ovenfor for at dykke dybere ned i hver metode.
      </p>
    </div>
  );
}
