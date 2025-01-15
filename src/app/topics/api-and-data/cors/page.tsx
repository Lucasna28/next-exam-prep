import CodeBlock from "@/components/CodeBlock";

export default function CORSPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">CORS (Cross-Origin Resource Sharing)</h1>
      <p className="text-xs">
        CORS (Cross-Origin Resource Sharing) er en mekanisme, der giver webapplikationer mulighed for at anmode om ressourcer fra en anden domæne end den oprindelige. Dette bruges ofte i API-kald, hvor frontend og backend er på forskellige domæner. CORS sikrer, at en server kun deler ressourcer med domæner, som den tillader.
      </p>

      <h2 className="text-base">Hvordan CORS fungerer</h2>
      <p className="text-xs">
        CORS fungerer ved at tilføje specielle HTTP-headers til serverens svar. Disse headers angiver, hvilke domæner der er tilladt at få adgang til ressourcerne. Når en browser laver en anmodning til en anden domæne, tjekker den serverens CORS-headers for at bestemme, om anmodningen skal tillades.
      </p>

      <h2 className="text-base">Eksempel på CORS i Next.js API Route</h2>
      <CodeBlock
        code={`// pages/api/data.js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers to allow requests from specific domains
  res.setHeader('Access-Control-Allow-Origin', 'https://your-frontend-domain.com'); // Allow requests from this domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allow these HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle actual data requests
  if (req.method === 'GET') {
    res.status(200).json({ message: 'CORS headers are set!' });
  }
}`}
        language="javascript"
      />

      <h2 className="text-base">CORS Fejl og Fejlhåndtering</h2>
      <p className="text-xs">
        Hvis CORS ikke er korrekt konfigureret, kan du opleve fejl som:
      </p>
      <ul className="text-xs">
        <li><strong>Access-Control-Allow-Origin</strong> fejl: Hvis serveren ikke tillader den oprindelige domæne at få adgang til ressourcen.</li>
        <li><strong>OPTIONS request failure</strong>: Preflight-anmodningen (OPTIONS) kan fejle, hvis serveren ikke håndterer den korrekt.</li>
      </ul>

      <h2 className="text-base">Fordele ved CORS</h2>
      <ul className="text-xs">
        <li><strong>Sikkerhed:</strong> CORS beskytter brugerne mod ondsindede anmodninger fra domæner, der ikke er tilladt.</li>
        <li><strong>Adgang til eksterne API'er:</strong> Gør det muligt for din frontend at få adgang til ressourcer på en anden server eller domæne.</li>
        <li><strong>Kontrol:</strong> Servere har kontrol over, hvilke domæner de tillader adgang til deres ressourcer.</li>
      </ul>

      <h2 className="text-base">Next.js og CORS</h2>
      <p className="text-xs">
        Next.js tillader dig at konfigurere CORS i dine API routes. Når du arbejder med API'er, der skal tilgås af en frontend på et andet domæne, er det vigtigt at konfigurere CORS korrekt for at sikre, at anmodningerne bliver accepteret.
      </p>
    </div>
  );
}
