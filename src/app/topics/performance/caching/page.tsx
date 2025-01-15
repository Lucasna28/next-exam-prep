import CodeBlock from "@/components/CodeBlock";

export default function CachingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Caching</h1>
      <p className="text-xs">
        Caching er en teknik, der gemmer kopier af ressourcer på en lokal enhed (som en browser eller server) for at undgå at hente dem flere gange. Dette reducerer load-tider og forbedrer applikationens ydeevne ved at hente data fra en hurtigere lokal kilde i stedet for at hente det fra en ekstern server.
      </p>

      <h2 className="text-base">Hvordan Caching fungerer</h2>
      <p className="text-xs">
        Når en bruger besøger en applikation, gemmes visse ressourcer (som billeder, scripts, eller data) i browserens cache. Når brugeren besøger applikationen igen, kan disse ressourcer hentes direkte fra cachen, hvilket gør indlæsningen meget hurtigere.
      </p>

      <h2 className="text-base">Eksempel på Caching i Next.js</h2>
      <CodeBlock
        code={`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Caching</h2>
      <ul className="text-xs">
        <li><strong>Hurtigere indlæsning:</strong> Caching reducerer tiden det tager at hente data eller filer, da de er gemt lokalt.</li>
        <li><strong>Reduceret serverbelastning:</strong> Ved at hente data fra cachen fremfor serveren, minimeres belastningen på serveren.</li>
        <li><strong>Forbedret brugeroplevelse:</strong> Hurtigere load-tider resulterer i en bedre brugeroplevelse.</li>
      </ul>

      <h2 className="text-base">Hvordan du konfigurerer Caching i Next.js</h2>
      <p className="text-xs">
        I Next.js kan du konfigurere caching via headers i din <code>next.config.js</code> fil. I eksemplet ovenfor sætter vi cache-control headers for at sikre, at ressourcer caches i en bestemt periode. 
      </p>
    </div>
  );
}
