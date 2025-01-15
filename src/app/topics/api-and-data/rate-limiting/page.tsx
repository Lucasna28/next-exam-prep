import CodeBlock from "@/components/CodeBlock";

export default function RateLimitingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Rate Limiting</h1>
      <p className="text-xs">
        Rate limiting er en teknik, der anvendes til at begrænse antallet af anmodninger, som en bruger eller klient kan lave til en server inden for et givet tidsrum. Det bruges for at beskytte serveren mod overbelastning og misbrug, for eksempel ved at forhindre DoS (Denial of Service) angreb eller overdrevet brug af API'er.
      </p>

      <h2 className="text-base">Hvordan Rate Limiting fungerer</h2>
      <p className="text-xs">
        Rate limiting fungerer ved at holde styr på antallet af anmodninger fra en bestemt IP-adresse eller API-nøgle i et bestemt tidsvindue (f.eks. 100 anmodninger per minut). Hvis en bruger overskrider denne grænse, vil serveren returnere en fejl, som angiver, at anmodningen er blevet afvist på grund af for mange anmodninger.
      </p>

      <h2 className="text-base">Eksempel på Rate Limiting i Next.js</h2>
      <CodeBlock
        code={`// pages/api/rate-limit.js
import { NextApiRequest, NextApiResponse } from 'next';

const rateLimit = (req: NextApiRequest, res: NextApiResponse) => {
  // Define a simple rate-limiting mechanism (example)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const requests = req.app.locals.requests || {};

  // Set maximum requests per time period
  const maxRequests = 5;
  const timeWindow = 60 * 1000; // 1 minute in milliseconds

  if (!requests[ip]) {
    requests[ip] = [];
  }

  // Remove old timestamps
  requests[ip] = requests[ip].filter(timestamp => timestamp > Date.now() - timeWindow);

  // Check if the IP has exceeded the rate limit
  if (requests[ip].length >= maxRequests) {
    return res.status(429).json({ message: 'Rate limit exceeded. Try again later.' });
  }

  // Add current timestamp
  requests[ip].push(Date.now());

  // Handle the request
  res.status(200).json({ message: 'Request successful' });
};

export default rateLimit;`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Rate Limiting</h2>
      <ul className="text-xs">
        <li><strong>Beskyttelse mod DoS-angreb:</strong> Ved at begrænse antallet af anmodninger kan rate limiting forhindre overbelastning af serveren.</li>
        <li><strong>Forbedret sikkerhed:</strong> Det beskytter API'er mod misbrug ved at sikre, at en enkelt bruger eller klient ikke kan overvælde systemet.</li>
        <li><strong>Effektiv ressourcehåndtering:</strong> Rate limiting hjælper med at fordele serverens ressourcer bedre, hvilket sikrer stabilitet under høj trafik.</li>
      </ul>

      <h2 className="text-base">Rate Limiting i Next.js</h2>
      <p className="text-xs">
        I Next.js kan du nemt implementere rate limiting i dine API routes for at beskytte din server mod overdreven brug. Ved hjælp af et simpelt rate limiting-system som eksemplet ovenfor, kan du holde styr på anmodninger og returnere en passende fejlmeddelelse, hvis grænsen overskrides.
      </p>
    </div>
  );
}
