import CodeBlock from "@/components/CodeBlock";

export default function EdgeRenderingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Edge Rendering</h1>
      <p className="text-xs">
        Edge rendering refererer til det at servere dynamisk genereret indhold
        tættere på brugeren ved at bruge servere i det, der kaldes &quot;edge
        locations&quot;. Dette kan reducere latenstiden, da data behandles og
        leveres fra et datacenter nærmere brugeren, hvilket resulterer i
        hurtigere indlæsning og forbedret brugeroplevelse.
      </p>

      <h2 className="text-base">Hvordan Edge Rendering fungerer</h2>
      <p className="text-xs">
        Traditionelt håndteres rendering og server-side generering af indhold på
        en central server. Med edge rendering flyttes disse operationer til
        servere, der er tættere på brugeren. Dette betyder, at anmodninger
        behandles og svar gives fra servere i datacentre, som er geografisk
        tættere på brugeren, hvilket reducerer ventetiden og forbedrer
        performance.
      </p>

      <h2 className="text-base">Eksempel på Edge Rendering med Next.js</h2>
      <CodeBlock
        code={`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  // edge functions in Next.js
  async middleware(req) {
    return new Response('Edge Rendering in action!', { status: 200 });
  }
};`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Edge Rendering</h2>
      <ul className="text-xs">
        <li>
          <strong>Reduceret latenstid:</strong> Ved at behandle og servere data
          tættere på brugeren reduceres den tid, det tager at hente og vise
          indhold.
        </li>
        <li>
          <strong>Forbedret performance:</strong> Servering af data fra
          datacentre tættere på brugeren giver hurtigere load-tider.
        </li>
        <li>
          <strong>Global skalering:</strong> Edge rendering gør det nemt at
          skalere globalt og levere hurtigere oplevelser til brugere over hele
          verden.
        </li>
      </ul>

      <h2 className="text-base">Next.js og Edge Rendering</h2>
      <p className="text-xs">
        I Next.js kan edge rendering implementeres via serverless functions og
        middleware. Ved at bruge Next.js&apos; edge-funktioner kan du køre kode
        på servere tættere på slutbrugeren, hvilket resulterer i hurtigere
        rendering og bedre performance for din applikation.
      </p>
    </div>
  );
}
