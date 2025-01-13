import CodeBlock from "@/components/CodeBlock";

export default function MiddlewarePage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Middleware i Next.js</h1>

      <h2 className="text-base">Hvad er Middleware?</h2>
      <p className="text-xs">
        Middleware i Next.js er et lag af kode, der kører før en request når en page eller API route. Det kan bruges til en række formål, som f.eks. autentificering, logning, omdirigering eller at tilføje headers til en request. Middleware giver dig mulighed for at ændre requesten, før den når serveren eller klienten.
      </p>

      <h2 className="text-base">Eksempel: Enkel Middleware til at logge requests</h2>
      <p className="text-xs">
        Middleware oprettes i Next.js i filen `middleware.ts` i roden af dit projekt. Her er et simpelt eksempel på, hvordan du kan logge information om en request, før den når en page eller API route.
      </p>

      <CodeBlock
        code={`// middleware.ts
export function middleware(req) {
  console.log('Request modtaget:', req.url);
  return NextResponse.next();
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer Middleware?</h3>
      <ul className="text-xs">
        <li><strong>Filstruktur:</strong> Middleware oprettes som en fil i roden af projektet, normalt som `middleware.ts`.</li>
        <li><strong>Middleware-funktion:</strong> Funktionen modtager `req` (request) og kan vælge at ændre requesten eller sende den videre ved hjælp af `NextResponse.next()`.</li>
        <li><strong>Globalt eller per-rute:</strong> Middleware kan køre globalt for hele applikationen eller være begrænset til specifikke ruter ved at bruge rute-matcher.</li>
      </ul>

      <h5 className="text-base">Eksempel: Middleware til autentificering</h5>
      <p className="text-xs">
        Et typisk brug af Middleware er at sikre, at en bruger er autentificeret, før de kan tilgå en bestemt rute. Her er et eksempel på, hvordan du kan bruge middleware til at tjekke om en bruger er logget ind:
      </p>

      <CodeBlock
        code={`// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('auth-token');
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}`}
        language="javascript"
      />

      <h3 className="text-sm">Hvordan fungerer autentificerings Middleware?</h3>
      <ul className="text-xs">
        <li><strong>Cookies:</strong> Middleware kan tilgå cookies, som i dette tilfælde er brugt til at kontrollere, om en bruger er logget ind via en `auth-token` cookie.</li>
        <li><strong>Omdirigering:</strong> Hvis brugeren ikke er logget ind, bliver de omdirigeret til en login-side.</li>
        <li><strong>NextResponse.next():</strong> Hvis brugeren er autentificeret, fortsætter requesten til den ønskede route via `NextResponse.next()`.</li>
      </ul>

      <h2 className="text-base">Fordele ved Middleware i Next.js</h2>
      <ul className="text-xs">
        <li><strong>Global kontrol:</strong> Middleware giver dig mulighed for at have centraliseret kontrol over, hvordan anmodninger behandles, før de når dine pages eller API routes.</li>
        <li><strong>Forbedret sikkerhed:</strong> Du kan bruge middleware til at sikre, at kun autoriserede brugere kan tilgå bestemte ruter eller API endpoints.</li>
        <li><strong>Fleksibilitet:</strong> Middleware kan bruges til en række opgaver som logning, session management og headers-modifikation.</li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-xs">
        Middleware i Next.js er et kraftfuldt værktøj til at håndtere request-logik på serverniveau før en page eller API route bliver behandlet. Det kan bruges til autentificering, logning, omdirigering og andre operationer, der skal finde sted før den faktiske server-side funktionalitet kører.
      </p>
    </div>
  );
}
